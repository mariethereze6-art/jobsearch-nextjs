"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX, HiOutlineLogin } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Job", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-light/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="text-2xl font-extrabold text-ink font-heading">
          Job<span className="text-primary">Nqw</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-primary transition-colors duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="#"
            className="text-sm font-medium text-ink hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold rounded-lg px-4 py-2.5 hover:bg-primary-dark transition-colors duration-300 ease-in-out">
            <HiOutlineLogin className="text-base" />
            Create Account
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-light px-6 pb-6 flex flex-col gap-4 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-ink hover:text-primary transition-colors duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-ink hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <button className="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold rounded-lg px-4 py-2.5 w-full hover:bg-primary-dark transition-colors duration-300 ease-in-out">
            <HiOutlineLogin className="text-base" />
            Create Account
          </button>
        </div>
      )}
    </header>
  );
}
