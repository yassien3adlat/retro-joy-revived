import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import aspireLogo from "@/assets/logo-aspire.png";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={isMobile ? heroBgMobile : heroBg}
          alt="Aspire — Premium fashion"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Gold accent line — left */}
      <motion.div
        className="absolute left-8 md:left-16 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.15) 30%, hsl(var(--gold) / 0.15) 70%, transparent)",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Rotating logo */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={aspireLogo}
            alt="Aspire Logo"
            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 brightness-0 invert opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[9px] md:text-[10px] font-sans font-medium uppercase tracking-[0.5em] text-white/40 mb-3 md:mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Dress With Class For Less
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="text-[3rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[9rem] font-serif leading-[0.85] tracking-tight text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Redefine
          <br />
          <span className="italic text-white/40 font-light">Elegance</span>
        </motion.h1>

        {/* Divider + description row */}
        <motion.div
          className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end gap-5 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            <p className="text-[11px] md:text-xs text-white/35 font-sans leading-relaxed max-w-[280px]">
              Premium curated fashion blending timeless
              <br className="hidden md:block" /> sophistication with modern edge.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/category/men"
            className="group inline-flex items-center gap-3 h-13 md:h-14 px-9 md:px-12 bg-white text-black text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium rounded-full hover:bg-gold transition-all duration-500 shadow-[0_0_60px_-12px_rgba(255,255,255,0.2)]"
          >
            <span>Explore Collection</span>
            <span className="text-sm group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>

          <Link
            to="/category/accessories"
            className="inline-flex items-center h-13 md:h-14 px-7 md:px-10 text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium border border-white/15 rounded-full hover:border-white/40 hover:text-white transition-all duration-500"
          >
            Accessories
          </Link>
        </motion.div>

        {/* Season badge — bottom right */}
        <motion.div
          className="absolute bottom-20 md:bottom-28 lg:bottom-32 right-4 md:right-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
            <span className="text-[9px] md:text-[10px] font-sans text-white/40 tracking-widest uppercase">
              SS — 2026
            </span>
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-white/25 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
