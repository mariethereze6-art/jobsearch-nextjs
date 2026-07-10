export default function StepCard({ icon: Icon, title, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex cursor-pointer flex-col gap-4 rounded-card border border-gray-border bg-white p-6 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light transition-transform duration-300 ease-out group-hover:scale-110">
        <Icon className="text-2xl text-primary" />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-text">{description}</p>
    </button>
  );
}