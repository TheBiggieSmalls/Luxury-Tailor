import weddingImg from "@/assets/cat-wedding.jpg";
import businessImg from "@/assets/cat-business.jpg";
import tuxedoImg from "@/assets/cat-tuxedo.jpg";
import casualImg from "@/assets/cat-casual.jpg";
import suitVideo from "@/assets/collection-suit-video.mp4.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const categoryKeys: { title: TranslationKey; desc: TranslationKey; img: string; video?: string; key: "wedding" | "business" | "tuxedo" | "casual" }[] = [
  { key: "wedding", title: "collection.wedding", desc: "collection.wedding.desc", img: weddingImg },
  { key: "business", title: "collection.business", desc: "collection.business.desc", img: businessImg, video: suitVideo.url },
  { key: "tuxedo", title: "collection.tuxedo", desc: "collection.tuxedo.desc", img: tuxedoImg },
  { key: "casual", title: "collection.casual", desc: "collection.casual.desc", img: casualImg },
];

const Collection = () => {
  const { t, language } = useLanguage();

  const weddingHref =
    language === "nl" ? "/trouwpak-op-maat" :
    language === "fr" ? "/costume-mariage-sur-mesure" :
    "/custom-wedding-suits";

  const linkFor = (key: string) => (key === "wedding" ? weddingHref : "#wizard");

  return (
    <section id="collection" className="bg-card">
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div data-reveal className="max-w-xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">{t("collection.tag")}</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
              {t("collection.title")}
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 min-h-screen">
        {categoryKeys.map((cat) => (
          <a
            href={linkFor(cat.key)}
            key={cat.title}
            className="group relative overflow-hidden cursor-pointer block"
            aria-label={t(cat.title)}
          >
            {cat.video ? (
              <video
                src={cat.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                style={{ objectPosition: "center 15%" }}
              />
            ) : (
              <img
                src={cat.img}
                alt={t(cat.title)}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                style={{ objectPosition: "center 15%" }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transform transition-transform duration-500">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 tracking-[-0.01em]">
                {t(cat.title)}
              </h3>
              <p className="text-xs md:text-sm text-white/60 font-body leading-relaxed max-w-[200px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {t(cat.desc)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Collection;
