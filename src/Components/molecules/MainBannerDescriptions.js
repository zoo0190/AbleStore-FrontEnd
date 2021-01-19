import React from "react";
import MainBannerDescription from "../Atoms/MainBannerDescription";
import styled from "styled-components";

const MainBannerDescriptions = () => (
  <Wrapper>
    <MainBannerDescription />
    <MainBannerDescription />
    <MainBannerDescription />
  </Wrapper>
);

export default MainBannerDescriptions;

const Wrapper = styled.div`
  display: flex;
  max-width: 42%;
`;
