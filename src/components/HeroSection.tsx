import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aspireLogo from "@/assets/logo-aspire.png";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold)), transparent 70%)",
          }}
        />
      </div>

      {/* Decorative lines */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Logo */}
        <motion.div
          style={{ scale: logoScale }}
          initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={aspireLogo}
            alt="Aspire Logo"
            className="h-28 w-28 md:h-40 md:w-40 lg:h-48 lg:w-48 mb-8 md:mb-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[9px] md:text-[11px] font-sans font-medium uppercase tracking-[0.6em] text-muted-foreground mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Dress With Class For Less
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8 md:mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        />

        {/* Main heading */}
        <motion.h1
          className="text-[3rem] md:text-[5.5rem] lg:text-[7rem] font-serif leading-[0.85] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">Aspire</span>
          <span className="block italic text-foreground/50 text-[0.55em] mt-1">to elegance</span>
        </motion.h1>

        {/* Season badge */}
        <motion.div
          className="mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
            <span className="text-[10px] md:text-xs font-sans text-muted-foreground tracking-widest uppercase">
              Spring / Summer 2026
            </span>
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/category/men"
            className="group inline-flex items-center gap-3 h-14 md:h-[3.75rem] px-10 md:px-14 bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-sans font-medium rounded-full hover:bg-gold-dark transition-all duration-500 shadow-[0_12px_40px_-8px_hsl(var(--foreground)/0.35)]"
          >
            <span>Explore Collection</span>
            <span className="text-sm group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>

          <Link
            to="/category/accessories"
            className="inline-flex items-center h-14 md:h-[3.75rem] px-8 md:px-10 text-foreground/70 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-sans font-medium border border-gold/20 rounded-full hover:border-gold/50 hover:text-foreground transition-all duration-500"
          >
            Accessories
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50 font-sans">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
