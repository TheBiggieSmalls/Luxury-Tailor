import { useScrollReveal } from "@/hooks/useScrollReveal";

interface StatementDividerProps {
  text: string;
}

const StatementDivider = ({ text }: StatementDividerProps) => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-32">
      <div ref={ref} className="container mx-auto px-6 text-center">
        <p className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground/80 leading-[1.2] italic max-w-4xl mx-auto">
          "{text}"
        </p>
      </div>
    </section>
  );
};

export default StatementDivider;
