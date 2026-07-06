import { steps } from "@/src/data/steps";
import Button from "@/src/components/ui/Button";
import StepCard from "@/src/components/home/StepCard";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              How it works
            </h2>
            <p className="text-sm text-gray-text leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut
              arcu at lectus tristique auctor sit amet at turpis.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}