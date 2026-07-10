/**
 * Derives up to two uppercase initials from a name or company string.
 * e.g. "Dimension Studio" -> "DS", "Brown Garcia" -> "BG"
 */
export function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}