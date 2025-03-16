import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/hands.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Корпоративные мероприятия за границей набирают всё большую
                    популярность.
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Такая бизнес-поездка за рубеж открывает огромные возможности
                    для развития компании: она позволяет заключить выгодные
                    контракты с европейскими странами, участвовать в
                    тематических мероприятиях (международных конференциях и
                    выставках), укрепить корпоративный дух. Именно в силу этих
                    причин корпоративный туризм стал очень популярен.
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Германия является одной из самых индустриально развитых
                    стран Европы, что делает ее крупным центром делового
                    туризма. Европейские стандарты ведения бизнеса, огромный
                    промышленный потенциал, сосредоточение банковского капитала
                    сделали эту страну одним из лидеров на мировом рынке.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Компания{" "}
                    <strong className="text-primary dark:text-white">
                      Agro consulting global
                    </strong>{" "}
                    предлагает организацию мероприятий различной специализации:
                    посещения международных выставок, семинаров и конференций, а
                    также организация культурной программы. Мы берём на себя
                    разработку и реализацию любых программ, с любой численностью
                    групп и различным бюджетом.
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Расчет стоимости программы производится индивидуально в
                    зависимости от количества участников. На нашем сайте Вы
                    можете ознакомиться с наиболее важными выставками в Германии
                    на 2025 год.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
