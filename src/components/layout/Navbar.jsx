"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Button from "@/src/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Job", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-light">
      <div className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-extrabold text-ink">
          Job<span className="text-primary">Nqw</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-semibold text-ink hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Button variant="solid">Create Account</Button>
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
        <div className="md:hidden bg-gray-light px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" className="text-sm font-semibold text-ink">
            Sign In
          </Link>
          <Button variant="solid" className="w-full">
            Create Account
          </Button>
        </div>
      )}
    </header>
  );
}