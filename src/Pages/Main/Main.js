import React from "react";
import Header from "../../Components/Organisms/Header/Header";
import styled from "styled-components";
import Categories from "../../Components/Organisms/Categories/Categories";
// import Header from "../../Components/Organisms/Header/Header";
import MainBanner from "../../Components/Organisms/MainBanner/MainBanner";



function Main() {
  return (
    <>
      <Header />
      <MainSection>
        <MainBanner />
        <Categories />
      </MainSection>
    </>
  );
}

export default Main;

const MainSection = styled.section`
  min-width: 1030px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 60px;
`;
