import React from "react";
import CategoryForm from "./CategoryForm";
import CategoryHeader from "./CategoryHeader";
import styled from "styled-components";

function CategoryPost() {
  return (
    <Wrap>
      <CategoryHeader />
      <CategoryForm />
    </Wrap>
  );
}

export default CategoryPost;

const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
