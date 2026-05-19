import { createFileRoute } from "@tanstack/react-router";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/vans")({
  head: () => ({
    meta: [
      { title: "Vans & Buses — Cruise Rent A Car" },
      { name: "description", content: "Toyota Coaster, HiAce and Toyota HiAce Grand Cabin — premium group transport from Lahore." },
    ],
  }),
  component: () => {
    const items = vehicles.filter(v => v.category === "vans");
    return (
      <div className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Group Travel" title="Vans & Buses" subtitle="Spacious, comfortable, and immaculately maintained for family trips, weddings and corporate tours." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((v, i) => <VehicleCard key={v.slug} v={v} index={i} />)}
          </div>
        </div>
      </div>
    );
  },
});
