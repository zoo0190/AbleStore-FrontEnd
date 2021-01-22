import React from "react";
import styled from "styled-components";
import Categories from "../../Components/Organisms/Categories/Categories";
import Discussions from "../../Components/Organisms/Discussions/Discussions";
import Header from "../../Components/Organisms/Header/Header";
import MainBanner from "../../Components/Organisms/MainBanner/MainBanner";
import "antd/dist/antd.css";
import { BackTop } from "antd";

function Main() {
  return (
    <>
      <Header />
      <MainSection>
        <MainBanner />
        <Categories />
        <Discussions />
      </MainSection>
      <BackTop>
        <div style={backTopStyle}>UP</div>
      </BackTop>
    </>
  );
}

export default Main;

const backTopStyle = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const MainSection = styled.section`
  min-width: 1030px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 60px;
`;
