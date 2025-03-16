import SectionTitle from "../Common/SectionTitle";
import ImageCarousel from "./image-carousel";
export default function GalLeryCarousel() {
  // Sample slides data
  const slides = [
    {
      src: "/images/gallery/photo_2024-05-29_15.jpg?height=600&width=800",
      alt: "Slide 1",
    },

    {
      src: "/images/gallery/photo_2024-05-29_12.jpg?height=600&width=800",
      alt: "Slide 2",
    },
    {
      src: "/images/gallery/photo_2024-05-29_13.jpg?height=600&width=800",
      alt: "Slide 3",
    },
    {
      src: "/images/gallery/photo_2024-05-29_14.jpg?height=600&width=800",
      alt: "Slide 4",
    },
    {
      src: "/images/gallery/photo_2024-05-29_11.jpg?height=600&width=800",
      alt: "Slide 5",
    },
    {
      src: "/images/gallery/photo_2024-05-29_16.jpg?height=600&width=800",
      alt: "Slide 6",
    },
    {
      src: "/images/gallery/photo_2024-05-29_17.jpg?height=600&width=800",
      alt: "Slide 7",
    },
    {
      src: "/images/gallery/photo_2024-05-29_18.jpg?height=600&width=800",
      alt: "Slide 8",
    },
    {
      src: "/images/gallery/photo_2024-05-29_19.jpg?height=600&width=800",
      alt: "Slide 9",
    },
    {
      src: "/images/gallery/photo_2024-05-29_20.jpg?height=600&width=800",
      alt: "Slide 10",
    },
    {
      src: "/images/gallery/photo_2024-05-29_21.jpg?height=600&width=800",
      alt: "Slide 11",
    },
    {
      src: "/images/gallery/photo_2024-05-29_22.jpg?height=600&width=800",
      alt: "Slide 12",
    },
    {
      src: "/images/gallery/photo_2024-05-29_23.jpg?height=600&width=800",
      alt: "Slide 13",
    },
  ];

  return (
    <main className="container mt-20 p-8">
      <SectionTitle title="Обмен опытом" paragraph="" center mb="40px" />
      <ImageCarousel
        slides={slides}
        options={{
          dragFree: true,
          containScroll: "keepSnaps",
          watchSlides: false,
          watchResize: false,
        }}
      />
    </main>
  );
}
