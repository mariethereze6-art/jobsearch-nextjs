import Button from "@/src/components/ui/Button";

export default function RegisterCTA() {
  return (
    <section className="bg-white px-6 md:px-10 pb-16">
      <div className="max-w-container mx-auto bg-ink-dark rounded-card text-center py-14 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Register your CV now!
        </h2>
        <p className="text-sm text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          lacus non orci euismod vestibulum vitae ut ex.
        </p>
        <Button variant="outlineWhite">Register Now</Button>
      </div>
    </section>
  );
}