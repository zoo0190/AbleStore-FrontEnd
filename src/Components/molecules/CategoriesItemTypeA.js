import React from "react";
import styled from "styled-components";
import ItemTypeA from "../Atoms/ItemTypeA";

const CategoriesItemTypeA = () => (
  <Wrapping>
    <ItemTypeA />
    <ItemTypeA />
    <ItemTypeA />
    <ItemTypeA />
  </Wrapping>
);

export default CategoriesItemTypeA;

const Wrapping = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
