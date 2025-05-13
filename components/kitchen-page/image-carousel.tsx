'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
  interval?: number; // in ms, default is 5000
};

export default function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(timer);
  }, [current, interval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        aria-label="Next"
      >
        <ChevronRight />
      </button>

      {/* Optional Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
