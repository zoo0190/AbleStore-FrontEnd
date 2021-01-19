import React from "react";
import styled from "styled-components";

const MainBannerTitle = () => (
  <Title>
    Ask questions <br /> Find answers here
  </Title>
);

export default MainBannerTitle;

const Title = styled.h2`
  max-width: 58%;
  margin-bottom: 40px;
  padding: 0 15px;
  font-size: 38px;
  font-weight: 700;
  color: #4b5961;
  line-height: 1.3;
`;
