import logoScabal from "@/assets/logo-scabal.png";
import logoLoroPiana from "@/assets/logo-loro-piana.png";
import logoDormeuil from "@/assets/logo-dormeuil.png";
import logoHolland from "@/assets/logo-holland-sherry.png";
import logoVbc from "@/assets/logo-vbc.png";
import logoZegna from "@/assets/logo-zegna.png";
import fabric1 from "@/assets/editorial-fabric-1.jpg";
import fabric2 from "@/assets/editorial-fabric-2.jpg";
import fabric3 from "@/assets/editorial-fabric-3.jpg";
import fabric4 from "@/assets/editorial-fabric-4.jpg";
import fabric5 from "@/assets/editorial-fabric-5.jpg";
import fabric6 from "@/assets/editorial-fabric-6.jpg";

const swatches = [
  { name: "Loro Piana", logo: logoLoroPiana, fabric: fabric1 },
  { name: "Scabal", logo: logoScabal, fabric: fabric2 },
  { name: "Dormeuil", logo: logoDormeuil, fabric: fabric3 },
  { name: "Holland & Sherry", logo: logoHolland, fabric: fabric4 },
  { name: "Vitale Barberis", logo: logoVbc, fabric: fabric5 },
  { name: "Ermenegildo Zegna", logo: logoZegna, fabric: fabric6 },
];

const FabricSwatchGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {swatches.map((s) => (
        <div
          key={s.name}
          className="relative aspect-square overflow-hidden bg-card group"
        >
          <img
            src={s.fabric}
            alt={`${s.name} fabric swatch`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Soft gradient on the left to lift logo legibility */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-foreground/55 via-foreground/25 to-transparent" />
          {/* Logo overlay — covers ~half (left), fabric remains visible right */}
          <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center p-4">
            <img
              src={s.logo}
              alt={s.name}
              loading="lazy"
              className="max-w-full max-h-12 md:max-h-14 object-contain brightness-0 invert opacity-95"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FabricSwatchGrid;
