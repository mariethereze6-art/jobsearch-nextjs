import { categories } from "@/src/data/categories";
import Button from "@/src/components/ui/Button";
import SectionHeading from "@/src/components/ui/SectionHeading";
import CategoryCard from "@/src/components/home/CategoryCard";

export default function JobCategories() {
  return (
    <section className="bg-primary-light py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <SectionHeading
          title="Popular Job Categories"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
        />

        <div className="flex gap-6 overflow-x-auto pb-4 md:justify-center md:flex-wrap">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              icon={cat.icon}
              title={cat.title}
              count={cat.count}
              active={cat.active}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline">View More</Button>
        </div>
      </div>
    </section>
  );
}