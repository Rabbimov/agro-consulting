import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title:
    "О нас | Индивидуальный подход к каждому клиенту, гарантия соблюдения конфиденциальности в отношении получаемой информации, качество и реальные сроки выполнения.",
  description:
    "Наше знание рынка, использование в работе современных технологий, взаимовыгодные партнерские соглашения с поставщиками являются залогом успешного сотрудничества с нашей компанией.",
  // other metadata
};

const AboutPage = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title="О нас" center paragraph="" mb="45px" />
              <div
                className="relative mx-auto mb-12 aspect-[25/20] overflow-hidden rounded-xl text-center"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/page-02_img01.jpg"
                  alt="about image"
                  fill
                  className="object-cover drop-shadow-three dark:drop-shadow-none"
                />
              </div>
              <div className="max-w-full">
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Индивидуальный подход к каждому клиенту, гарантия соблюдения
                    конфиденциальности в отношении получаемой информации,
                    качество и реальные сроки выполнения.
                  </p>
                </div>
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Мы работаем без посредников, что делает наши услуги более
                    удобными, быстрыми и доступными!
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Agro consulting global предлагает как индивидуальные, так и
                    групповые туры на любую интересующую вас выставку или
                    конференцию.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Мы предлагаем"
                center
                paragraph=""
                mb="45px"
              />
              <div className="max-w-full">
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Индивидуальный подход к каждому клиенту, гарантия соблюдения
                    конфиденциальности в отношении получаемой информации,
                    качество и реальные сроки выполнения.
                  </p>
                </div>
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Наше знание рынка, использование в работе современных
                    технологий, взаимовыгодные партнерские соглашения с
                    поставщиками являются залогом успешного сотрудничества с
                    нашей компанией.
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Мы работаем для того, чтобы каждый день открывать перед
                    своими клиентами более широкие возможности поиска новых
                    решений и полезных контактов.
                  </p>
                </div>
              </div>

              <SectionTitle
                title="В спектр наших услуг входят:"
                paragraph=""
                mb="45px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <List text="подбор событий по запросу и тематике, в том числе и обучающих;" />
                <List text="организация деловых поездок «под ключ»;" />
                <List text="посещение международных выставок;" />

                <List text="предоставление всех необходимых документов для получения визы;" />
                <List text="входные билеты на выставку;" />

                <List text="культурная программа (организация обедов и ужинов, экскурсии);" />
                <List text="входные билеты на культурные и спортивные мероприятия." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
