import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Contact Page Адрес: Город Ташкент. Яккасарайский район, улица Бабура, дом 40а",
  description: " Тел: +998913000929, Тел:+998883902222",
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
                  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
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
                  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    <a
                      href="https://www.instagram.com/agro_consulting.uz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-3 mr-6 flex gap-2 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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
                        className="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span>agro_consulting.uz</span>
                    </a>
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    <a
                      href="mailto:agro_consulting@inbox.ru"
                      aria-label="email-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 flex gap-2 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>{" "}
                      <span>agro_consulting@inbox.ru</span>
                    </a>
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
                      Agro consulting global предлагает как индивидуальные, так
                      и групповые туры на любую интересующую вас выставку или
                      конференцию.
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
