"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { testimonials } from "@/src/data/testimonials";
import ImageWithFallback from "@/src/components/ui/ImageWithFallback";
import { getInitials } from "@/src/lib/getInitials";

export default function Testimonials() {
  // Using state (rather than a plain useRef) for the nav buttons ensures a
  // re-render happens once the DOM nodes exist, so Swiper receives the real
  // elements instead of `null` on its first render — this was the root
  // cause of the navigation buttons silently doing nothing.
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
            People&apos;s Feedback about JobNow!
          </h2>
          <p className="text-sm text-gray-text leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci.
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={testimonials.length > 1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ el: ".testimonial-pagination", clickable: true }}
            navigation={{ prevEl, nextEl }}
            className="pb-1"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <p className="text-sm text-ink leading-relaxed mb-6 max-w-md italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <ImageWithFallback
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      initials={getInitials(t.name)}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">{t.name}</h4>
                    <p className="text-xs text-gray-text">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between mt-8">
            <div className="testimonial-pagination flex items-center gap-2" />
            <div className="flex gap-3">
              <button
                ref={setPrevEl}
                type="button"
                className="w-10 h-10 rounded-full border border-gray-border flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <HiArrowLeft />
              </button>
              <button
                ref={setNextEl}
                type="button"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Next testimonial"
              >
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-card relative overflow-hidden">
          <ImageWithFallback
            src="/images/testimonial-bg.png"
            alt="Happy employee testimonial"
            fill
            className="object-cover"
            icon={HiOutlinePhoto}
          />
        </div>
      </div>
    </section>
  );
}