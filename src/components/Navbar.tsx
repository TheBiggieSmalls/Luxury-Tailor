import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import SocialIcons from "@/components/SocialIcons";
import { X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/alexnass-logo.png.asset.json";

type Sub = { label: string; href: string };
type Item = { label: string; href: string; children?: Sub[] };

const MOBILE_NAV_ITEMS: Item[] = [
  { label: "Trouwpak", href: "/trouwpak-op-maat" },
  { label: "Maatpak", href: "/maatpak" },
  { label: "Hemd op Maat", href: "/hemden-op-maat" },
  { label: "Collectie", href: "/collectie" },
  { label: "Zakelijk", href: "/zakelijk" },
  { label: "Lidmaatschap", href: "/lidmaatschap" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Journal", href: "/journaal" },
];

const PRIMARY_LINKS: { label: string; href: string }[] = [
  { label: "Trouwpak", href: "/trouwpak-op-maat" },
  { label: "Maatpak", href: "/maatpak" },
  { label: "Hemden", href: "/hemden-op-maat" },
];

const MORE_LINKS: { label: string; href: string }[] = [
  { label: "Collectie", href: "/collectie" },
  { label: "Zakelijk", href: "/zakelijk" },
  { label: "Lidmaatschap", href: "/lidmaatschap" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Journal", href: "/journaal" },
];

const LANGS = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
] as const;

const LangToggle = ({ scrolled, onHero }: { scrolled: boolean; onHero: boolean }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const active = (language as "nl" | "en" | "fr") ?? "nl";

  const select = (code: "nl" | "en" | "fr") => {
    setLanguage(code);
    setOpen(false);
    if (code !== "nl") navigate("/coming-soon/binnenkort");
  };

  const color = onHero && !scrolled ? "rgba(232,221,208,0.7)" : "#7A6A54";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[10px] tracking-[0.18em] uppercase font-body font-medium transition-colors duration-300"
        style={{ color }}
      >
        {active.toUpperCase()}
        <ChevronDown className="w-3 h-3" strokeWidth={2} />
      </button>
      {open && (
        <div className="absolute right-0 top-full pt-2 min-w-[80px] animate-fade-in">
          <div className="bg-[#F5F0E8] border-[0.5px] border-[rgba(196,168,130,0.35)] shadow-lg py-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => select(l.code)}
                className={`block w-full text-left px-4 py-1.5 text-[10px] tracking-[0.18em] font-body transition-colors ${
                  active === l.code
                    ? "text-[#2A1F14] font-semibold"
                    : "text-[#6B5A48] hover:text-[#2A1F14]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MenuLines = ({ color }: { color: string }) => (
  <span className="flex flex-col items-end gap-1 mr-2">
    <span className="block h-px" style={{ width: 22, background: color }} />
    <span className="block h-px" style={{ width: 14, background: color }} />
  </span>
);

const Navbar = () => {
  const { openBooking } = useBooking();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Only the homepage uses the transparent-over-hero state
  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = onHero && !scrolled;

  const linkColor = transparent ? "rgba(232,221,208,0.7)" : "#7A6A54";
  const linkHoverColor = transparent ? "#FFFFFF" : "#2A1F14";
  const dividerColor = transparent ? "rgba(255,255,255,0.1)" : "rgba(196,168,130,0.25)";
  const menuLineColor = transparent ? "#E8DDD0" : "#2A1F14";

  return (
    <>
      <nav
        className="fixed top-[28px] left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: transparent ? "transparent" : "#F0EAE0",
          borderBottom: transparent ? "0.5px solid rgba(255,255,255,0.05)" : "0.5px solid rgba(196,168,130,0.25)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between py-3 md:py-3.5 px-6 gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center" aria-label="Alex Nass">
            <img
              src={logoAsset.url}
              alt="Alex Nass"
              className="h-8 md:h-10 w-auto transition-all duration-300"
              style={{
                filter: transparent
                  ? "invert(1) brightness(1.05) sepia(0.15) hue-rotate(-10deg) saturate(0.6)"
                  : "none",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: 28 }}>
            {PRIMARY_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-[12px] tracking-[0.16em] uppercase font-body font-medium transition-colors duration-300"
                style={{ color: linkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {l.label}
              </Link>
            ))}

            {/* Meer dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[12px] tracking-[0.16em] uppercase font-body font-medium transition-colors duration-300"
                style={{ color: linkColor }}
              >
                Meer
                <ChevronDown
                  className="w-3.5 h-3.5"
                  strokeWidth={2}
                  style={{ color: transparent ? "#C4A882" : "#7A6A54" }}
                />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full pt-2 min-w-[200px] animate-fade-in">
                  <div className="bg-[#F5F0E8] border-[0.5px] border-[rgba(196,168,130,0.35)] shadow-lg">
                    {MORE_LINKS.map((l, i) => (
                      <Link
                        key={l.label}
                        to={l.href}
                        className="block text-[11px] tracking-[0.14em] uppercase font-body transition-colors text-[#6B5A48] hover:text-[#2A1F14] hover:bg-[rgba(196,168,130,0.06)]"
                        style={{
                          padding: "10px 22px",
                          borderBottom: i < MORE_LINKS.length - 1 ? "0.5px solid rgba(196,168,130,0.1)" : "none",
                        }}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <span className="h-4 w-px transition-colors duration-300" style={{ background: dividerColor }} />

            <LangToggle scrolled={scrolled} onHero={onHero} />

            <button
              onClick={() => openBooking()}
              className="inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body font-medium transition-colors duration-300 rounded-none"
              style={{
                background: transparent ? "#C4A882" : "#2A1F14",
                color: transparent ? "#2A1F14" : "#F0EAE0",
              }}
            >
              Afspraak →
            </button>
          </div>

          {/* Mobile: hamburger + Afspraak */}
          <div className="md:hidden flex items-center gap-3">
            <LangToggle scrolled={scrolled} onHero={onHero} />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex items-center transition-opacity"
              aria-label="Open menu"
              style={{ color: menuLineColor }}
            >
              <MenuLines color={menuLineColor} />
              <span className="text-[10px] tracking-[0.22em] uppercase font-body font-medium" style={{ color: menuLineColor }}>
                Menu
              </span>
            </button>
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center px-3 py-2 text-[9px] tracking-[0.2em] uppercase font-body font-medium transition-colors rounded-none"
              style={{
                background: transparent ? "#C4A882" : "#2A1F14",
                color: transparent ? "#2A1F14" : "#F0EAE0",
              }}
            >
              Afspraak →
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-background transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border/40">
            <img src={logoAsset.url} alt="Alex Nass" className="h-8 w-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-foreground p-1 hover:opacity-70"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 md:px-16 py-10 md:py-14">
            <ul className="space-y-5 md:space-y-7 max-w-3xl">
              {MOBILE_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-3xl md:text-5xl font-light text-foreground hover:text-espresso transition-colors block leading-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/40 px-6 md:px-16 py-8 md:py-10 space-y-5">
            <a
              href="mailto:info@maisondael.be"
              className="block text-sm font-body text-foreground/80 hover:text-foreground tracking-wide"
            >
              info@maisondael.be
            </a>
            <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-body">
              Brussel · Antwerpen · Gent · Leuven
            </p>
            <SocialIcons
              gap="gap-6"
              className="text-muted-foreground hover:text-foreground"
              links={[
                { label: "Instagram", href: "https://instagram.com/alexnass" },
                { label: "Facebook", href: "https://facebook.com/alexnass" },
                { label: "LinkedIn", href: "https://linkedin.com/company/alexnass" },
                { label: "WhatsApp", href: "https://wa.me/32000000000" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
