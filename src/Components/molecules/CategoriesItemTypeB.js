import React from "react";
import styled from "styled-components";
import ItemTypeB from "../Atoms/ItemTypeB";

const CategoriesItemTypeB = () => (
  <Wrapping>
    <ItemTypeB />
    <ItemTypeB />
  </Wrapping>
);

export default CategoriesItemTypeB;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
