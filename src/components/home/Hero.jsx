import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiChevronDown,
} from "react-icons/hi";
import {
  HiOutlineChartBarSquare,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative bg-gray-light overflow-hidden">
      {/* Decorative green panel */}
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[45%] bg-primary rounded-bl-[100px]" />

      <div className="max-w-container mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-24 md:pb-32 relative">
        <div className="max-w-xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-ink mb-5 font-heading">
            Search, Find, &amp; Apply
          </h1>

          <p className="text-sm md:text-base text-gray-text leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>

          {/* Search Form */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
            {/* Job Title */}
            <div className="flex items-center gap-3 flex-1 h-14 px-4 bg-white border border-gray-border rounded-xl shadow-sm">
              <HiOutlineSearch className="text-gray-text text-lg shrink-0" />

              <input
                type="text"
                placeholder="Job title or Keyword"
                className="w-full h-full text-sm outline-none placeholder:text-gray-text bg-transparent"
              />
            </div>

            {/* Location Dropdown */}
            <div className="relative flex items-center flex-1 h-14 px-4 bg-white border border-gray-border rounded-xl shadow-sm">
              <HiOutlineLocationMarker className="text-gray-text text-lg shrink-0 mr-3" />

              <select
                defaultValue=""
                className="w-full h-full bg-transparent text-sm text-gray-text outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Location
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="dubai">Dubai</option>
                <option value="berlin">Berlin</option>
                <option value="tokyo">Tokyo</option>
                <option value="cairo">Cairo</option>
              </select>

              <HiChevronDown className="absolute right-4 text-gray-text text-base pointer-events-none" />
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center h-14 w-full sm:w-auto shrink-0 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-8 transition-colors duration-300 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Floating icon cards */}
      <div className="hidden md:block absolute top-14 right-0 w-[45%] h-[420px] z-10">
        <div className="absolute top-8 left-16 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <HiOutlineSearch className="text-primary text-2xl" />
        </div>

        <div className="absolute top-40 right-16 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <HiOutlineChartBarSquare className="text-primary text-2xl" />
        </div>

        <div className="absolute top-64 left-24 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <HiOutlineShieldCheck className="text-primary text-2xl" />
        </div>
      </div>
    </section>
  );
}