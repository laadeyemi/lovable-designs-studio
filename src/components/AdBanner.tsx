import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Special Offer: 20% Off Branding",
    subtitle: "Limited time only",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    title: "New Services Available",
    subtitle: "UI/UX Design & Development",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    title: "Partner With Us",
    subtitle: "Advertise your brand here",
    bgColor: "bg-secondary",
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
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-background border-b border-border h-[100px]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[1200px] max-w-full h-[100px] overflow-hidden rounded-lg">
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`min-w-full h-full flex items-center justify-center ${slide.bgColor}`}
              >
                <div className="text-center">
                  <p className="text-primary font-display text-lg font-semibold">
                    {slide.title}
                  </p>
                  <p className="text-muted-foreground text-sm">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
