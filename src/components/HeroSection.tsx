import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.jpg";
import aspireLogo from "@/assets/logo-aspire.png";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.8]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY, scale: imageScale }}>
        <img
          src={isMobile ? heroImageMobile : heroImage}
          alt="Aspire — Premium fashion collection"
          className="h-full w-full object-cover object-[65%_center] sm:object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <motion.div className="absolute inset-0 bg-foreground/40" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 container flex h-full flex-col items-center justify-center text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div className="max-w-2xl" variants={stagger} initial="hidden" animate="visible">
          {/* Rotating Logo */}
          <motion.div className="flex justify-center mb-6 md:mb-8" variants={fadeUp}>
            <motion.img
              src={aspireLogo}
              alt="Aspire Logo"
              className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-[9px] md:text-[11px] font-sans font-medium uppercase tracking-[0.5em] text-foreground/50 mb-5 md:mb-7"
            variants={fadeUp}
          >
            Dress With Class For Less
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-serif leading-[0.85] tracking-tight text-foreground"
            variants={fadeUp}
          >
            New Season
            <br />
            <span className="italic text-foreground/60">New Rules</span>
          </motion.h1>

          {/* Season badge */}
          <motion.div className="mt-5 md:mt-7" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-background/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
              <span className="text-[10px] md:text-xs font-sans text-foreground/45 tracking-wide">
                Spring/Summer 2026
              </span>
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div className="mt-10 md:mt-14 flex items-center justify-center gap-4" variants={fadeUp}>
            <Link
              to="/category/men"
              className="group inline-flex items-center gap-2.5 h-13 md:h-[3.75rem] px-9 md:px-12 bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium rounded-full hover:bg-gold-dark transition-all duration-500 shadow-[0_10px_40px_-8px_hsl(var(--foreground)/0.45)]"
            >
              <span>Shop Collection</span>
              <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              to="/category/accessories"
              className="inline-flex items-center gap-2 h-13 md:h-[3.75rem] px-8 md:px-10 text-foreground/80 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium border border-gold/25 rounded-full hover:border-gold/60 hover:text-foreground transition-all duration-500"
            >
              Accessories
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
