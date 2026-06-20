import { motion } from "framer-motion";

type Block = { eyebrow: string; title: string; body: string };

const MissionVision = ({ mission, vision }: { mission: Block; vision: Block }) => {
  const blocks = [mission, vision];
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto relative">
      <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gold/40" />
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-body mb-5">
            {b.eyebrow}
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-6">
            {b.title}
          </h3>
          <p className="font-body text-muted-foreground leading-[1.9]">{b.body}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionVision;
