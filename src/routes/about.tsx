import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Heart, Award, Users } from "lucide-react";
import showroom from "@/assets/showroom.jpg";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cruise Rent A Car" },
      { name: "description", content: "Cruise Rent A Car has provided premium car rental in Pakistan since 2014 — luxury cars, chauffeur services, group transport and more." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2014", title: "Founded in Lahore", text: "Cruise Rent A Car opens its doors with a small fleet and a big vision: redefine premium rental in Pakistan." },
  { year: "2017", title: "Luxury Expansion", text: "Mercedes-Benz, Audi and BMW added to the fleet — luxury becomes our signature." },
  { year: "2020", title: "Nationwide Service", text: "Operations expand across Pakistan with airport transfers and intercity service." },
  { year: "2023", title: "Supercar Collection", text: "Iconic vehicles — Bentley Continental GT, BMW i8, Porsche Taycan — join the lineup." },
  { year: "2026", title: "12+ Years Strong", text: "Trusted by thousands of clients, with a reputation built on detail and dedication." },
];

function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Our Story" title="Driven by Excellence" subtitle="Cruise Rent A Car has redefined premium car rental in Pakistan since 2014." />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src={showroom} alt="Cruise fleet" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 glass px-8 py-6">
              <div className="text-5xl font-display text-gradient-gold">12+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years of Service</div>
            </div>
          </motion.div>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">Cruise Rent A Car started in 2014 with a clear mission: bring world-class luxury rental experiences to Pakistan. Today, with 12+ years behind us, we operate one of the country's most refined fleets.</p>
            <p>We specialize in luxury cars, self-drive rentals, professional chauffeur services, group vans, corporate rentals, and premium airport transfers — all backed by 24/7 support and an obsession with detail.</p>
            <p className="text-gold italic font-display text-2xl">"Every drive should feel like an arrival."</p>
          </div>
        </div>

        {/* Mission / Why */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">
          {[
            { icon: Target, t: "Our Mission", d: "Deliver flawless, premium mobility experiences across Pakistan." },
            { icon: Heart, t: "Client First", d: "Every booking is personal — we obsess over satisfaction." },
            { icon: Award, t: "Premium Fleet", d: "From economy to flagship — every car is showroom-ready." },
            { icon: Users, t: "Professional Drivers", d: "Trained, uniformed and discreet chauffeurs you can trust." },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 gold-border-gradient bg-card text-center"
            >
              <div className="w-14 h-14 grid place-items-center border border-gold/40 text-gold mx-auto mb-4"><item.icon size={22} /></div>
              <h4 className="font-display text-2xl text-gold mb-2">{item.t}</h4>
              <p className="text-sm text-muted-foreground">{item.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24 max-w-3xl mx-auto">
          <SectionTitle eyebrow="Milestones" title="Our Journey" />
          <div className="relative pl-8 border-l border-gold/30 space-y-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[34px] w-3 h-3 bg-gold rotate-45 mt-2" />
                <p className="text-xs uppercase tracking-[0.4em] text-gold">{t.year}</p>
                <h4 className="font-display text-3xl mt-1">{t.title}</h4>
                <p className="text-muted-foreground mt-2">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OWNER */}
        <div className="mt-24 max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Founder & Owner —</p>
          <h3 className="font-display text-5xl md:text-6xl text-gradient-gold leading-tight">Abdullah Zain</h3>
          <div className="luxury-divider my-6 max-w-xs mx-auto" />
          <p className="text-foreground/70 italic leading-relaxed">"Cruise Rent A Car is more than a business — it's my promise of premium service, honest dealing, and unforgettable journeys to every client who trusts us."</p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">— Abdullah Zain, Founder</p>
        </div>
      </div>
    </div>
  );
}
