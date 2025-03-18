import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Политика конфиденциальности",
  description:
    " Настоящая политика конфиденциальности информирует вас о характере, объеме и цели обработки персональных данных (далее именуемых «данные») в рамках нашего онлайн-предложения и связанных с ним веб-сайтов, функций и контента, а также внешних онлайн-присутствий, таких как наши профили в социальных сетях (далее совместно именуемые «онлайн-предложение»). Что касается используемых терминов, таких как «обработка» или «контролер», мы ссылаемся на определения, содержащиеся в статье 4 Общего регламента по защите данных (GDPR).",
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
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Политика конфиденциальности
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Настоящая политика конфиденциальности информирует вас о
                    характере, объеме и цели обработки персональных данных
                    (далее именуемых «данные») в рамках нашего
                    онлайн-предложения и связанных с ним веб-сайтов, функций и
                    контента, а также внешних онлайн-присутствий, таких как наши
                    профили в социальных сетях (далее совместно именуемые
                    «онлайн-предложение»). Что касается используемых терминов,
                    таких как «обработка» или «контролер», мы ссылаемся на
                    определения, содержащиеся в статье 4 Общего регламента по
                    защите данных (GDPR).
                  </p>

                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Типы обрабатываемых данных:
                  </h2>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Данные инвентаризации (например, имена, адреса).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Контактные данные (например, адрес электронной почты,
                      номера телефонов).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Данные контента (например, текстовые записи, фотографии,
                      видео).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Данные об использовании (например, посещенные веб-сайты,
                      интерес к контенту, время доступа).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Метаданные/коммуникационные данные (например, информация
                      об устройстве, IP-адреса).
                    </li>
                  </ul>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Категории субъектов данных
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Посетители и пользователи онлайн-предложения (далее мы
                    именуем субъектов данных совместно «пользователи»).
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Цель обработки
                  </h2>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Предоставление онлайн-предложения, его функций и
                      содержания.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Ответы на запросы контактов и общение с пользователями.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Меры безопасности.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Измерение охвата/маркетинг.
                    </li>
                  </ul>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Используемые термины
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Персональные данные» означают любую информацию, относящуюся
                    к идентифицированному или идентифицируемому физическому лицу
                    (далее — «субъект данных»); Физическое лицо считается
                    идентифицируемым, если его можно идентифицировать, прямо или
                    косвенно, в частности, посредством ссылки на идентификатор,
                    такой как имя, идентификационный номер, данные о
                    местоположении, сетевой идентификатор (например, файл
                    cookie) или на один или несколько факторов, характерных для
                    физической, физиологической, генетической, психической,
                    экономической, культурной или социальной идентичности этого
                    физического лица.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Обработка» означает любую операцию или совокупность
                    операций, выполняемых с персональными данными или наборами
                    персональных данных, независимо от того, осуществляются ли
                    они с помощью автоматизированных средств. Этот термин
                    является широким и охватывает практически любую обработку
                    данных.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Псевдонимизация» означает обработку персональных данных
                    таким образом, что персональные данные больше не могут быть
                    отнесены к конкретному субъекту данных без использования
                    дополнительной информации, при условии, что такая
                    дополнительная информация хранится отдельно и подвергается
                    техническим и организационным мерам, гарантирующим, что
                    персональные данные не будут отнесены к идентифицированному
                    или идентифицируемому физическому лицу.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Профилирование» означает любую форму автоматизированной
                    обработки персональных данных, состоящую из использования
                    персональных данных для оценки определенных персональных
                    аспектов, касающихся физического лица, в частности, для
                    анализа или прогнозирования аспектов, касающихся
                    производительности труда этого физического лица,
                    экономического положения, здоровья, личных предпочтений,
                    интересов, надежности, поведения, местоположения или
                    перемещений.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Контролер» — физическое или юридическое лицо,
                    государственный орган, агентство или иной орган, который
                    самостоятельно или совместно с другими принимает решения о
                    целях и способах обработки персональных данных.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «Обработчик» означает физическое или юридическое лицо,
                    государственный орган, агентство или иной орган, который
                    обрабатывает персональные данные от имени контролера.
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Соответствующие правовые основы
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    В соответствии со статьей 13 GDPR мы проинформируем вас о
                    правовых основаниях нашей обработки данных. Если правовая
                    основа не указана в заявлении о защите данных, применяется
                    следующее: правовая основа для получения согласия — ст. 6
                    (1) (a) и ст. 7 GDPR, правовая основа для обработки в целях
                    предоставления наших услуг и выполнения договорных мер, а
                    также ответа на запросы — ст. 6 (1) (b) GDPR, правовая
                    основа для обработки в целях выполнения наших юридических
                    обязательств — ст. 6 (1) (c) GDPR, а правовая основа для
                    обработки в целях защиты наших законных интересов — ст. 6
                    (1) (f) GDPR. В случае, если жизненно важные интересы
                    субъекта данных или иного физического лица требуют обработки
                    персональных данных, правовым основанием служит статья 6 (1)
                    (d) GDPR.
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Меры безопасности
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    В соответствии со статьей 32 GDPR мы принимаем
                    соответствующие технические и организационные меры для
                    обеспечения уровня защиты, соответствующего риску, принимая
                    во внимание уровень развития техники, затраты на реализацию,
                    характер, объем, обстоятельства и цели обработки, а также
                    различную вероятность и серьезность риска для прав и свобод
                    физических лиц.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Меры включают, в частности, обеспечение конфиденциальности,
                    целостности и доступности данных путем контроля физического
                    доступа к данным, а также доступа, ввода, передачи,
                    обеспечения доступности и разделения данных. Кроме того, мы
                    разработали процедуры, обеспечивающие реализацию прав
                    субъектов данных, удаление данных и реагирование на угрозы
                    данным. Кроме того, мы учитываем защиту персональных данных
                    при разработке и выборе оборудования, программного
                    обеспечения и процессов в соответствии с принципом защиты
                    данных посредством проектирования технологий и настроек по
                    умолчанию, обеспечивающих защиту данных (ст. 25 GDPR).
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Сотрудничество с переработчиками и третьими лицами
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Если в рамках нашей обработки мы раскрываем данные другим
                    лицам и компаниям (подрядчикам или третьим лицам), передаем
                    их им или иным образом предоставляем им доступ к данным, это
                    будет сделано только на основании законного разрешения
                    (например, если передача данных третьим лицам, таким как
                    поставщики платежных услуг, необходима для выполнения
                    договора в соответствии со статьей 6 (1) (b) GDPR), вашего
                    согласия, юридического обязательства, предусматривающего
                    это, или на основании наших законных интересов (например,
                    при использовании агентов, веб-хостингов и т. д.). Если мы
                    поручаем третьим лицам обработку данных на основе так
                    называемого «соглашения об обработке заказа», это делается
                    на основании статьи 28 GDPR.
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Переводы в третьи страны
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Если мы обрабатываем данные в третьей стране (т. е. за
                    пределами Европейского союза (ЕС) или Европейской
                    экономической зоны (ЕЭЗ)) или если это происходит в рамках
                    использования сторонних услуг или раскрытия или передачи
                    данных третьим лицам, это будет происходить только в том
                    случае, если это необходимо для выполнения наших
                    (пред)договорных обязательств, на основании вашего согласия,
                    в силу правового обязательства или на основании наших
                    законных интересов. При наличии юридических или договорных
                    разрешений мы обрабатываем или поручаем обрабатывать данные
                    в третьей стране только при соблюдении особых требований ст.
                    44 и след. GDPR. Это означает, что обработка осуществляется,
                    например, на основе специальных гарантий, таких как
                    официально признанное определение уровня защиты данных,
                    соответствующего уровню ЕС (например, для США через «Privacy
                    Shield») или соблюдение официально признанных специальных
                    договорных обязательств (так называемых «стандартных
                    договорных положений»).
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Удаление данных
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Обрабатываемые нами данные будут удалены или ограничены в
                    соответствии со статьями 17 и 18 GDPR. Если в настоящей
                    политике конфиденциальности прямо не указано иное,
                    хранящиеся у нас данные будут удалены, как только они
                    перестанут быть необходимыми для их предполагаемого
                    использования, и не будет никаких юридических обязательств
                    по хранению, препятствующих удалению. Если данные не
                    удаляются, поскольку они необходимы для других юридически
                    допустимых целей, их обработка будет ограничена. Это
                    означает, что данные будут заблокированы и не будут
                    обрабатываться для других целей. Это относится, например, к
                    данным, которые необходимо хранить по причинам коммерческого
                    или налогового права.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Согласно требованиям законодательства Германии, хранение
                    осуществляется в течение 10 лет в соответствии с разделами
                    147, пунктом 1 АО, 257, пунктом 1, подпунктами 1 и 4,
                    пунктом 4 HGB (книги, записи, управленческие отчеты,
                    бухгалтерские документы, коммерческие книги, документы,
                    имеющие отношение к налогообложению и т. д.) и 6 лет в
                    соответствии с разделом 257, пунктом 1, подпунктами 2 и 3,
                    пунктом 4 HGB (коммерческие письма).
                    <br />
                    Согласно требованиям законодательства Австрии, хранение
                    осуществляется, в частности, в течение 7 лет в соответствии
                    с разделом 132, пунктом 1 BAO (бухгалтерские документы,
                    квитанции/счета-фактуры, счета, расписки, деловые бумаги,
                    отчеты о доходах и расходах и т. д.), в течение 22 лет в
                    отношении недвижимости и в течение 10 лет в отношении
                    документов, связанных с электронными услугами,
                    телекоммуникационными услугами, радио- и телевизионными
                    услугами, которые предоставляются непредпринимателям в
                    государствах-членах ЕС и для которых используется
                    Мини-единый центр обслуживания (MOSS).
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
