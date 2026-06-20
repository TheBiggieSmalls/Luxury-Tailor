import { Link } from "react-router-dom";
import catWedding from "@/assets/cat-wedding.jpg";
import catBusiness from "@/assets/cat-business.jpg";
import shirtDetail from "@/assets/shirt-detail-1.jpg";
import shopBowties from "@/assets/shop-bowties.jpg";
import suitVideo from "@/assets/collection-suit-video.mp4.asset.json";

type Card = {
  title: string;
  sub: string;
  cta: string;
  href: string;
  img?: string;
  video?: string;
};

const CARDS: Card[] = [
  { title: "Trouwpak", sub: "Bespoke voor uw trouwdag", cta: "Ontdek", href: "/trouwpak-op-maat", img: catWedding },
  { title: "Maatpak", sub: "Zakelijk · Smoking · Smart casual", cta: "Ontdek", href: "/maatpak", video: suitVideo.url, img: catBusiness },
  { title: "Hemd op maat", sub: "Configureer online · Vanaf €150", cta: "Ontwerp", href: "/hemden-op-maat", img: shirtDetail },
  { title: "Collectie", sub: "Polo · Vlinderdas · Overjas", cta: "Bekijk", href: "/collectie", img: shopBowties },
];

const HomeCategories = () => {
  return (
    <section style={{ background: "#F0EBE3" }} className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <p
          className="font-body uppercase"
          style={{ fontSize: 12, letterSpacing: "0.28em", color: "#9B8878" }}
        >
          Wat wij maken
        </p>
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 300,
            color: "#2A1F14",
            marginTop: 12,
            marginBottom: 48,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Gemaakt voor elke gelegenheid.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className="group block bg-[#FBF7F0]"
            >
              {/* Image / video on top */}
              <div className="relative overflow-hidden aspect-[4/5]">
                {c.video ? (
                  <video
                    src={c.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={c.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                  />
                )}
              </div>
              {/* Text below image */}
              <div className="px-5 py-6">
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 24,
                    color: "#2A1F14",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: 13,
                    color: "#6B5A48",
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {c.sub}
                </p>
                <span
                  className="font-body uppercase inline-flex items-center"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: "#C4A882",
                    marginTop: 16,
                    gap: 8,
                  }}
                >
                  {c.cta} <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
