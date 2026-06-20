import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import shirtImg1 from "@/assets/shirt-detail-1.jpg";
import shirtImg2 from "@/assets/shirt-detail-2.jpg";
import shirtVideo from "@/assets/shirt-detail-video.mp4.asset.json";

const TailoredShirts = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();
  const headerRef = useScrollReveal();
  const imgRef1 = useScrollReveal({ delay: 100 });
  const imgRef2 = useScrollReveal({ delay: 200 });
  const videoRef = useScrollReveal({ delay: 300 });

  const points = [
    t("shirts.point1"),
    t("shirts.point2"),
    t("shirts.point3"),
    t("shirts.point4"),
  ];

  const priceLabel = language === "nl" ? "MTM Hemden vanaf" : language === "fr" ? "Chemises MTM à partir de" : "MTM Shirts starting from";

  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div ref={imgRef1} className="aspect-[3/4] overflow-hidden col-span-2">
              <img src={shirtImg1} alt="Shirt collar detail" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
            </div>
            <div ref={imgRef2} className="aspect-square overflow-hidden">
              <img src={shirtImg2} alt="French cuff detail" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
            </div>
            <div ref={videoRef} className="aspect-square overflow-hidden">
              <video
                src={shirtVideo.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div ref={headerRef} className="space-y-8">
            <p className="text-[11px] tracking-[0.4em] uppercase text-taupe font-body">
              {t("shirts.tag")}
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground leading-[1.1]">
              {t("shirts.title")}
            </h2>
            {/* Premium price display */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-5xl md:text-6xl font-light text-foreground tracking-tight">€150</span>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-taupe font-body leading-none">{priceLabel}</span>
                  <span className="w-12 h-px bg-gold/40 mt-2" />
                </div>
              </div>
            </div>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-muted-foreground font-body text-sm leading-relaxed">
                  <span className="text-gold-muted mt-0.5 text-xs shrink-0">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button variant="hero" size="lg" className="px-10 py-6" onClick={openBooking}>
                {t("shirts.cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredShirts;
