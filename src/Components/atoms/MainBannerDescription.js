import React from "react";
import styled from "styled-components";

const MainBannerDescription = ({ item }) => (
  <Wrapper>
    <Count>59</Count>
    <CountTitle>{item.countTitle}</CountTitle>
  </Wrapper>
);

export default MainBannerDescription;

const Wrapper = styled.div`
  position: relative;
  max-width: 33%;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;
  text-align: left;
`;

const Count = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0067e6;
  line-height: 1.5;
`;

const CountTitle = styled.div`
  font-size: 12px;
  margin-top: -2px;
  color: #0067e6;
  line-height: 1.5;
`;
