export default function SectionHeading({
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl mx-auto mb-10`}>
      <h2
        className={`text-2xl md:text-3xl font-bold mb-3 ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-sm ${light ? "text-white/70" : "text-gray-text"}`}>
          {description}
        </p>
      )}
    </div>
  );
}