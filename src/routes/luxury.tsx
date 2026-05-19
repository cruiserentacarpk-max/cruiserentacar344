import { createFileRoute } from "@tanstack/react-router";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/luxury")({
  head: () => ({
    meta: [
      { title: "Luxury Cars — Cruise Rent A Car" },
      { name: "description", content: "Rent Mercedes, Porsche, BMW, Audi, Bentley & more. Premium luxury cars in Pakistan with professional chauffeurs." },
    ],
  }),
  component: () => {
    const items = vehicles.filter(v => v.category === "luxury");
    return (
      <div className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Flagship Collection" title="Luxury Cars" subtitle="Bentley, Mercedes-Benz, Porsche, Audi, BMW — the icons of refined motoring." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((v, i) => <VehicleCard key={v.slug} v={v} index={i} />)}
          </div>
        </div>
      </div>
    );
  },
});
