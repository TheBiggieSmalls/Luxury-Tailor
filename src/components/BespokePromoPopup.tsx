import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClaimOfferDialog from "@/components/ClaimOfferDialog";

const DISMISS_KEY = "anass:bespoke-popup:dismissed";
const SHOWN_KEY = "anass:any-corner-popup:shown";
const DELAY_MS = 150_000; // ~2.5 min

const BespokePromoPopup = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [claimOpen, setClaimOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on /maatpak (already has inline Promotion section)
    if (pathname.startsWith("/maatpak")) return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    if (sessionStorage.getItem(SHOWN_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      // Re-check: don't combine if another popup grabbed the slot
      if (sessionStorage.getItem(SHOWN_KEY) === "1") return;
      sessionStorage.setItem(SHOWN_KEY, "1");
      setVisible(true);
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  if (!visible && !claimOpen) return null;

  return (
    <>
      {visible && (
        <div className="fixed bottom-6 right-6 z-[90] max-w-[calc(100vw-2rem)] w-[360px] animate-slide-in-bottom">
          <div className="relative bg-espresso text-cream shadow-2xl border border-gold/40 p-6">
            <button
              onClick={close}
              className="absolute top-2 right-2 text-cream/60 hover:text-cream transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3 mb-4">
              <Gift className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-body mb-2">
                  Exclusief
                </p>
                <h3 className="font-heading text-lg font-light leading-snug">
                  10% korting op uw eerste bespoke maatpak.
                </h3>
              </div>
            </div>
            <p className="text-xs text-cream/70 font-body leading-relaxed mb-5">
              Plan een vrijblijvende consultatie en geniet van 10% korting op uw eerste handgemaakte pak — beperkt tot deze maand.
            </p>
            <Button
              className="w-full bg-gold text-espresso hover:bg-gold/90 rounded-none tracking-[0.22em] text-[10px] uppercase py-5"
              onClick={() => {
                setVisible(false);
                setClaimOpen(true);
              }}
            >
              Claim uw korting →
            </Button>
          </div>
        </div>
      )}
      <ClaimOfferDialog open={claimOpen} onOpenChange={setClaimOpen} />
    </>
  );
};

export default BespokePromoPopup;
