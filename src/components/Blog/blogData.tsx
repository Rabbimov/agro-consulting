import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Деловой туризм",
    paragraph:
      "Такая бизнес-поездка за рубеж открывает огромные возможности для развития компании: она позволяет заключить выгодные контракты с европейскими странами, участвовать в тематических мероприятиях (международных конференциях и выставках), укрепить корпоративный дух. Именно в силу этих причин корпоративный туризм стал очень популярен.",
    image: "/images/blog/business.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["бизнес"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Посещение предприятий",
    paragraph:
      "Вы ищите поставщика оборудования или инновационных материалов в Германии или желаете перенять опыт организации производства на немецких предприятиях?",
    image: "/images/blog/companys.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/blog-02.jpg",
      designation: "Content Writer",
    },
    tags: ["компании"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Культурный туризм",
    paragraph:
      "Германия занимает одно из первых мест в списке самых посещаемых стран Европы. Отдых в Германии будет комфортабельным благодаря высокому уровню экономического развития, уютным и красивым городам, разнообразию сервисов в местах отдыха.",
    image: "/images/blog/culture.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["культура"],
    publishDate: "2025",
  },
];
export default blogData;
