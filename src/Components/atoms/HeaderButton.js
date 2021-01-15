import React from "react";
import styled from "styled-components";

const HeaderButton = ({ title }) => {
  return title === "Sign in" ? (
    <SigninButton>{title}</SigninButton>
  ) : (
    <BlogAndSupportButton>{title}</BlogAndSupportButton>
  );
};

export default HeaderButton;

const button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  padding: 30px 15px;
`;

const BlogAndSupportButton = styled(button)``;

const SigninButton = styled(button)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
