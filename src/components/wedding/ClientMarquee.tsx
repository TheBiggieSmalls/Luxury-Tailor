import client1 from "@/assets/client-suit-1.jpg";
import client2 from "@/assets/client-suit-2.jpg";
import client3 from "@/assets/client-suit-3.jpg";
import client4 from "@/assets/testimonial-1.jpg";
import client5 from "@/assets/testimonial-2.jpg";
import client6 from "@/assets/testimonial-3.jpg";
import client7 from "@/assets/testimonial-4.jpg";
import client8 from "@/assets/testimonial-5.jpg";

// Replace these placeholder photos by overwriting the files in src/assets/
// (or swap the imports here) once you receive real client images.
const photos = [client1, client2, client3, client4, client5, client6, client7, client8];

const ClientMarquee = () => {
  // Duplicate the track so the loop is seamless.
  const track = [...photos, ...photos];

  return (
    <div
      className="relative overflow-hidden w-full group"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-5 md:gap-6 w-max animate-scroll-left group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "70s" }}
      >
        {track.map((src, i) => (
          <figure
            key={i}
            className="relative shrink-0 w-[280px] h-[280px] md:w-[340px] md:h-[340px] overflow-hidden bg-card ring-1 ring-border"
          >
            <img
              src={src}
              alt="Real Alex Nass client"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
