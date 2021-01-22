import React from "react";
import styled from "styled-components";
import ItemTypeA from "../Atoms/ItemTypeA";

const CategoriesItemTypeA = ({ categoriesInfo }) => (
  <Wrapping>
    {categoriesInfo.map((item) => (
      <ItemTypeA key={item.id} item={item} />
    ))}
  </Wrapping>
);

export default CategoriesItemTypeA;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
