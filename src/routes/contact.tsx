import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { PHONE_DISPLAY, EMAIL, ADDRESS, INSTAGRAM, whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cruise Rent A Car" },
      { name: "description", content: "Get in touch with Cruise Rent A Car — call, WhatsApp, email or visit us in Lahore. Available 24/7 in Lahore." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Cruise Rent A Car,\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(`https://wa.me/923056333341?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Get in Touch" title="Contact Us" subtitle="Our team is available 24/7 to help you book the perfect vehicle." />

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: Phone, label: "Call Us", value: PHONE_DISPLAY, href: `tel:${PHONE_DISPLAY.replace(/\s/g,"")}` },
              { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: whatsappLink() },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Visit", value: ADDRESS, href: "https://maps.google.com/?q=Sabzazar+Lahore" },
              { icon: Instagram, label: "Instagram", value: "@cruiserentacar7", href: INSTAGRAM },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex gap-5 p-6 gold-border-gradient bg-card hover:gold-glow transition-all group">
                <div className="w-12 h-12 grid place-items-center border border-gold/40 text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{item.label}</p>
                  <p className="text-foreground/90">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={submit} className="p-8 gold-border-gradient bg-card space-y-5">
            <h3 className="font-display text-3xl text-gradient-gold">Send Us a Message</h3>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your Name" className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none transition-colors" />
            <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Phone Number" className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none transition-colors" />
            <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what you need..." rows={6} className="w-full bg-background border border-gold/30 px-4 py-3 text-sm focus:border-gold outline-none transition-colors resize-none" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 gradient-gold text-black text-sm uppercase tracking-widest gold-glow hover:gold-glow-strong transition-all">
              <Send size={14} /> Send via WhatsApp
            </button>
          </motion.form>
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 border border-gold/30 overflow-hidden">
          <iframe
            title="Cruise Rent A Car Location"
            src="https://www.google.com/maps?q=Sabzazar+Lahore+Pakistan&output=embed"
            className="w-full h-[420px] grayscale contrast-125"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
