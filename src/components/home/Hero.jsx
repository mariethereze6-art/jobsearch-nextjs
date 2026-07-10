import { useState } from "react";
import Link from "next/link";
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineLogin, HiChevronDown } from "react-icons/hi";
import { HiOutlineChartBarSquare, HiOutlineShieldCheck } from "react-icons/hi2";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Job", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

// Reasonable default city list — swap for a real data source (API, CMS, etc.) when available.
const locations = [
  "New York, NY",
  "San Francisco, CA",
  "Los Angeles, CA",
  "Chicago, IL",
  "Austin, TX",
  "Seattle, WA",
  "Boston, MA",
  "Denver, CO",
  "Miami, FL",
  "Remote",
];

export default function Hero() {
  const [location, setLocation] = useState("");

  return (
    <section className="relative bg-gray-light overflow-hidden">
      {/* Decorative green panel */}
      <div className="hidden md:block absolute top-0 right-0 w-[45%] h-[520px] bg-primary rounded-bl-[100px]" />

      {/* Navbar overlay - logo & links sit on the light background, Sign In / Create Account sit on the green */}
      <div className="relative z-20 max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-24">
        <Link href="/" className="text-2xl font-extrabold text-ink font-heading">
          Job<span className="text-primary">Nqw</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            Sign In
          </Link>
          <button className="flex items-center gap-2 bg-white text-ink text-sm font-semibold rounded-lg px-4 py-2.5 hover:bg-white/90 transition-colors">
            <HiOutlineLogin className="text-base" />
            Create Account
          </button>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 md:px-10 pt-6 pb-24 md:pb-32 relative">
        <div className="max-w-xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-[1.15] tracking-tight text-ink mb-5">
            Search, Find, &amp; Apply
          </h1>
          <p className="text-sm md:text-base text-gray-text leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>

          <div className="bg-white rounded-full shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-xl">
            <div className="flex items-center gap-2 flex-1 pl-4 pr-3 py-2">
              <HiOutlineSearch className="text-gray-text text-lg shrink-0" />
              <input
                type="text"
                placeholder="Job title or Keyword"
                className="w-full text-sm outline-none placeholder:text-gray-text bg-transparent"
              />
            </div>
            <div className="hidden sm:block w-px bg-gray-border h-6" />
            <div className="relative flex items-center gap-2 flex-1 px-3 py-2">
              <HiOutlineLocationMarker className="text-gray-text text-lg shrink-0" />
              <label htmlFor="hero-location" className="sr-only">
                Location
              </label>
              <select
                id="hero-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Select a location"
                className={`w-full appearance-none bg-transparent text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md cursor-pointer pr-5 ${
                  location ? "text-ink" : "text-gray-text"
                }`}
              >
                <option value="" disabled>
                  Location
                </option>
                {locations.map((city) => (
                  <option key={city} value={city} className="text-ink">
                    {city}
                  </option>
                ))}
              </select>
              <HiChevronDown className="pointer-events-none absolute right-3 text-gray-text text-base shrink-0" />
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-8 py-3 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Floating icon cards */}
      <div className="hidden md:block absolute top-24 right-0 w-[45%] h-[420px] z-10">
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