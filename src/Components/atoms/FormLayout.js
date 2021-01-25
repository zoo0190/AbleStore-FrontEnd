import React from "react";
import styled from "styled-components";

const FormLayout = ({ goMain, signUp, children }) => {
  return (
    <div className="Form">
      <FormHeader>
        <div className="logo" onClick={goMain} />
        {signUp && <div className="logoText">Account</div>}
      </FormHeader>
      {children}
    </div>
  );
};

export default FormLayout;

const FormHeader = styled.header`
  display: flex;
`;
