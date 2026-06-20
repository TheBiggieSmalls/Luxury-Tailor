import { motion, useReducedMotion } from "framer-motion";
import {
  ButtonIcon,
  DressForm,
  Hanger,
  Needle,
  Scissors,
  Spool,
  Tape,
  Thimble,
} from "./atelierIcons";

type Motif = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
};

const motifs: Motif[] = [
  { Icon: Scissors, top: "8%", left: "6%", size: 110, duration: 14, delay: 0, rotate: -12 },
  { Icon: Spool, top: "22%", left: "88%", size: 90, duration: 18, delay: 1.5, rotate: 8 },
  { Icon: Tape, top: "42%", left: "4%", size: 130, duration: 22, delay: 3, rotate: -6 },
  { Icon: Needle, top: "55%", left: "92%", size: 120, duration: 16, delay: 0.8, rotate: 25 },
  { Icon: Thimble, top: "70%", left: "8%", size: 80, duration: 19, delay: 2.2, rotate: -18 },
  { Icon: ButtonIcon, top: "82%", left: "82%", size: 70, duration: 17, delay: 1.1, rotate: 0 },
  { Icon: DressForm, top: "92%", left: "12%", size: 100, duration: 20, delay: 2.8, rotate: 4 },
  { Icon: Hanger, top: "32%", left: "50%", size: 95, duration: 21, delay: 4, rotate: -8 },
];

const AtelierBackdrop = () => {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* warm gradient base so motifs sit on a luxe field */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {motifs.map((m, i) => (
        <motion.div
          key={i}
          className="absolute text-gold/20"
          style={{ top: m.top, left: m.left, width: m.size, height: m.size }}
          initial={{ y: 0, rotate: m.rotate, opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0.6, rotate: m.rotate }
              : {
                  y: [0, -22, 0, 18, 0],
                  rotate: [m.rotate, m.rotate + 6, m.rotate - 4, m.rotate + 2, m.rotate],
                  opacity: [0, 0.7, 0.7, 0.7, 0.6],
                }
          }
          transition={
            reduce
              ? { duration: 1 }
              : {
                  duration: m.duration,
                  delay: m.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <m.Icon className="w-full h-full" />
        </motion.div>
      ))}

      {/* faint vertical stitch line center */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] text-gold/15"
        preserveAspectRatio="none"
        viewBox="0 0 2 1000"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>
    </div>
  );
};

export default AtelierBackdrop;
