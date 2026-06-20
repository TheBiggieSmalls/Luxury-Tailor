import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import shopShirts from "@/assets/shop-shirts.jpg";
import shopPolos from "@/assets/shop-polos.jpg";
import shopBowties from "@/assets/shop-bowties.jpg";
import shopCoats from "@/assets/shop-coats.jpg";
import ProductModal from "@/components/ProductModal";

const categories: { title: TranslationKey; desc: TranslationKey; img: string; price: string; type: string }[] = [
  { title: "shop.shirts", desc: "shop.shirts.desc", img: shopShirts, price: "€189", type: "shirts" },
  { title: "shop.polos", desc: "shop.polos.desc", img: shopPolos, price: "€149", type: "polos" },
  { title: "shop.bowties", desc: "shop.bowties.desc", img: shopBowties, price: "€79", type: "bowties" },
  { title: "shop.coats", desc: "shop.coats.desc", img: shopCoats, price: "€490", type: "coats" },
];

const ShopNow = () => {
  const { t, language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ img: string; title: string; price: string } | null>(null);

  const openProduct = (cat: typeof categories[0]) => {
    setSelectedProduct({ img: cat.img, title: t(cat.title), price: cat.price });
    setModalOpen(true);
  };

  const buyLabel = language === "nl" ? "Koop Nu →" : language === "fr" ? "Acheter →" : "Buy Now →";

  return (
    <section id="shop" className="py-36 md:py-48 bg-card">
      <div className="container mx-auto px-6">
        <div data-reveal className="mb-20 md:mb-28 max-w-xl">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">{t("shop.tag")}</p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
            {t("shop.title")}
          </h2>
        </div>

        <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group cursor-pointer"
              onClick={() => openProduct(cat)}
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-card">
                <img
                  src={cat.img}
                  alt={t(cat.title)}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground group-hover:text-espresso-light transition-colors tracking-[-0.01em]">
                    {t(cat.title)}
                  </h3>
                  <span className="font-heading text-lg text-foreground/50">{cat.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {t(cat.desc)}
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-body font-medium pt-2 group-hover:text-foreground transition-colors">
                  {buyLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal open={modalOpen} onOpenChange={setModalOpen} product={selectedProduct} />
    </section>
  );
};

export default ShopNow;
