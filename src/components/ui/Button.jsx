export default function Button({
  children,
  variant = "solid",
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    solid: "bg-primary text-white hover:bg-primary-dark hover:shadow-md",
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    outlineWhite:
      "border border-white text-white bg-transparent hover:bg-white hover:text-ink-dark focus-visible:ring-offset-ink-dark",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}