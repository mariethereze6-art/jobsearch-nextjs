import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineClock, HiArrowRight } from "react-icons/hi";
import ImageWithFallback from "@/src/components/ui/ImageWithFallback";
import { getInitials } from "@/src/lib/getInitials";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-card border border-gray-border p-6 flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden relative shrink-0"
          style={{ backgroundColor: job.logoBg }}
        >
          <ImageWithFallback
            src={job.logo}
            alt={job.company}
            fill
            className="object-contain p-2"
            initials={getInitials(job.company)}
            fallbackClassName=""
            fallbackTextClassName="text-ink"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-ink">{job.title}</h3>
          <p className="text-xs text-gray-text">{job.company}</p>
        </div>
      </div>

      <p className="text-xs text-gray-text leading-relaxed">{job.description}</p>

      <div className="flex items-center gap-4 text-xs text-gray-text">
        <span className="flex items-center gap-1">
          <HiOutlineLocationMarker /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <HiOutlineClock /> {job.type}
        </span>
      </div>

      <Link
        href="#"
        className="flex items-center gap-1 text-primary text-sm font-semibold transition-all duration-300 ease-out hover:gap-2"
      >
        Apply Now <HiArrowRight />
      </Link>
    </div>
  );
}