import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Cruise Rent A Car" },
      { name: "description", content: "Browse our complete fleet — economic cars, luxury vehicles, vans and buses. Self drive & with driver options." },
    ],
  }),
  component: FleetPage,
});

type Filter = "all" | "economic" | "luxury" | "vans" | "self-drive" | "with-driver";

function FleetPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = vehicles.filter(v => {
    if (filter === "all") return true;
    if (filter === "economic" || filter === "luxury" || filter === "vans") return v.category === filter;
    return v.drive.includes(filter);
  });

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Vehicles" },
    { key: "economic", label: "Economic" },
    { key: "luxury", label: "Luxury" },
    { key: "vans", label: "Vans & Buses" },
    { key: "self-drive", label: "Self Drive" },
    { key: "with-driver", label: "With Driver" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Complete Collection" title="Our Fleet" subtitle="From efficient daily drivers to flagship luxury — find the perfect vehicle for any occasion." />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                filter === f.key
                  ? "bg-gold text-black border-gold gold-glow"
                  : "border-gold/30 text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((v, i) => <VehicleCard key={v.slug} v={v} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">No vehicles match this filter.</div>
        )}
      </div>
    </div>
  );
}
