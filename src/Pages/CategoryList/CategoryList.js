import React from "react";
import HeaderNav from "../../Components/Organisms/Header/Header";
import CategoryListLayout from "../../Components/Organisms/CategoryListLayout/CategoryListLayout";
import styled from "styled-components";

function CategoryList() {
  return (
    <>
      <HeaderNav />
      <CategoryListMain>
        <CategoryListLayout />
      </CategoryListMain>
    </>
  );
}

export default CategoryList;

const CategoryListMain = styled.div`
  max-width: 1280px;
  min-width: 1030px;
  margin: 0 auto;
  height: 100%;
  /* margin: 0.5em 0.5em; */
  padding: 1em 1em;
`;
