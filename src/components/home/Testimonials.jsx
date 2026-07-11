"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

          <div className="w-full overflow-hidden">
            <Swiper
              className="testimonials-swiper !w-full"
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              observer={true}
              observeParents={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <p className="text-sm text-ink leading-relaxed mb-6 max-w-md italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <h4 className="text-base font-semibold text-ink">{t.name}</h4>
                  <p className="text-xs text-gray-text">{t.role}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-gray-border text-ink flex items-center justify-center hover:bg-gray-light hover:border-gray-text/40 transition-colors duration-300 ease-in-out"
              aria-label="Previous testimonial"
            >
              <HiArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-gray-border text-ink flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 ease-in-out"
              aria-label="Next testimonial"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-80 bg-primary rounded-card relative overflow-hidden">
          <Image
            src="/images/testimonial-bg.png"
            alt="Happy employee testimonial"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}