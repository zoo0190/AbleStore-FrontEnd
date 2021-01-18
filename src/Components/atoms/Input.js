import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

function InputComp({ type, placeholder, onChange, name }) {
  const [inputText, setInput] = useState({ value: "" });

  const pushOnChange = (e) => {
    const { value, name } = e.target;
    onChange({ value: value, name: name });
    setInput({ value: value });
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
  border: 0px;
  width: 240%;
  height: 3em;
  font-size: 0.8em;
`;
