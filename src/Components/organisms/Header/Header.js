import React from "react";
import styled from "styled-components";
import HeaderLogo from "../../Molecules/HeaderLogo";
import HeaderMenu from "../../Molecules/HeaderMenu";
import HeaderSignin from "../../Molecules/HeaderSignin";

function Header() {
  return (
    <Wrapper>
      <Nav>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSignin />
      </Nav>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  width: 100%;
  background-color: #0467e6;
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  background-color: #0467e6;
  height: 84px;
  min-width: 1030px;
  max-width: 1280px;
  margin: 0 auto;
`;
