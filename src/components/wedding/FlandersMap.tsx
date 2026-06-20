import flandersMap from "@/assets/flanders-cities-map.png";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import type { WeddingLocale } from "@/pages/wedding/WeddingPage";

type Hotspot = { name: string; top: string; left: string };

// Coordinates tuned to the new uploaded artwork (city-illustration positions).
const HOTSPOTS: Hotspot[] = [
  { name: "Antwerpen", top: "16%", left: "44%" },
  { name: "Aarschot", top: "30%", left: "60%" },
  { name: "Mechelen", top: "36%", left: "32%" },
  { name: "Diest", top: "42%", left: "76%" },
  { name: "Brussels", top: "70%", left: "20%" },
  { name: "Leuven", top: "68%", left: "42%" },
  { name: "Hasselt", top: "72%", left: "62%" },
];

const copy = {
  nl: {
    blurb: "Atelier Leuven · op afspraak",
    showroom: "Bezoek showroom",
    athome: "Huisbezoek",
    virtual: "Videogesprek",
  },
  fr: {
    blurb: "Atelier Louvain · sur rendez-vous",
    showroom: "Visiter le showroom",
    athome: "Visite à domicile",
    virtual: "Appel vidéo",
  },
  en: {
    blurb: "Atelier Leuven · by appointment",
    showroom: "Showroom visit",
    athome: "House visit",
    virtual: "Video call",
  },
};

const FlandersMap = ({ cities, locale = "nl" }: { cities: string[]; locale?: WeddingLocale }) => {
  const { openBooking } = useBooking();
  const t = copy[locale];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full">
        <img
          src={flandersMap}
          alt={`Map of cities served by Alex Nass: ${cities.join(", ")}`}
          className="w-full h-auto block select-none pointer-events-none"
        />

        {HOTSPOTS.map((h) => (
          <Popover key={h.name}>
            <PopoverTrigger asChild>
              <button
                type="button"
                aria-label={`${h.name} — ${t.showroom} / ${t.athome} / ${t.virtual}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ top: h.top, left: h.left }}
              >
                <span className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-8 w-8 rounded-full border border-gold/70 animate-ping opacity-75" />
                  <span
                    className="absolute inline-flex h-10 w-10 rounded-full border border-gold/40 animate-ping"
                    style={{ animationDelay: "0.6s", animationDuration: "2s" }}
                  />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gold ring-2 ring-background shadow-md transition-transform duration-300 group-hover:scale-150 group-focus-visible:scale-150" />
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="center"
              className="w-60 border-border bg-card p-5 shadow-xl"
            >
              <div className="font-heading text-xl font-light text-foreground">{h.name}</div>
              <div className="mt-1 mb-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
                {t.blurb}
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="hero" size="sm" onClick={() => openBooking("showroom")}>
                  {t.showroom}
                </Button>
                <Button variant="outline" size="sm" onClick={() => openBooking("athome")}>
                  {t.athome}
                </Button>
                <Button variant="outline" size="sm" onClick={() => openBooking("virtual")}>
                  {t.virtual}
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default FlandersMap;
