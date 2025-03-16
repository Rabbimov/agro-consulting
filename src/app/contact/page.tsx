import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap ">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle title="Контакт" paragraph="" mb="45px" />
                <div className="max-w-full">
                  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    Адрес: Город Ташкент. Яккасарайский район, улица Бабура, дом
                    40а
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    Тел:{" "}
                    <span>
                      <a
                        href="tel:+998913000929"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="phone-link"
                        className="mr-6 text-base font-medium leading-relaxed text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary sm:text-lg"
                      >
                        +998913000929
                      </a>
                    </span>
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    Тел:{" "}
                    <span>
                      <a
                        href="tel:+998883902222"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="phone-link"
                        className="mr-6 text-base font-medium leading-relaxed text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary sm:text-lg"
                      >
                        +998883902222
                      </a>
                    </span>
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    Электронная почта:{" "}
                    <span>
                      <a
                        href="mailto:agro_consulting@inbox.ru"
                        aria-label="email-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        agro_consulting@inbox.ru
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="relative mx-auto mb-12 aspect-[25/20] overflow-hidden rounded-xl text-center"
                  data-wow-delay=".15s"
                >
                  <Image
                    src="/images/contact/contact.webp"
                    alt="Contact"
                    fill
                    quality={70}
                    className="object-cover drop-shadow-three dark:drop-shadow-none"
                  />
                </div>
                <div className="max-w-full">
                  <div className="mb-9">
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Индивидуальный подход к каждому клиенту, гарантия
                      соблюдения конфиденциальности в отношении получаемой
                      информации, качество и реальные сроки выполнения.
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
                      ExpoReisen предлагает как индивидуальные, так и групповые
                      туры на любую интересующую вас выставку или конференцию.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
