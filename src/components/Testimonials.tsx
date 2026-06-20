import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import { Star } from "lucide-react";
import testimonialImg1 from "@/assets/testimonial-1.jpg";
import testimonialImg2 from "@/assets/testimonial-2.jpg";
import testimonialImg3 from "@/assets/testimonial-3.jpg";
import testimonialImg4 from "@/assets/testimonial-4.jpg";
import testimonialImg5 from "@/assets/testimonial-5.jpg";

const testimonials: { img: string; name: string; quote: TranslationKey; role: TranslationKey; stars: number }[] = [
  { img: testimonialImg1, name: "Laurent V.", quote: "testimonials.1.quote", role: "testimonials.1.role", stars: 5 },
  { img: testimonialImg2, name: "Marc D.", quote: "testimonials.2.quote", role: "testimonials.2.role", stars: 5 },
  { img: testimonialImg3, name: "Thomas B.", quote: "testimonials.3.quote", role: "testimonials.3.role", stars: 5 },
  { img: testimonialImg4, name: "Philippe R.", quote: "testimonials.4.quote", role: "testimonials.4.role", stars: 4 },
  { img: testimonialImg5, name: "Jean-Pierre M.", quote: "testimonials.5.quote", role: "testimonials.5.role", stars: 5 },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials].reverse();
const row2Full = [...row2, ...row2];

const ReviewCard = ({ item, t }: { item: typeof testimonials[0]; t: (k: TranslationKey) => string }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-background border border-border p-7 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <img
        src={item.img}
        alt={item.name}
        loading="lazy"
        width={48}
        height={48}
        className="w-11 h-11 rounded-full object-cover"
      />
      <div>
        <p className="font-body text-sm font-medium text-foreground">{item.name}</p>
        <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-body">{t(item.role)}</p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {Array.from({ length: item.stars }).map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
        ))}
      </div>
    </div>
    <p className="font-body text-sm text-muted-foreground leading-[1.8]">"{t(item.quote)}"</p>
  </div>
);

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 md:py-36 bg-card overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <div data-reveal className="text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">{t("testimonials.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground tracking-[-0.01em]">
            {t("testimonials.title")}
          </h2>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="flex gap-4 items-center animate-scroll-left">
          {row1.map((item, i) => (
            <ReviewCard key={`r1-${i}`} item={item} t={t} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 items-center animate-scroll-right">
          {row2Full.map((item, i) => (
            <ReviewCard key={`r2-${i}`} item={item} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
