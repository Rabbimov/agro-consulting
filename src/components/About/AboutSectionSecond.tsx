import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionSecond = () => {
  const List = ({ text, url }) => (
    <div className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[53px] w-[53px] items-center justify-center rounded-md text-primary">
        <div className="relative mx-auto aspect-[1/1] w-[53px] lg:mr-0">
          <Image
            src={url}
            alt="about-image"
            fill
            className="mx-auto max-w-full object-cover drop-shadow-three dark:drop-shadow-none lg:mr-0"
          />
        </div>
      </span>
      {text}
    </div>
  );

  const List2 = ({ text }) => (
    <p className="mb-3 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="about" className="pt-6 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 pt-4 lg:w-1/2">
              <SectionTitle title="Наши преимущества:" paragraph="" mb="20px" />
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List url="/images/about/safe.png" text="Надежность" />
                    <List url="/images/about/honesty.png" text="Честность" />
                    <List url="/images/about/prof.png" text="Профессионализм" />
                    <List
                      url="/images/about/individual.png"
                      text="Индивидуальный подход"
                    />
                    <List
                      url="/images/about/connection.png"
                      text="Мы на связи 24/7"
                    />
                    <Link
                      href="/about-us"
                      className=" text-lg font-bold !leading-tight hover:text-primary hover:underline dark:text-white dark:hover:text-primary sm:text-xl md:text-2xl"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg bg-gray-light px-4 pt-4 dark:bg-gray-dark  lg:w-1/2  ">
              <SectionTitle
                title="В спектр наших услуг входят:"
                paragraph=""
                mb="20x"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <List2 text="подбор событий по запросу и тематике, в том числе и обучающих;" />
                <List2 text="организация деловых поездок «под ключ»;" />
                <List2 text="посещение международных выставок;" />

                <List2 text="предоставление всех необходимых документов для получения визы;" />
                <List2 text="входные билеты на выставку;" />

                <List2 text="культурная программа (организация обедов и ужинов, экскурсии);" />
                <List2 text="входные билеты на культурные и спортивные мероприятия." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSecond;
