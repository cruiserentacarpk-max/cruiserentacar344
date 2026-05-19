import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/luxury", label: "Luxury" },
  { to: "/vans", label: "Vans & Buses" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 glass" : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo className={scrolled ? "h-10" : "h-14"} />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold p-2" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass mt-2 border-t border-gold/20">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="text-sm uppercase tracking-widest py-2" activeProps={{ className: "text-gold" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
