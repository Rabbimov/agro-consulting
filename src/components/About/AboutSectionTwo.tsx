import Image from "next/image";
import ScaleCarousel from "../ImageCarousel/scale-carousel";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const slides = [
  {
    src: "/images/gallery/one/photo_2025-03-16_22-23-5.jpg?height=600&width=800",
    alt: "Slide 5",
  },
  {
    src: "/images/gallery/one/photo_2025-03-16_22-23-6.jpg?height=600&width=800",
    alt: "Slide 6",
  },
  {
    src: "/images/gallery/one/photo_2025-03-16_22-23-7.jpg?height=600&width=800",
    alt: "Slide 7",
  },
  {
    src: "/images/gallery/one/photo_2025-03-16_22-23-8.jpg?height=600&width=800",
    alt: "Slide 8",
  },
];
const AboutSectionTwo = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section className="py-8 md:py-10 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto flex aspect-[25/24] w-full items-center overflow-hidden rounded-xl">
              <ScaleCarousel
                slides={slides}
                loop={false}
                scaleEffect={true}
                showAdjacentSlides={true}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Полученный опыт и будущие планы
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  По итогам поездки наша компания приняла решение разработать
                  новые стратегии внедрения инновационных технологий в сельском
                  хозяйство.
                </p>
              </div>

              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3">
                  <List text="Внедрение современных сельскохозяйственных технологий в наши фермерские хозяйства." />
                  <List text="Изучение новых методов рационального использования ресурсов для обеспечения экологической устойчивости." />
                  <List text="Установление новых международных партнерств для реализации инновационных сельскохозяйственных проектов." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
