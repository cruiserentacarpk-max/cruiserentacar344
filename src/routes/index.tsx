import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Sparkles, Car, Users, Clock, Shield, MapPin, Award, Star, ChevronDown, Calendar as CalendarIcon, Search, Plane, Briefcase, Heart, Mountain, Truck, Fuel, BadgeCheck, Wallet, LifeBuoy, Wifi } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import showroom from "@/assets/showroom.jpg";
import { featuredVehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionTitle } from "@/components/SectionTitle";
import { whatsappLink, INSTAGRAM, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import banner1 from "@/assets/banners/banner-1.jpg";
import banner2 from "@/assets/banners/banner-2.jpg";
import banner3 from "@/assets/banners/banner-3.jpg";

const banners = [
  { img: banner1, eyebrow: "Premium SUV Collection", title: "Toyota Land Cruiser", subtitle: "Iconic 4x4 luxury — built for every horizon.", cta: "Book Land Cruiser" },
  { img: banner2, eyebrow: "Your Big Day", title: "Wedding Car Rentals", subtitle: "Mercedes-Benz, Bentley & Audi — decorated and chauffeured.", cta: "Reserve Wedding Car" },
  { img: banner3, eyebrow: "Self Drive Available", title: "Drive It Yourself", subtitle: "Honda, Toyota, Suzuki & more — keys in your hands.", cta: "Book Self Drive" },
];

function BannerCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[55vh] md:h-[70vh] overflow-hidden border-y border-gold/20">
      {banners.map((b, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />
          <div className="relative h-full container mx-auto px-6 flex items-center">
            <motion.div key={i === idx ? `on-${idx}` : `off-${idx}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 30 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-3">— {b.eyebrow} —</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
                <span className="text-gradient-gold italic">{b.title}</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/85">{b.subtitle}</p>
              <a href={whatsappLink(b.title)} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 px-7 py-3 gradient-gold text-black text-xs uppercase tracking-widest gold-glow hover:scale-105 transition-transform">
                <WhatsAppIcon size={14} /> {b.cta}
              </a>
            </motion.div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Banner ${idx + 1}`} className={`h-1.5 transition-all ${i === idx ? "w-10 bg-gold" : "w-5 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cruise Rent A Car — Premium Car Rental in Pakistan" },
      { name: "description", content: "Luxury cars, SUVs, vans & chauffeur services across Pakistan. Self drive & with driver. Trusted since 2014." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Car, title: "Self Drive Available" },
  { icon: Users, title: "With Driver Available" },
  { icon: Clock, title: "24/7 Support" },
  { icon: Sparkles, title: "Luxury Fleet" },
  { icon: MapPin, title: "Lahore Based" },
  { icon: Award, title: "Trusted Since 2014" },
];

const testimonials = [
  { name: "Ahsan Khan", role: "Business Traveler", quote: "Flawless service. The Prado was spotless and the driver was a true professional. Cruise is now my only choice in Lahore." },
  { name: "Fatima R.", role: "Wedding Client", quote: "Booked the Mercedes for our wedding — every detail was perfect. Cinematic arrival, beautiful car, kind team." },
  { name: "Hamza Sheikh", role: "Corporate Client", quote: "We rent the HiAce monthly for client tours. Always on time, always premium. Highly recommended." },
];

const faqs = [
  { q: "Do you offer self-drive rentals?", a: "Yes. Most of our economy and luxury vehicles are available for self-drive with a valid driving license and security deposit." },
  { q: "Where are you based?", a: "We are based in Lahore and available 24/7 across the city for pickups, drop-offs and intercity trips from Lahore." },
  { q: "How can I book a vehicle?", a: "Simply click 'Call For Price' or 'Book Now' on any vehicle and you will be connected with us directly on WhatsApp." },
  { q: "Are chauffeurs included?", a: "Yes — we offer professional, experienced chauffeurs for all vehicles available 'with driver'." },
  { q: "Do you provide airport transfers?", a: "Absolutely. Luxury airport pickups and drop-offs are available 24/7." },
];

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      setVal(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, duration]);
  return <span>{val}{suffix}</span>;
}

function BookingBar() {
  const [pickup, setPickup] = useState("Lahore");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [vehicle, setVehicle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Booking enquiry\n\n• Pickup City: ${pickup}\n• Pickup Date: ${date || "—"}\n• Return Date: ${returnDate || "—"}\n• Vehicle: ${vehicle || "Any"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="mt-10 glass gold-border-gradient p-4 md:p-5 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl gold-glow"
    >
      <Field label="Pickup City" icon={<MapPin size={12} />}>
        <input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Lahore" className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
      </Field>
      <Field label="Pickup" icon={<CalendarIcon size={12} />}>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent text-sm text-foreground outline-none [color-scheme:dark]" />
      </Field>
      <Field label="Return" icon={<CalendarIcon size={12} />}>
        <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} className="w-full bg-transparent text-sm text-foreground outline-none [color-scheme:dark]" />
      </Field>
      <Field label="Vehicle" icon={<Car size={12} />}>
        <input value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Any" className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
      </Field>
      <button type="submit" className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 gradient-gold text-black text-xs uppercase tracking-widest px-4 py-3 hover:gold-glow-strong transition-all">
        <Search size={14} /> Search
      </button>
    </motion.form>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 px-2 py-1 border-l border-gold/20 first:border-l-0">
      <span className="text-[9px] uppercase tracking-[0.2em] text-gold flex items-center gap-1">{icon} {label}</span>
      {children}
    </div>
  );
}

const services = [
  { icon: Plane, title: "Airport Transfers", desc: "Luxury pickup & drop, 24/7." },
  { icon: Heart, title: "Wedding Cars", desc: "Cinematic arrivals for your big day." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Executive fleet, monthly contracts." },
  { icon: Mountain, title: "Tours & Road Trips", desc: "Northern Areas, Hunza, Skardu." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100vh] -mt-20 flex items-center">
        <div className="absolute inset-0">
          <img src={hero} alt="Luxury car" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 blur-[150px] rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-[0.5em] text-gold mb-6"
            >
              — Since 2014 · Pakistan —
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              <span className="block text-white">Premium</span>
              <span className="block text-gradient-gold italic">Car Rental</span>
              <span className="block text-white/90">Services</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/80 max-w-xl leading-relaxed">
              Luxury Cars, SUVs, Vans & Chauffeur Services — Available for Self Drive & With Driver across Pakistan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/fleet" className="group inline-flex items-center gap-3 px-8 py-4 gradient-gold text-black text-sm uppercase tracking-widest font-medium gold-glow hover:gold-glow-strong transition-all">
                Explore Fleet <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>

            {/* Booking Search Bar */}
            <BookingBar />

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-3xl font-display text-gold"><Counter to={12} suffix="+" /></div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Years</div></div>
              <div><div className="text-3xl font-display text-gold"><Counter to={50} suffix="+" /></div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Vehicles</div></div>
              <div><div className="text-3xl font-display text-gold"><Counter to={5000} suffix="+" /></div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Trips</div></div>
            </div>
          </motion.div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce" size={28} />
      </section>

      {/* PROMO BANNERS */}
      <BannerCarousel />

      {/* FEATURES STRIP */}
      <section className="py-16 border-y border-gold/20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 grid place-items-center border border-gold/40 text-gold mb-3 group-hover:bg-gold group-hover:text-black transition-all">
                <f.icon size={22} />
              </div>
              <p className="text-xs uppercase tracking-widest text-foreground/80">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Services" title="Where We Take You" subtitle="From airport runs to mountain expeditions — Cruise handles every journey with the same premium standard." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.a key={s.title} href={whatsappLink(s.title)} target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 gold-border-gradient bg-card hover:gold-glow transition-all">
                <div className="w-12 h-12 grid place-items-center border border-gold/40 text-gold mb-5 group-hover:bg-gold group-hover:text-black transition-all">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display text-2xl text-gradient-gold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold mt-5">Enquire <ArrowRight size={12} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="The Fleet" title="Featured Vehicles" subtitle="A curated selection of our most requested cars — from city cruisers to luxury icons." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredVehicles.map((v, i) => <VehicleCard key={v.slug} v={v} index={i} />)}
          </div>
          <div className="text-center mt-16">
            <Link to="/fleet" className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
              Show More Vehicles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + SHOWROOM */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <img src={showroom} alt="Luxury showroom" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 glass px-8 py-6 gold-glow">
              <div className="text-5xl font-display text-gradient-gold"><Counter to={12} suffix="+" /></div>
              <div className="text-xs uppercase tracking-widest mt-1">Years of Excellence</div>
            </div>
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Why Cruise —</p>
            <h2 className="font-display text-5xl md:text-6xl text-gradient-gold leading-[1.05]">A Standard of Luxury You Can Trust</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              For over a decade, Cruise Rent A Car has redefined what premium rental feels like in Pakistan — meticulous detailing, immaculate fleet, professional drivers, and 24/7 dedication.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Shield, t: "Professional Drivers", d: "Trained, vetted and uniformed chauffeurs for every journey." },
                { icon: Sparkles, t: "Immaculate Vehicles", d: "Every car is detailed before delivery — never a compromise." },
                { icon: Clock, t: "On-Time, Every Time", d: "Punctuality is a non-negotiable promise to our clients." },
              ].map(item => (
                <div key={item.t} className="flex gap-4">
                  <div className="w-11 h-11 grid place-items-center border border-gold/40 text-gold shrink-0"><item.icon size={18} /></div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.t}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-card/40">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Voices" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 gold-border-gradient bg-card"
              >
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}</div>
                <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="luxury-divider mb-4" />
                <div>
                  <p className="font-display text-xl text-gold">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="The Process" title="Book in 3 Simple Steps" subtitle="From enquiry to ignition — a frictionless premium experience." />
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {[
              { n: "01", t: "Choose Your Vehicle", d: "Browse our luxury fleet and pick the car that fits your journey." },
              { n: "02", t: "Confirm on WhatsApp", d: "Instant quote, instant availability — no forms, no waiting." },
              { n: "03", t: "Drive in Style", d: "We deliver the car detailed and fueled, on time, every time." },
            ].map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative text-center p-8 gold-border-gradient bg-card/60 backdrop-blur">
                <div className="mx-auto w-24 h-24 rounded-full grid place-items-center border border-gold/40 bg-background relative">
                  <span className="font-display text-3xl text-gradient-gold">{s.n}</span>
                </div>
                <h3 className="font-display text-2xl text-gold mt-6">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="py-14 border-y border-gold/20 bg-background/60">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold mb-8">— Brands We Carry —</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {["Mercedes-Benz", "Bentley", "Porsche", "BMW", "Audi", "Toyota", "Honda", "Hyundai", "Kia", "Suzuki", "Haval"].map((b) => (
              <span key={b} className="font-display text-lg md:text-2xl text-foreground/40 hover:text-gold transition-colors tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM INCLUSIONS */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Every Booking Includes" title="Premium Inclusions, Zero Surprises" subtitle="Transparent pricing and signature touches with every rental." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Truck, t: "Free City Delivery", d: "Door-step car delivery within Lahore at no extra cost." },
              { icon: Shield, t: "Full Insurance", d: "Every vehicle fully insured for your peace of mind." },
              { icon: LifeBuoy, t: "24/7 Roadside Help", d: "On-call support anywhere in Lahore, any time." },
              { icon: Wallet, t: "No Hidden Charges", d: "Clear quote on WhatsApp — what you see is what you pay." },
              { icon: Fuel, t: "Fueled & Detailed", d: "Cars arrive fueled, sanitized and showroom-clean." },
              { icon: BadgeCheck, t: "Verified Chauffeurs", d: "Trained, licensed and uniformed professional drivers." },
              { icon: Wifi, t: "Wi-Fi On Long Trips", d: "Portable Wi-Fi available for tours and corporate runs." },
              { icon: Clock, t: "Flexible Hours", d: "Hourly, daily, weekly and monthly packages available." },
              { icon: Award, t: "Loyalty Rewards", d: "Repeat clients enjoy priority booking and special rates." },
            ].map((item, i) => (
              <motion.div key={item.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-6 gold-border-gradient bg-card hover:gold-glow transition-all">
                <div className="w-12 h-12 grid place-items-center border border-gold/40 text-gold shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-gold">{item.t}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden p-12 md:p-20 text-center gold-border-gradient bg-card"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/15 blur-[150px] rounded-full" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Reserve Now —</p>
              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold leading-tight">Ready to Drive in Style?</h2>
              <p className="mt-6 text-foreground/70 max-w-xl mx-auto">Talk to our team on WhatsApp — instant quotes, instant confirmation.</p>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 px-10 py-4 gradient-gold text-black text-sm uppercase tracking-widest gold-glow-strong hover:scale-105 transition-transform">
                <WhatsAppIcon size={16} /> Book on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">— Follow —</p>
          <h3 className="font-display text-3xl mb-6">@cruiserentacar7</h3>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-block text-gold border border-gold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all">View Instagram</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gold/20">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left hover:bg-card transition-colors">
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown size={18} className={`text-gold transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
