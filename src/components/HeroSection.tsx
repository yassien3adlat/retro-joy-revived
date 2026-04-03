import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aspireLogo from "@/assets/logo-aspire.png";
import heroProduct from "@/assets/products/leather-jacket.png";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      {/* Radial glow behind product */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none hidden lg:block"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent 65%)" }}
      />

      <motion.div
        className="relative z-10 container h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 pt-20 lg:pt-0"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-lg">
          {/* Logo */}
          <motion.div {...fadeUp(0.3)} className="mb-6">
            <motion.img
              src={aspireLogo}
              alt="Aspire Logo"
              className="h-20 w-20 md:h-24 md:w-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.5)}
            className="text-[9px] md:text-[10px] font-sans font-medium uppercase tracking-[0.5em] text-muted-foreground mb-4"
          >
            Dress With Class For Less
          </motion.p>

          {/* Main heading */}
          <motion.h1
            {...fadeUp(0.6)}
            className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-serif leading-[0.88] tracking-tight text-foreground"
          >
            Redefine
            <br />
            <span className="italic text-foreground/50">Your Style</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.8)}
            className="mt-5 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-sm"
          >
            Premium curated fashion that blends timeless elegance with modern sophistication.
          </motion.p>

          {/* Season badge */}
          <motion.div {...fadeUp(0.9)} className="mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
              <span className="text-[10px] font-sans text-muted-foreground tracking-widest uppercase">
                Spring / Summer 2026
              </span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(1.0)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/category/men"
              className="group inline-flex items-center gap-3 h-13 md:h-14 px-9 md:px-12 bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium rounded-full hover:bg-gold-dark transition-all duration-500 shadow-[0_12px_40px_-8px_hsl(var(--foreground)/0.3)]"
            >
              <span>Shop Now</span>
              <span className="text-sm group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
            <Link
              to="/category/accessories"
              className="inline-flex items-center h-13 md:h-14 px-7 md:px-10 text-foreground/70 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-sans font-medium border border-gold/20 rounded-full hover:border-gold/50 hover:text-foreground transition-all duration-500"
            >
              Accessories
            </Link>
          </motion.div>
        </div>

        {/* Right: Featured product image */}
        <motion.div
          className="flex-1 flex items-center justify-center relative"
          style={{ y: imageY, scale: imageScale }}
        >
          {/* Decorative circle behind product */}
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full border border-gold/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[260px] h-[260px] md:w-[370px] md:h-[370px] lg:w-[430px] lg:h-[430px] rounded-full border border-border/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />

          {/* Product image */}
          <motion.img
            src={heroProduct}
            alt="Featured — Leather Zip Jacket"
            className="relative z-10 h-[320px] md:h-[420px] lg:h-[520px] w-auto object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Floating price tag */}
          <motion.div
            className="absolute bottom-8 right-4 md:bottom-12 md:right-8 lg:bottom-16 lg:right-12 bg-card/90 backdrop-blur-md border border-border rounded-2xl px-5 py-3 shadow-lg z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-sans">Featured</p>
            <p className="text-sm font-serif font-medium text-foreground mt-0.5">Leather Zip Jacket</p>
            <p className="text-xs text-gold-dark font-sans font-medium mt-1">EGP 4,500</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground/40 font-sans">Scroll</span>
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-gold/30 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
