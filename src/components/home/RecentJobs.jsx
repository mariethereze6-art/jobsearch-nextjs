"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { jobs } from "@/src/data/jobs";
import SectionHeading from "@/src/components/ui/SectionHeading";
import JobCard from "@/src/components/home/JobCard";
import Button from "@/src/components/ui/Button";

export default function RecentJobs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <SectionHeading
          title="Recently Added Jobs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
        />

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <JobCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10">
          <Button variant="outline">View More</Button>
        </div>
      </div>
    </section>
  );
}