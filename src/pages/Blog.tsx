import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { useLanguage } from "@/i18n/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import BlogLeadPopup from "@/components/BlogLeadPopup";

const labels = {
  tag: { nl: "Journaal", fr: "Journal", en: "Journal" },
  title: {
    nl: "Verhalen uit het atelier",
    fr: "Histoires de l'atelier",
    en: "Notes from the atelier",
  },
  intro: {
    nl: "Stof, vakmanschap en de stille details van een leven goed gekleed.",
    fr: "Tissus, savoir-faire et les détails discrets d'une vie bien habillée.",
    en: "Cloth, craft and the quiet details of a well-dressed life.",
  },
  search: { nl: "Zoek artikelen…", fr: "Rechercher…", en: "Search articles…" },
  all: { nl: "Alle", fr: "Tous", en: "All" },
  empty: {
    nl: "Geen artikelen gevonden.",
    fr: "Aucun article trouvé.",
    en: "No articles found.",
  },
  read: { nl: "Lees verder", fr: "Lire la suite", en: "Read article" },
  min: { nl: "min", fr: "min", en: "min" },
};

const Blog = () => {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map((p) => p.category)));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const inCat = category === "all" || p.category === category;
      if (!inCat) return false;
      if (!q) return true;
      const title = p.title[language].toLowerCase();
      const excerpt = p.excerpt[language].toLowerCase();
      return title.includes(q) || excerpt.includes(q) || p.category.toLowerCase().includes(q);
    });
  }, [query, category, language]);

  return (
    <>
      <Helmet>
        <title>Journal — Notes from the atelier | Alex Nass</title>
        <meta
          name="description"
          content="Long-form writing on bespoke tailoring, fabrics, wedding suits and the craft of dressing well — from our atelier near Leuven."
        />
        <link rel="canonical" href="https://bespoke-canvas-charm.lovable.app/blog" />
        <meta property="og:title" content="Journal — Notes from the atelier | Alex Nass" />
        <meta property="og:description" content="Long-form writing on bespoke tailoring, fabrics, wedding suits and the craft of dressing well — from our atelier near Leuven." />
        <meta property="og:url" content="https://bespoke-canvas-charm.lovable.app/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background text-foreground">
        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-body mb-5">
              {labels.tag[language]}
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
              {labels.title[language]}
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.85] max-w-xl mx-auto">
              {labels.intro[language]}
            </p>
          </div>
        </section>

        {/* Controls */}
        <section className="pb-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 border-b border-border py-3 mb-6">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={labels.search[language]}
                className="flex-1 bg-transparent text-foreground font-body text-sm tracking-wide outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <button
                onClick={() => setCategory("all")}
                className={`text-[10px] tracking-[0.3em] uppercase font-body transition-colors ${
                  category === "all" ? "text-foreground border-b border-foreground pb-1" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {labels.all[language]}
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-[10px] tracking-[0.3em] uppercase font-body transition-colors ${
                    category === c ? "text-foreground border-b border-foreground pb-1" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="pb-32 md:pb-40">
          <div className="container mx-auto px-6 max-w-6xl">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground font-body py-20">{labels.empty[language]}</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
                {filtered.map((post) => (
                  <article key={post.slug} className="group flex flex-col">
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="aspect-[4/5] overflow-hidden mb-5 bg-card">
                        <img
                          src={post.image}
                          alt={post.title[language]}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-body font-medium">{post.category}</span>
                        <span className="w-4 h-px bg-border" />
                        <span className="text-[9px] tracking-[0.2em] uppercase text-taupe font-body">{post.date}</span>
                        <span className="w-4 h-px bg-border" />
                        <span className="text-[9px] tracking-[0.2em] uppercase text-taupe font-body">{post.readMinutes} {labels.min[language]}</span>
                      </div>
                      <h2 className="font-heading text-xl md:text-2xl font-light text-foreground mb-3 group-hover:text-espresso-light transition-colors leading-snug tracking-[-0.01em]">
                        {post.title[language]}
                      </h2>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                        {post.excerpt[language]}
                      </p>
                      <span className="inline-block mt-4 text-[10px] tracking-[0.3em] uppercase text-foreground font-body font-medium group-hover:text-gold transition-colors">
                        {labels.read[language]} →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BlogLeadPopup />
    </>
  );
};

export default Blog;
