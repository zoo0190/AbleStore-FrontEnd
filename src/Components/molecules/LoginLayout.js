import React, { useState } from "react";
import FormLayout from "../Atoms/FormLayout";
import styled from "styled-components";
import { Input, Button } from "antd";

const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const LoginLayout = ({
  format,
  goMain,
  onModify,
  setCheckEmail,
  setCheckPassword,
  clicked,
  checkValidation,
  checkEmail,
  checkPassword,
}) => {
  const [inputText, setInput] = useState({ value: "" });

  const pushOnChange = (e) => {
    const { value, name } = e.target;
    onModify({ value: value, name: name });
    setInput({ value: value });
    if (clicked && name === "email") {
      const emailValid = value.match(emailRule);
      setCheckEmail(emailValid ? true : false);
    }
    if (clicked && name === "password") {
      const pwValid = value.match(pwRule);
      setCheckPassword(pwValid ? true : false);
    }
  };
  return (
    <LoginLMain>
      <FormLayout>
        <h2>{format.text}</h2>
        <InputButtonWrapper>
          <SetCenterWrapper>
            <LoginInputTop
              name={format.data[0].name}
              type={format.data[0].type}
              placeholder={format.data[0].placeholder}
              onChange={pushOnChange}
            />
          </SetCenterWrapper>
          <InputWarn status={checkEmail}>{format.data[0].warning}</InputWarn>
          <SetCenterWrapper>
            <LoginInputBottom
              name={format.data[1].name}
              type={format.data[1].type}
              placeholder={format.data[1].placeholder}
              onChange={pushOnChange}
            />
          </SetCenterWrapper>
          <InputWarn status={checkPassword}>{format.data[1].warning}</InputWarn>
          <SetCenterWrapper>
            <LoginButton type="primary" onClick={checkValidation}>
              로그인
            </LoginButton>
          </SetCenterWrapper>
        </InputButtonWrapper>
      </FormLayout>
    </LoginLMain>
  );
};
export default LoginLayout;

const LoginLMain = styled.div`
  width: 375px;
  height: 28em;
  padding: 32px 20px 30px;
  margin: 0 100px;
  background: white;
  border-radius: 6px;
  h2 {
    font-weight: normal;
    font-size: 0.8em;
  }
  p {
    margin-top: 20px;
    text-align: center;
    color: rgb(140, 140, 140);

    span {
      color: rgb(255, 47, 110);
    }
  }
`;

const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SetCenterWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LoginInputTop = styled(Input)`
  z-index: 2;
  width: 70%;
  height: 2.4em;
  margin-top: 1.5em;
`;
const LoginInputBottom = styled(Input)`
  position: relative;
  z-index: 1;
  width: 70%;
  height: 2.4em;
`;
const LoginButton = styled(Button)`
  z-index: 1;
  width: 70%;
  height: 2.5em;
  margin-top: 1.5em;
  background-color: #0f7afe;
`;

const InputWarn = styled.div`
  margin-left: 31em;
  font-size: 0.1em;
  color: red;
  padding: 1% 0;
  opacity: ${(props) => (props.status === false ? "1" : "0")};
`;
