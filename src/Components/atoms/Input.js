import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";

const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function InputComp({
  type,
  placeholder,
  onChange,
  name,
  setCheckName,
  setCheckNickName,
  setCheckUserId,
  setCheckEmail,
  setCheckPassword,
  clicked,
}) {
  const [inputText, setInput] = useState({ value: "" });

  const pushOnChange = (e) => {
    const { value, name } = e.target;
    onChange({ value: value, name: name });
    setInput({ value: value });

    if (clicked && name === "name") {
      const nameValid = value.length > 0;
      setCheckName(nameValid ? true : false);
    }
    if (clicked && name === "nickName") {
      const nickNameValid = value.length > 0;
      setCheckNickName(nickNameValid ? true : false);
    }
    if (clicked && name === "userId") {
      const userIdValid = value.length > 0;
      setCheckUserId(userIdValid ? true : false);
    }
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
    <div className="Input">
      <InputWrapper>
        <InputField name={name} type={type} placeholder={placeholder} onChange={pushOnChange} value={inputText.value} />
      </InputWrapper>
    </div>
  );
}

export default InputComp;

const InputWrapper = styled.div`
  width: 100%;
`;

const InputField = styled(Input)`
  background: #f5f7f9;
  position: relative;
  border: 0px;
  width: 240%;
  height: 3em;
  font-size: 0.8em;
`;
