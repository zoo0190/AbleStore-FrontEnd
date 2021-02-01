import React from "react";
import { useHistory } from "react-router-dom";
import SectionTitle from "../../Atoms/SectionTitle";
import CategoriesItemInfo from "../../Molecules/CategoriesItemInfo";
import CategoriesItemInfoSub from "../../Molecules/CategoriesItemInfoSub";

const CATEGORIES_INFO = [
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

const CATEGORIES_INFO_SUB = [
  {
    id: 17,
    title: "Legacy Forums",
    imgSrc: null,
  },
  {
    id: 18,
    title: "Announcement",
    imgSrc: "https://community.synology.com/front/img/announcement.png",
  },
];

const Categories = () => {
  const history = useHistory();

  const goToCategory = (e) => {
    history.push(`/forum/${e}`);
  };

  return (
    <>
      <SectionTitle title="Categories" />
      <CategoriesItemInfo goToCategory={goToCategory} categoriesInfo={CATEGORIES_INFO} />
      <CategoriesItemInfoSub goToCategory={goToCategory} categoriesInfo={CATEGORIES_INFO_SUB} />
    </>
  );
};

export default Categories;
