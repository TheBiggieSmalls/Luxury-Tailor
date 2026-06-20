import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import HomeCategories from "@/components/HomeCategories";
import TrustStrip from "@/components/TrustStrip";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import { useLenis } from "@/hooks/useLenis";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export { useBooking } from "@/contexts/BookingContext";

const ClosingCTA = () => {
  const { openBooking } = useBooking();
  return (
    <section className="relative bg-foreground text-cream py-section">
      <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
        <p className="text-[10px] tracking-[0.5em] uppercase text-gold/80 font-body">
          — Op uitnodiging —
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.15] text-cream">
          Wij accepteren een beperkt aantal klanten per seizoen.
        </h2>
        <p className="font-body text-cream/65 leading-[1.85] max-w-xl mx-auto">
          Een eerste consultatie duurt 60 minuten en is volledig vrijblijvend.
        </p>
        <div className="pt-4">
          <Button
            variant="hero"
            size="sm"
            className="px-8 py-5 bg-cream text-espresso hover:bg-cream/90 border-0 tracking-[0.22em] text-[10px] uppercase rounded-none"
            onClick={() => openBooking()}
          >
            Reserveer uw plaats →
          </Button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useLenis();
  useGsapReveal();

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <HomeCategories />
      <TrustStrip />
      <Process />
      <ClosingCTA />
      <Footer />
    </>
  );
};

export default Index;
