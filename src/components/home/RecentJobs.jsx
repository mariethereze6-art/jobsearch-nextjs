"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import { jobs } from "@/src/data/jobs";
import SectionHeading from "@/src/components/ui/SectionHeading";
import JobCard from "@/src/components/home/JobCard";
import Button from "@/src/components/ui/Button";

export default function RecentJobs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-16 md:py-24 overflow-x-hidden">
      {/* Full-width relative wrapper: this is the containing block the
         desktop nav buttons anchor to, so they can sit outside the
         narrower max-w-container without ever leaving the viewport. */}
      <div className="relative">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <SectionHeading
            title="Recently Added Jobs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
          />

          {/* -my-3 cancels out the py-3 added below on the Swiper root,
             so the extra clip-room doesn't shift surrounding spacing. */}
          <div className="-my-3">
            <Swiper
              className="!py-3"
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {jobs.map((job) => (
                <SwiperSlide key={job.id}>
                  <JobCard job={job} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Nav buttons: in-flow + centered on mobile/tablet,
             switch to absolute + outside the container on lg+ */}
          <div
            className="flex items-center justify-center gap-4 mt-8
                       lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2
                       lg:right-2 xl:right-6 lg:flex-col lg:gap-3"
          >
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous jobs"
              className="w-10 h-10 rounded-full bg-white border border-gray-border shadow-md
                         flex items-center justify-center text-ink
                         hover:bg-primary hover:text-white hover:border-primary
                         transition-colors
                         [&.swiper-button-disabled]:opacity-30
                         [&.swiper-button-disabled]:pointer-events-none"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next jobs"
              className="w-10 h-10 rounded-full bg-white border border-gray-border shadow-md
                         flex items-center justify-center text-ink
                         hover:bg-primary hover:text-white hover:border-primary
                         transition-colors
                         [&.swiper-button-disabled]:opacity-30
                         [&.swiper-button-disabled]:pointer-events-none"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline">View More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
