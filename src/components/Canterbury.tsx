"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function Canterbury() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/assets/canterbury/1 (1).jpg",
    "/assets/canterbury/1 (2).jpg",
    "/assets/canterbury/1 (3).jpg",
    "/assets/canterbury/1 (4).jpg",
    "/assets/canterbury/1 (5).jpg",
    "/assets/canterbury/1 (6).jpg",
    "/assets/canterbury/2 (2).jpg",
    "/assets/canterbury/2 (3).jpg",
    "/assets/canterbury/2 (4).jpg",
    "/assets/canterbury/2 (6).jpg",
    "/assets/canterbury/3 (1).jpg",
    "/assets/canterbury/3 (2).jpg",
    "/assets/canterbury/3 (3).jpg",
    "/assets/canterbury/3 (4).jpg",
    "/assets/canterbury/3 (5).jpg",
    "/assets/canterbury/ecosystem (1).jpg",
    "/assets/canterbury/ecosystem (2).jpg",
     "/assets/canterbury/ecosystem (1).png",
    "/assets/canterbury/ecosystem (2).png",
    "/assets/canterbury/ecosystem (3).png",
    "/assets/canterbury/ecosystem (4).png",
    "/assets/canterbury/ecosystem (5).png",
    "/assets/canterbury/ecosystem (6).png",
    "/assets/canterbury/ecosystem (7).png",
    "/assets/canterbury/ecosystem (8).png",
    "/assets/canterbury/ecosystem (9).png",
    "/assets/canterbury/ecosystem (10).png",
    "/assets/canterbury/ecosystem (11).png",
    "/assets/canterbury/ecosystem (12).png",
    "/assets/canterbury/ecosystem (13).png",
"/assets/canterbury/ecosystem (14).png",
  ];

  return (
    <section className="bg-[#f3f3f3] py-14 relative">
      <h2 className="text-center text-4xl md:text-5xl font-heading text-[#0d1728] mb-10">
        Complete projects within <br /> Canterbury Ecosystem
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".club-next",
            prevEl: ".club-prev",
          }}
          loop={true}
          spaceBetween={26}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4.5 },
          }}
          className="px-4"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Clubhouse ${i + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-full h-[260px] object-cover cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="club-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#071426] text-white w-10 h-10 flex items-center justify-center text-2xl">
          ‹
        </button>

        <button className="club-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#071426] text-white w-10 h-10 flex items-center justify-center text-2xl">
          ›
        </button>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={34} />
          </button>

          <img
            src={selectedImage}
            alt="Large preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}