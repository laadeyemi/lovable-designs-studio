
import React, { useState, useEffect } from "react";
import slide1 from "@/assets/Swiftpay.jpg";
import slide2 from "@/assets/advert.jpg";
import slide3 from "@/assets/offer.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Adjust import if icons are elsewhere

const slides = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: slide1,
    href: "/about",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    image: slide2,
    href: "/ads",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    image: slide3,
    href: "/contact",
  },
];

export function AdBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 h-[100px] w-full overflow-hidden rounded-xl">
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="h-full max-w-full object-contain mx-auto block relative z-30"
          />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-40">
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-primary font-display text-lg font-semibold">
                    {slide.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* link overlay for the currently visible slide */}
          <a
            href={slides[currentSlide].href}
            className="absolute inset-0 z-50 cursor-pointer"
            aria-label={`Open slide ${currentSlide + 1}`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors z-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors z-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* spacer to preserve original layout height so content isn't hidden under fixed banner */}
      <div className="h-[100px] w-full" aria-hidden="true" />
    </>
  );
};