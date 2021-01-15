import React from "react";
import styled from "styled-components";

const HeaderLogo = () => {
  return (
    <Anchor href="/">
      <LogoImg src="https://community.synology.com/front/img/logo/logo_white.svg" />
      <LogoTitle>Community</LogoTitle>
    </Anchor>
  );
};

export default HeaderLogo;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

const LogoImg = styled.img`
  background-color: #0467e6;
`;

const LogoTitle = styled.div`
  text-align: center;
  color: #fff;
`;
