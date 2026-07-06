export default function Button({
  children,
  variant = "solid",
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200";

  const variants = {
    solid: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    outlineWhite:
      "border border-white text-white bg-transparent hover:bg-white hover:text-ink-dark",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}