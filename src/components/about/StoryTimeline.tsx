import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ButtonIcon,
  DressForm,
  Needle,
  Scissors,
  Spool,
  Thimble,
} from "./atelierIcons";

export type StoryBeat = {
  year: string;
  title: string;
  body: string;
};

const icons = [Scissors, Needle, Spool, Thimble, DressForm, ButtonIcon];

const StoryTimeline = ({ beats }: { beats: StoryBeat[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Spine: track + animated fill */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gold/15" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-px bg-gold origin-top"
      />

      <ol className="relative space-y-16 md:space-y-24">
        {beats.map((b, i) => {
          const Icon = icons[i % icons.length];
          const isLeft = i % 2 === 0;
          return (
            <li key={i} className="relative">
              {/* Node dot */}
              <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-background border border-gold flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 md:items-start`}
              >
                {/* Year + icon column */}
                <div
                  className={`mb-3 md:mb-0 ${
                    isLeft ? "md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-3 ${
                      isLeft ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <Icon className="w-8 h-8 text-gold" />
                    <span className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-tight">
                      {b.year}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`bg-card/80 backdrop-blur-sm border border-border p-6 md:p-8 ${
                    isLeft ? "md:order-2 md:ml-0" : "md:mr-0"
                  }`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  }}
                >
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm md:text-[15px] text-muted-foreground leading-[1.85]">
                    {b.body}
                  </p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StoryTimeline;
