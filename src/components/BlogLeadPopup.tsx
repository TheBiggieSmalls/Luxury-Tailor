import { useEffect, useRef, useState } from "react";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";

const STORAGE_KEY = "anass:blog-popup:dismissed";
const DELAY_MS = 60_000; // 60s on the website

const EYEBROW = {
  en: "The Status Guide",
  nl: "De Status Gids",
  fr: "Le Guide du Statut",
};
const HEAD = {
  en: "Want to instantly look more powerful?",
  nl: "Wilt u meteen krachtiger ogen?",
  fr: "Envie d'avoir tout de suite plus de prestance ?",
};
const SUB = {
  en: "Grab our free guide: \"The 5 Suit Mistakes That Lower Your Status (and How to Fix Them).\"",
  nl: "Download onze gratis gids: \"De 5 Pakfouten Die Uw Status Verlagen (en Hoe Ze Te Fixen).\"",
  fr: "Recevez notre guide gratuit : « Les 5 Erreurs de Costume Qui Diminuent Votre Prestance (et Comment Les Corriger) ».",
};

const BlogLeadPopup = () => {
  const [open, setOpen] = useState(false);
  const armedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const fire = () => {
      if (armedRef.current) return;
      armedRef.current = true;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    const timer = window.setTimeout(fire, DELAY_MS);

    // Exit-intent: pointer leaves the top of the viewport
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || (e as any).toElement) return;
      if (e.clientY <= 0) fire();
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <LeadCaptureDialog
      open={open}
      onOpenChange={setOpen}
      source="blog-suit-mistakes"
      pdfUrl="/guides/alex-nass-5-suit-mistakes.pdf"
      pdfFilename="Alex-Nass-5-Suit-Mistakes.pdf"
      eyebrow={EYEBROW}
      headline={HEAD}
      subhead={SUB}
    />
  );
};

export default BlogLeadPopup;
