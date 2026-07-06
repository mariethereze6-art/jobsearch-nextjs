export default function CategoryCard({ icon: Icon, title, count, active }) {
  return (
    <div
      className={`rounded-card p-6 flex flex-col gap-4 shrink-0 w-56 transition-colors ${
        active
          ? "bg-primary text-white"
          : "bg-white text-ink border border-gray-border hover:border-primary"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          active ? "bg-white/20" : "bg-primary-light"
        }`}
      >
        <Icon className={`text-2xl ${active ? "text-white" : "text-primary"}`} />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className={`text-xs ${active ? "text-white/70" : "text-gray-text"}`}>
        {count}
      </p>
    </div>
  );
}