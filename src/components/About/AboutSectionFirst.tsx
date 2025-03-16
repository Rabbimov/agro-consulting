import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
const AboutSectionFirst = () => {
  return (
    <section className="pt-8 md:pt-16 lg:pt-20">
      <div className="container">
        <SectionTitle
          title="C нами вы в надежных руках!"
          paragraph=""
          center
          mb="60px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/15] max-w-[500px] overflow-hidden rounded-xl text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/page-01_img01.jpg"
                alt="about image"
                fill
                className="object-cover drop-shadow-three dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Кратко о нас
                </h3>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Основным направлением деятельности компании Agro consulting
                  global являеться организация и проведение деловых поездок и
                  инсентив-туров в Германии и по всей Европе.
                </p>
                <Link
                  href="/about"
                  className=" text-lg font-bold !leading-tight hover:text-primary hover:underline dark:text-white dark:hover:text-primary sm:text-xl md:text-2xl"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFirst;
