import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— {eyebrow} —</p>}
      <h2 className="font-display text-4xl md:text-6xl text-gradient-gold leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-5 text-foreground/70 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
