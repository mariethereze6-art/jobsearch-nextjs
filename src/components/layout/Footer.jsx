import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
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
  { icon: FaGoogle, href: "#", color: "text-[#EA4335]" },
  { icon: FaFacebookF, href: "#", color: "text-[#1877F2]" },
  { icon: FaTwitter, href: "#", color: "text-[#1DA1F2]" },
  { icon: FaLinkedinIn, href: "#", color: "text-[#0A66C2]" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-extrabold mb-4 font-heading">
            <span className="text-ink">Job</span>
            <span className="text-white">Nqw</span>
          </h3>
          <p className="text-sm text-white/80 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat facilisis nibh vel faucibus.
          </p>
        </div>

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
            Email : yourid@example.com
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Mon Sat : 9:00 AM - 19:00 PM
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-white mb-4 font-heading">
            Pages
          </h4>
          <ul className="flex flex-col gap-2">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <HiChevronRight className="text-xs" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-white mb-4 font-heading">
            Contact Us
          </h4>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Icon className={`text-sm ${color}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}