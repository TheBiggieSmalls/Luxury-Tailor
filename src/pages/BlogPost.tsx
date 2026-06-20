import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { useLanguage } from "@/i18n/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";
import BlogLeadPopup from "@/components/BlogLeadPopup";

const labels = {
  back: { nl: "← Terug naar journal", fr: "← Retour au journal", en: "← Back to journal" },
  related: { nl: "Misschien ook interessant", fr: "Vous aimerez aussi", en: "You may also enjoy" },
  min: { nl: "min lezen", fr: "min de lecture", en: "min read" },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `https://bespoke-canvas-charm.lovable.app/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[language],
    description: post.excerpt[language],
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Alex Nass" },
    mainEntityOfPage: url,
  };

  return (
    <>
      <Helmet>
        <title>{post.title[language]} | Alex Nass</title>
        <meta name="description" content={post.excerpt[language]} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title[language]} />
        <meta property="og:description" content={post.excerpt[language]} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <AnnouncementBar />
      <Navbar />

      <main className="bg-background text-foreground">
        <article>
          {/* Hero */}
          <header className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <Link
                to="/blog"
                className="inline-block text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body mb-8"
              >
                {labels.back[language]}
              </Link>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-body font-medium">{post.category}</span>
                <span className="w-4 h-px bg-border" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-taupe font-body">{post.date}</span>
                <span className="w-4 h-px bg-border" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-taupe font-body">{post.readMinutes} {labels.min[language]}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-[-0.02em]">
                {post.title[language]}
              </h1>
            </div>
          </header>

          {/* Image */}
          <div className="container mx-auto px-6 max-w-4xl mb-16">
            <div className="aspect-[16/10] overflow-hidden bg-card">
              <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Body */}
          <div className="container mx-auto px-6 max-w-2xl pb-24 md:pb-32">
            <p className="font-heading text-xl md:text-2xl font-light italic text-foreground/80 leading-[1.6] mb-12">
              {post.excerpt[language]}
            </p>
            <div className="space-y-7 font-body text-base text-foreground/85 leading-[1.9]">
              {post.body[language].split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="bg-card py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              {labels.related[language]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden mb-5 bg-background">
                    <img
                      src={p.image}
                      alt={p.title[language]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-body font-medium mb-2">{p.category}</span>
                  <h3 className="font-heading text-lg font-light text-foreground leading-snug">{p.title[language]}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BlogLeadPopup />
    </>
  );
};

export default BlogPost;
