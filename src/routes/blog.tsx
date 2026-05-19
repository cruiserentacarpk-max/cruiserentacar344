import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Cruise Rent A Car" },
      { name: "description", content: "Expert guides on luxury cars, self-drive rentals, road trips, chauffeur services and more across Pakistan." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Insights" title="Journal" subtitle="Stories, guides and expert advice from the world of premium car rental." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.07 }}
              className="group gold-border-gradient bg-card overflow-hidden hover:gold-glow transition-all"
            >
              <Link to="/blog/$slug" params={{ slug: b.slug }} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img src={b.image} alt={b.title} width={1280} height={800} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest bg-black/60 text-gold border border-gold/40 backdrop-blur">{b.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{b.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {b.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors leading-tight">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                    Read Article <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
