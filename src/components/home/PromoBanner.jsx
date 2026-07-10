import Button from "@/src/components/ui/Button";
import ImageWithFallback from "@/src/components/ui/ImageWithFallback";
import { HiOutlinePhoto } from "react-icons/hi2";

export default function PromoBanner() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-card relative overflow-hidden">
          <ImageWithFallback
            src="/images/dream-company.png"
            alt="Team working together"
            fill
            className="object-cover"
            icon={HiOutlinePhoto}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 leading-snug">
            We will help you to become an employee in your dream company
          </h2>
          <p className="text-sm text-gray-text leading-relaxed mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}