import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Calendar, MapPin, Users, Cog, Fuel, Snowflake, Shield, CheckCircle2 } from "lucide-react";
import { getVehicle, vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/whatsapp";
import { VehicleCard } from "@/components/VehicleCard";

export const Route = createFileRoute("/vehicle/$slug")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.vehicle.name} — Cruise Rent A Car` },
      { name: "description", content: `Rent ${loaderData.vehicle.name} in Pakistan. ${loaderData.vehicle.tagline}` },
    ] : [],
  }),
  errorComponent: () => <div className="container mx-auto px-6 py-32 text-center"><p>Failed to load vehicle.</p></div>,
  notFoundComponent: () => (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-4xl text-gold">Vehicle Not Found</h1>
      <Link to="/fleet" className="mt-6 inline-block text-gold underline">Back to Fleet</Link>
    </div>
  ),
  component: VehicleDetail,
});

function VehicleDetail() {
  const { vehicle: v } = Route.useLoaderData();
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("1 Day");
  const [pickup, setPickup] = useState("");

  const fullDuration = date ? `${duration} starting ${date}${pickup ? ` from ${pickup}` : ""}` : duration;
  const related = vehicles.filter(x => x.category === v.category && x.slug !== v.slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/20 blur-[150px] rounded-full" />

        <div className="relative container mx-auto px-6">
          <Link to="/fleet" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Fleet
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— {v.category === "luxury" ? "Luxury" : v.category === "vans" ? "Group Travel" : "Premium"} · {v.year} —</p>
              <h1 className="font-display text-5xl md:text-7xl text-gradient-gold leading-[1.02]">{v.name}</h1>
              <p className="mt-6 text-xl italic text-foreground/80">"{v.tagline}"</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {v.drive.includes("self-drive") && <span className="px-4 py-2 text-xs uppercase tracking-widest border border-gold text-gold">Self Drive</span>}
                {v.drive.includes("with-driver") && <span className="px-4 py-2 text-xs uppercase tracking-widest bg-gold text-black">With Driver</span>}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={whatsappLink(v.name)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-black text-sm uppercase tracking-widest gold-glow hover:gold-glow-strong transition-all">
                  <MessageCircle size={16} /> Call For Price
                </a>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[16/12] relative overflow-hidden gold-glow-strong bg-black">
                <img src={v.image} alt={`${v.name} ${v.year}`} width={1280} height={800} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 text-right">
                  <p className="font-display text-4xl text-white/95">{v.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{v.year} · {v.transmission}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 border-y border-gold/20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
          {[
            { icon: Users, label: "Seats", value: v.seats },
            { icon: Cog, label: "Transmission", value: v.transmission },
            { icon: Fuel, label: "Fuel", value: v.fuel },
            { icon: Calendar, label: "Model", value: v.year },
            { icon: Snowflake, label: "A/C", value: "Yes" },
            { icon: Shield, label: "Airbags", value: "Yes" },
          ].map(s => (
            <div key={s.label}>
              <s.icon size={22} className="text-gold mx-auto mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="font-display text-2xl text-foreground mt-1">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features + Booking */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Features */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-4xl text-gradient-gold mb-6">Features & Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {v.features.map((f: string) => (
                  <div key={f} className="flex items-center gap-3 p-4 gold-border-gradient bg-card">
                    <CheckCircle2 size={18} className="text-gold shrink-0" /> <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-gradient-gold mb-6">About This Vehicle</h2>
              <p className="text-foreground/80 leading-relaxed">
                The {v.name} is a {v.year} {v.category === "luxury" ? "luxury flagship" : v.category === "vans" ? "premium group transport" : "modern premium"} vehicle in our fleet. Seating {v.seats} comfortably with {v.transmission.toLowerCase()} transmission and {v.fuel.toLowerCase()} power, it's available {v.drive.length === 2 ? "for both self drive and with a professional chauffeur" : v.drive.includes("with-driver") ? "exclusively with our professional chauffeurs" : "for self drive"}.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Every {v.name} in our care is detailed before delivery — interior fragranced, exterior polished, mechanics verified. We make no compromises.
              </p>
            </div>
          </div>

          {/* Booking */}
          <aside className="lg:sticky lg:top-28 self-start p-8 gold-border-gradient bg-card gold-glow">
            <h3 className="font-display text-3xl text-gradient-gold mb-2">Book {v.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">Reserve via WhatsApp — instant confirmation.</p>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gold flex items-center gap-2 mb-2"><Calendar size={12} /> Pickup Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Duration</label>
                <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none">
                  {["1 Day","2 Days","3 Days","1 Week","2 Weeks","1 Month"].map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gold flex items-center gap-2 mb-2"><MapPin size={12} /> Pickup Location</label>
                <input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="City or address" className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none" />
              </div>
            </div>

            <a href={whatsappLink(v.name, fullDuration)} target="_blank" rel="noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 py-4 gradient-gold text-black text-sm uppercase tracking-widest hover:gold-glow-strong transition-all">
              <MessageCircle size={16} /> Book Now on WhatsApp
            </a>
            <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-muted-foreground">No prices online — Call For Price</p>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <h3 className="font-display text-4xl text-gradient-gold mb-10 text-center">You May Also Like</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, i) => <VehicleCard key={r.slug} v={r} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
