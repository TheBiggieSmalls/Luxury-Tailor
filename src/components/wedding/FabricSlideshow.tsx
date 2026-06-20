import { useEffect, useState } from "react";
import logoLoroPiana from "@/assets/logo-loro-piana-v2.png";
import logoStylbiella from "@/assets/logo-stylbiella.png";
import logoScabal from "@/assets/logo-scabal-v2.png";
import logoDrago from "@/assets/logo-drago-v2.png";
import logoAlbini from "@/assets/logo-albini.png";
import logoDormeuil from "@/assets/logo-dormeuil-v2.png";
import logoZegna from "@/assets/logo-zegna-v2.png";
import logoHolland from "@/assets/logo-holland-sherry-v2.png";
import fabric1 from "@/assets/editorial-fabric-1.jpg";
import fabric2 from "@/assets/editorial-fabric-2.jpg";
import fabric3 from "@/assets/editorial-fabric-3.jpg";
import fabric4 from "@/assets/editorial-fabric-4.jpg";
import fabric5 from "@/assets/editorial-fabric-5.jpg";
import fabric6 from "@/assets/editorial-fabric-6.jpg";

const slides = [
  { name: "Loro Piana", logo: logoLoroPiana, fabric: fabric1 },
  { name: "Scabal", logo: logoScabal, fabric: fabric2 },
  { name: "Dormeuil", logo: logoDormeuil, fabric: fabric3 },
  { name: "Holland & Sherry", logo: logoHolland, fabric: fabric4 },
  { name: "Drago", logo: logoDrago, fabric: fabric5 },
  { name: "Ermenegildo Zegna", logo: logoZegna, fabric: fabric6 },
  { name: "Albini", logo: logoAlbini, fabric: fabric1 },
  { name: "Stylbiella", logo: logoStylbiella, fabric: fabric3 },
];

const FabricSlideshow = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-card">
      {slides.map((s, i) => (
        <div
          key={s.name}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={s.fabric}
            alt={`${s.name} fabric`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/65 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 flex items-end justify-start p-6 md:p-8">
            <img
              src={s.logo}
              alt={s.name}
              className="w-auto h-10 md:h-12 max-w-[80%] object-contain object-left brightness-0 invert opacity-95"
            />
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-5 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-px transition-all duration-500 ${i === active ? "w-6 bg-gold" : "w-3 bg-background/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FabricSlideshow;
