import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Fuel, Cog, Calendar, ArrowRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { whatsappLink } from "@/lib/whatsapp";

export function VehicleCard({ v, index = 0 }: { v: Vehicle; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
      className="group relative gold-border-gradient overflow-hidden hover:gold-glow transition-all duration-500 bg-card"
    >
      {/* Visual */}
      <Link to="/vehicle/$slug" params={{ slug: v.slug }} className="block relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={v.image}
          alt={`${v.name} ${v.year} — rent in Pakistan`}
          width={1280}
          height={800}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-black/70 border border-gold/40 text-gold backdrop-blur">
            {v.category === "economic" ? "Economic" : v.category === "luxury" ? "Luxury" : "Group"}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/90 mb-1">{v.year} Model</p>
          <h3 className="font-display text-2xl text-white leading-tight">{v.name}</h3>
        </div>
      </Link>

      <div className="p-6 space-y-5">
        <p className="text-sm text-muted-foreground italic">"{v.tagline}"</p>
        <div className="grid grid-cols-4 gap-2 text-center">
          <Spec icon={<Users size={14} />} label={`${v.seats}`} />
          <Spec icon={<Cog size={14} />} label={v.transmission.slice(0,4)} />
          <Spec icon={<Fuel size={14} />} label={v.fuel.slice(0,4)} />
          <Spec icon={<Calendar size={14} />} label={`${v.year}`} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {v.drive.includes("self-drive") && <Tag>Self Drive</Tag>}
          {v.drive.includes("with-driver") && <Tag>With Driver</Tag>}
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <a href={whatsappLink(v.name)} target="_blank" rel="noreferrer" className="text-center text-xs uppercase tracking-widest py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all">
            Call For Price
          </a>
          <Link to="/vehicle/$slug" params={{ slug: v.slug }} className="flex items-center justify-center gap-1 text-xs uppercase tracking-widest py-3 gradient-gold text-black hover:opacity-90 transition-opacity">
            View Details <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2 bg-background/60">
      <span className="text-gold">{icon}</span>
      <span className="text-[10px] uppercase tracking-wider text-foreground/70">{label}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-gold/30 text-gold/90">{children}</span>;
}
