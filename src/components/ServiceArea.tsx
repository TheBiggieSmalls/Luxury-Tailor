import FlandersMap from "@/components/wedding/FlandersMap";

const DEFAULT_CITIES = [
  "Antwerpen",
  "Aarschot",
  "Mechelen",
  "Diest",
  "Brussel",
  "Leuven",
  "Hasselt",
];

const ServiceArea = ({
  title = "We werken in heel Vlaanderen",
  intro = "Vanuit ons atelier nabij Leuven bedienen we klanten in heel Vlaams-Brabant, Brussel en omstreken.",
  cities = DEFAULT_CITIES,
}: {
  title?: string;
  intro?: string;
  cities?: string[];
}) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
            {title}
          </h2>
          <p className="font-body text-muted-foreground leading-[1.8] max-w-2xl mx-auto">
            {intro}
          </p>
        </div>
        <FlandersMap cities={cities} locale="nl" />
      </div>
    </section>
  );
};

export default ServiceArea;
