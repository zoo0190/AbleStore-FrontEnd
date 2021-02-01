import React from "react";
import CategoryForm from "./CategoryForm";
import CategoryHeader from "./CategoryHeader";
import styled from "styled-components";
import HeaderNav from "../../Components/Organisms/Header/Header";
function CategoryPost() {
  return (
    <>
      <HeaderNav />
      <Wrap>
        <CategoryHeader />
        <CategoryForm />
      </Wrap>
    </>
  );
}

export default CategoryPost;

const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 60px;
`;
