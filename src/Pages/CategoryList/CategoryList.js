import React, { useState } from "react";
import { useHistory } from "react-router";
import HeaderNav from "../../Components/Organisms/Header/Header";
import { Layout, Button } from "antd";

import styled from "styled-components";

const { Header, Footer, Content } = Layout;

function CategoryList() {
  return (
    <>
      <HeaderNav />
      <CategoryListMain>
        <Layout>
          <Header style={{ background: "green"}}>
            Title
            <Button> create post </Button>
            </Header>
          <Content>DropDownSection</Content>
          <Content>Container Section</Content>
          <Content>Card Collection Section</Content>
          <Footer>Footer</Footer>
        </Layout>
      </CategoryListMain>
    </>
  );
}

export default CategoryList;

const CategoryListMain = styled.div`
  border: 1px solid black;
`;
