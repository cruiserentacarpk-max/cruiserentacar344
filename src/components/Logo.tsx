import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img src={logo} alt="Cruise Rent A Car" className={`${className} w-auto object-contain transition-transform group-hover:scale-105`} />
    </Link>
  );
}
