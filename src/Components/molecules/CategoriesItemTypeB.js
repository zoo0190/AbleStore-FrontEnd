import React from "react";
import styled from "styled-components";
import ItemTypeB from "../Atoms/ItemTypeB";

const CategoriesItemTypeB = ({ categoriesInfo }) => (
  <Wrapping>
    {categoriesInfo.map((item) => {
      return <ItemTypeB key={item.id} item={item} />;
    })}
  </Wrapping>
);

export default CategoriesItemTypeB;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
