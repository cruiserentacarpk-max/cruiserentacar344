import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { blogs, type BlogSection } from "@/data/blogs";

const SITE = "https://cruiserentacar.lovable.app";
const WA = "https://wa.me/923001234567";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const blog = blogs.find(b => b.slug === params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const b = loaderData.blog;
    const url = `${SITE}/blog/${params.slug}`;
    const img = `${SITE}${b.image}`;
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: b.title,
      description: b.metaDescription,
      image: img,
      datePublished: b.date,
      author: { "@type": "Organization", name: "Cruise Rent A Car" },
      publisher: {
        "@type": "Organization",
        name: "Cruise Rent A Car",
        logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
      },
      mainEntityOfPage: url,
      keywords: b.keywords.join(", "),
    };
    const faqSchema = b.faqs?.length ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: b.faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    } : null;
    return {
      meta: [
        { title: `${b.title} — Cruise Rent A Car` },
        { name: "description", content: b.metaDescription },
        { name: "keywords", content: b.keywords.join(", ") },
        { property: "og:title", content: b.title },
        { property: "og:description", content: b.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: b.title },
        { name: "twitter:description", content: b.metaDescription },
        { name: "twitter:image", content: img },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        ...(faqSchema ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }] : []),
      ],
    };
  },
  errorComponent: () => <div className="container mx-auto px-6 py-32 text-center"><p>Failed to load article.</p></div>,
  notFoundComponent: () => <div className="container mx-auto px-6 py-32 text-center"><h1 className="font-display text-4xl text-gold">Article Not Found</h1><Link to="/blog" className="mt-6 inline-block text-gold underline">Back to Blog</Link></div>,
  component: BlogPost,
});

function BlogPost() {
  const { blog } = Route.useLoaderData();
  const related = blogs.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— {blog.category} —</p>
        <h1 className="font-display text-4xl md:text-6xl text-gradient-gold leading-tight">{blog.title}</h1>
        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span>{blog.date}</span><span>·</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
        </div>

        <div className="my-10 aspect-[16/9] bg-black relative overflow-hidden">
          <img src={blog.image} alt={blog.title} width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/85 leading-relaxed">
          <p className="text-xl font-display italic text-gold/90">{blog.intro}</p>

          {blog.sections.map((s: BlogSection, i: number) => (
            <section key={i} className="space-y-4">
              <h2 className="font-display text-3xl text-gold mt-10">{s.h2}</h2>
              {s.body.map((p: string, j: number) => <p key={j}>{p}</p>)}
            </section>
          ))}

          {blog.faqs && blog.faqs.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-display text-3xl text-gold mt-10">Frequently Asked Questions</h2>
              {blog.faqs.map((f: { q: string; a: string }, i: number) => (
                <div key={i} className="border-l-2 border-gold/40 pl-4">
                  <h3 className="font-display text-xl text-foreground">{f.q}</h3>
                  <p className="mt-2 text-foreground/80">{f.a}</p>
                </div>
              ))}
            </section>
          )}

          <section className="mt-12 p-6 gold-border-gradient bg-card text-center">
            <h3 className="font-display text-2xl text-gradient-gold">Ready to Book?</h3>
            <p className="mt-2 text-sm text-muted-foreground">WhatsApp Cruise Rent A Car for instant availability and pricing in Lahore.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-gold text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold/90 transition">
              <MessageCircle size={14} /> Chat on WhatsApp
            </a>
          </section>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Share:</span>
          {[Facebook, Twitter, Linkedin].map((Icon, i) => (
            <button key={i} className="w-10 h-10 grid place-items-center border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all">
              <Icon size={14} />
            </button>
          ))}
        </div>

        <div className="luxury-divider my-16" />

        <h3 className="font-display text-3xl text-gradient-gold mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map(r => (
            <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="block p-5 gold-border-gradient bg-card hover:gold-glow transition-all">
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2">{r.category}</p>
              <h4 className="font-display text-lg leading-tight">{r.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
