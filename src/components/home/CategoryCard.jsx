export default function CategoryCard({ icon: Icon, title, count, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex w-56 shrink-0 cursor-pointer flex-col gap-4 rounded-card p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        isActive
          ? "scale-[1.02] bg-primary text-white shadow-lg"
          : "border border-gray-border bg-white text-ink hover:border-primary hover:shadow-md"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ease-out ${
          isActive ? "bg-white/20" : "bg-primary-light"
        }`}
      >
        <Icon className={`text-2xl ${isActive ? "text-white" : "text-primary"}`} />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className={`text-xs ${isActive ? "text-white/70" : "text-gray-text"}`}>{count}</p>
    </button>
  );
}