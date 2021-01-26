import React from "react";
import styled from "styled-components";
import CategorySubButton from "../Atoms/CategorySubButton";

const CategoriesItemInfoSub = ({ categoriesInfo, goToCategory }) => (
  <Wrapping>
    {categoriesInfo.map((item) => {
      return <CategorySubButton goToCategory={goToCategory} key={item.id} item={item} />;
    })}
  </Wrapping>
);

export default CategoriesItemInfoSub;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
