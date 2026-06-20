import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dark.jpg";
import { useBooking } from "@/contexts/BookingContext";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { openBooking } = useBooking();
  const [visible, setVisible] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src={heroImage}
          alt="Bespoke tailoring atelier"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/30" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl text-left">
        <p
          className={`text-[10px] tracking-[0.6em] uppercase text-cream/55 font-body mb-10 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Privé atelier · Brussel
        </p>

        <h1
          className={`font-heading text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.08] text-cream tracking-[-0.015em] mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Worn by few.<br />
          <span className="italic font-normal">Felt by all.</span>
        </h1>

        <p
          className={`text-sm md:text-base text-cream/65 max-w-lg leading-[1.85] font-body font-light mb-12 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Eén kleermaker, één atelier, één pak — volledig op maat gemaakt voor u.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            variant="hero"
            size="sm"
            className="px-8 py-5 bg-cream text-espresso hover:bg-cream/90 border-0 tracking-[0.22em] text-[10px] uppercase rounded-none"
            onClick={() => openBooking()}
          >
            Plan uw consultatie
          </Button>
          <Link to="/over-ons">
            <Button
              variant="subtle"
              size="sm"
              className="px-7 py-5 bg-cream/10 text-cream border border-cream/25 hover:bg-cream/20 tracking-[0.22em] text-[10px] uppercase rounded-none"
            >
              Ontdek het atelier
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-6 md:left-12 lg:left-20 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-14 bg-cream/20 mb-3" />
        <p className="text-[8px] tracking-[0.5em] uppercase text-cream/30 font-body">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
