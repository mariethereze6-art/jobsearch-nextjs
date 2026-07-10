import { HiOutlineLocationMarker, HiChevronDown } from "react-icons/hi";
import { locations } from "@/src/data/locations";

/**
 * Accessible, responsive location dropdown.
 * Uses a native <select> so it works out of the box with keyboards,
 * screen readers, and mobile touch pickers, while being restyled
 * to match the app's search bar.
 */
export default function LocationSelect({
  id = "location",
  label = "Location",
  className = "",
  ...props
}) {
  return (
    <div className={`relative flex flex-1 items-center gap-2 px-3 py-2 ${className}`}>
      <HiOutlineLocationMarker className="shrink-0 text-lg text-gray-text" aria-hidden="true" />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        defaultValue=""
        className="w-full cursor-pointer appearance-none rounded-md bg-transparent text-sm text-ink outline-none transition-colors duration-300 ease-out placeholder:text-gray-text focus-visible:ring-2 focus-visible:ring-primary/40"
        {...props}
      >
        <option value="" disabled>
          {label}
        </option>
        {locations.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <HiChevronDown className="pointer-events-none shrink-0 text-base text-gray-text" aria-hidden="true" />
    </div>
  );
}