import React from "react";
import styled from "styled-components";
import CategoryButton from "../Atoms/CategoryButton";

const CategoriesItemInfo = ({ categoriesInfo, goToCategory }) => (
  <Wrapping>
    {categoriesInfo.map((item) => (
      <CategoryButton goToCategory={goToCategory} key={item.id} item={item} />
    ))}
  </Wrapping>
);

export default CategoriesItemInfo;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
