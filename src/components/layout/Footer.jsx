import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

const pageLinks = [
  { label: "Home", href: "#" },
  { label: "Booking", href: "#" },
  { label: "Facilities", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Location", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  {
    icon: FaGoogle,
    href: "https://www.google.com",
    label: "Google",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 font-heading">
            <span className="text-ink">Job</span>
            <span className="text-white">Now</span>
          </h3>

          <p className="text-sm text-white/80 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat facilisis nibh vel faucibus.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-bold text-white mb-4 font-heading">
            Company
          </h4>

          <p className="text-sm text-white/80 leading-relaxed mb-2">
            Address : 123 Fifth Avenue, New York - 1060, USA.
          </p>

          <p className="text-sm text-white/80 leading-relaxed mb-2">
            Call Us : +(1800) 456 7890
          </p>

          <p className="text-sm text-white/80 leading-relaxed mb-2">
            Email :{" "}
            <a
              href="mailto:yourid@example.com"
              className="hover:text-white hover:underline underline-offset-2 transition-colors duration-300"
            >
              yourid@example.com
            </a>
          </p>

          <p className="text-sm text-white/80 leading-relaxed">
            Mon - Sat : 9:00 AM - 7:00 PM
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-base font-bold text-white mb-4 font-heading">
            Pages
          </h4>

          <ul className="flex flex-col gap-2">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors duration-300"
                >
                  <HiChevronRight className="text-xs" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-bold text-white mb-4 font-heading">
            Contact Us
          </h4>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:opacity-80"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}