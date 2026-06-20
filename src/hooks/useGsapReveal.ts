import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  useEffect(() => {
    // Reveal all elements with data-reveal attribute
    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => {
      const delay = parseFloat((el as HTMLElement).dataset.revealDelay || "0");
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // Parallax images with data-parallax
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    parallaxEls.forEach((el) => {
      gsap.fromTo(
        el,
        { y: -30 },
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Stagger children with data-stagger
    const staggerGroups = document.querySelectorAll("[data-stagger]");
    staggerGroups.forEach((group) => {
      const children = group.children;
      gsap.fromTo(
        children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
