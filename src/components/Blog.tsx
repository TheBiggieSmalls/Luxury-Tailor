import { useLanguage } from "@/i18n/LanguageContext";
import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";
import blogImg3 from "@/assets/blog-3.jpg";
import blogImg4 from "@/assets/blog-4.jpg";
import type { TranslationKey } from "@/i18n/translations";

const posts: { img: string; title: TranslationKey; excerpt: TranslationKey; date: string; category: string; slug: string }[] = [
  { img: blogImg1, title: "blog.post1.title", excerpt: "blog.post1.excerpt", date: "Mar 2026", category: "Style", slug: "the-art-of-first-impression" },
  { img: blogImg2, title: "blog.post2.title", excerpt: "blog.post2.excerpt", date: "Feb 2026", category: "Fabrics", slug: "understanding-premium-fabrics" },
  { img: blogImg3, title: "blog.post3.title", excerpt: "blog.post3.excerpt", date: "Jan 2026", category: "Weddings", slug: "grooms-guide-bespoke" },
  { img: blogImg4, title: "blog.post4.title", excerpt: "blog.post4.excerpt", date: "Dec 2025", category: "Seasonal", slug: "seasonal-style-autumn" },
];

const Blog = () => {
  const { t, language } = useLanguage();

  const readMore = language === "nl" ? "Lees Verder" : language === "fr" ? "Lire la Suite" : "Read Article";
  const viewAll = language === "nl" ? "Alle artikelen" : language === "fr" ? "Tous les articles" : "View all articles";

  return (
    <section className="py-36 md:py-48 bg-card">
      <div className="container mx-auto px-6">
        <div data-reveal className="mb-20 md:mb-28 max-w-xl">
          <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">
            {t("blog.tag")}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em]">
            {t("blog.title")}
          </h2>
        </div>

        <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.title} data-reveal className="group cursor-pointer flex flex-col">
              <a href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={post.img}
                    alt={t(post.title)}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-body font-medium">{post.category}</span>
                  <span className="w-4 h-px bg-border" />
                  <span className="text-[9px] tracking-[0.2em] uppercase text-taupe font-body">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-light text-foreground mb-2 group-hover:text-espresso-light transition-colors leading-snug tracking-[-0.01em]">
                  {t(post.title)}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                  {t(post.excerpt)}
                </p>
                <span className="inline-block mt-4 text-[10px] tracking-[0.3em] uppercase text-foreground font-body font-medium group-hover:text-gold transition-colors">
                  {readMore} →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/blog"
            className="inline-block text-[11px] tracking-[0.3em] uppercase font-body font-medium text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            {viewAll} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
