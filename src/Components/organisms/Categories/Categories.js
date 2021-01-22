import React from "react";
import SectionTitle from "../../Atoms/SectionTitle";
import CategoriesItemTypeA from "../../Molecules/CategoriesItemTypeA";
import CategoriesItemTypeB from "../../Molecules/CategoriesItemTypeB";

const CATEGORIES_INFO_A = [
  {
    id: 1,
    title: "NAS",
    imgSrc: "https://community.synology.com/front/img/board/1.png",
  },
  {
    id: 2,
    title: "Router",
    imgSrc: "https://community.synology.com/front/img/board/2.png",
  },
  {
    id: 3,
    title: "Surveillance",
    imgSrc: "https://community.synology.com/front/img/board/3.png",
  },
  {
    id: 4,
    title: "C2",
    imgSrc: "https://community.synology.com/front/img/board/4.png",
  },
];

const CATEGORIES_INFO_B = [
  {
    id: 5,
    title: "Legacy Forums",
    imgSrc: null,
  },
  {
    id: 6,
    title: "Announcement",
    imgSrc: "https://community.synology.com/front/img/announcement.png",
  },
];

const Categories = () => (
  <>
    <SectionTitle />
    <CategoriesItemTypeA categoriesInfo={CATEGORIES_INFO_A} />
    <CategoriesItemTypeB categoriesInfo={CATEGORIES_INFO_B} />
  </>
);

export default Categories;
