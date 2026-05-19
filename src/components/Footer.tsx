import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS, INSTAGRAM, whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold/20 bg-background/80">
      <div className="luxury-divider" />
      <div className="container mx-auto px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo className="h-16" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium car rental services in Pakistan since 2014. Luxury cars, SUVs, vans, and chauffeur services nationwide.
          </p>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/fleet", "Our Fleet"], ["/luxury", "Luxury Cars"], ["/vans", "Vans & Buses"],
              ["/blog", "Blog"], ["/about", "About Us"], ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}><Link to={to} className="text-foreground/70 hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5" /><a href={`tel:${PHONE_DISPLAY.replace(/\s/g,'')}`} className="hover:text-gold">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5" /><a href={`mailto:${EMAIL}`} className="hover:text-gold break-all">{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /><span>{ADDRESS}</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-11 h-11 grid place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="w-11 h-11 grid place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all">
              <WhatsAppIcon size={18} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">Available 24/7 in Lahore.</p>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cruise Rent A Car. All rights reserved.
      </div>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </footer>
  );
}
