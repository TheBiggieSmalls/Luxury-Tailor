import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TextRotateProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const TextRotate = ({ texts, className = "", interval = 3000 }: TextRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 40 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextRotate;
