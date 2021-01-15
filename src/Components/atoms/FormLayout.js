import React from "react";
import styled from "styled-components";

const FormLayout = (props) => {
  return (
    <div className="Form">
      <FormHeader>
        <div className="logo" onClick={props.goMain} />
        <div className="logoText">Account</div>
      </FormHeader>
      {props.children}
    </div>
  );
};

export default FormLayout;

const FormHeader = styled.header`
  display: flex;
`;
