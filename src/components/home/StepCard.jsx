export default function StepCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-card shadow-sm border border-gray-border p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
        <Icon className="text-primary text-2xl" />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="text-xs text-gray-text leading-relaxed">{description}</p>
    </div>
  );
}