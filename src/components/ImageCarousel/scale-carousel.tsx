"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  slides: {
    src: string;
    alt: string;
  }[];
  options?: any;
  loop?: boolean;
  scaleEffect?: boolean;
  showAdjacentSlides?: boolean;
};

export default function ScaleCarousel({
  slides,
  options = {},
  loop = false,
  scaleEffect = false,
  showAdjacentSlides = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop,
    containScroll: showAdjacentSlides ? "trimSnaps" : "strict",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Calculate slide width based on whether we're showing adjacent slides
  const slideWidth = showAdjacentSlides ? "flex-[0_0_80%]" : "flex-[0_0_100%]";

  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        className={`overflow-hidden ${showAdjacentSlides ? "px-0" : ""}`}
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              className={`${slideWidth} relative min-w-0 transition-transform duration-300 ease-in-out ${
                scaleEffect || showAdjacentSlides ? "px-4" : ""
              }`}
              key={index}
            >
              <div
                className={`h-64 sm:h-80 md:h-96 ${scaleEffect || showAdjacentSlides ? "m-0" : "m-4"} overflow-hidden rounded-lg transition-all duration-300 ${
                  scaleEffect && selectedIndex === index
                    ? "z-10 scale-100 opacity-100"
                    : scaleEffect
                      ? "scale-90 opacity-80"
                      : ""
                }`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white ${
          !prevBtnEnabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer opacity-100"
        }`}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left h-6 w-6"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className={`absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white ${
          !nextBtnEnabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer opacity-100"
        }`}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right h-6 w-6"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === selectedIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
