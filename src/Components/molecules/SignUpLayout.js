import React, { useState } from "react";
import styled from "styled-components";
import FormLayout from "../atoms/FormLayout";
import InputComp from "../atoms/Input";
import { Select, Button } from "antd";
import { COUNTRY } from "../../../src/config";
import "antd/dist/antd.css";

const { Option } = Select;

const SignUpLayout = ({ format, goMain, onChange, location }) => {
  const handleChange = (value) => {
    setInput(value);
  };

  const [inputText, setInput] = useState({ value: "" });
  const pushLocation = (e) => {
    const { value, name } = e.target;
    onChange({ value: value, name: name });
    setInput({ value: value });
  };
  const handleClick = () => {};
  return (
    <SignUpLMain>
      <FormLayout goMain={goMain}>
        <h2>{format.text}</h2>
        <div>
          {format.data.map((input, idx) =>
            input.tag === "input" ? (
              <InputDiv key={idx}>
                <FieldName>{input.field}</FieldName>
                <InputComp
                  key={input.id}
                  type={input.type}
                  name={input.name}
                  placeholder={input.text}
                  onChange={onChange}
                  value={input.value}
                />
              </InputDiv>
            ) : (
              <InputDiv key={idx}>
                <FieldName>{input.field}</FieldName>
                <Select
                  className="ant-select-selection"
                  name={input.name}
                  defaultValue={input.text}
                  style={{ border: "0px", width: "64.5%", fontSize: "0.8em" }}
                >
                  {COUNTRY.country.map((el, id) => (
                    <Option key={id} value={el.nation}>
                      {el.nation}
                    </Option>
                  ))}
                </Select>
              </InputDiv>
            ),
          )}
        </div>
        <ButtonDiv>
          <Button type="primary" onClick={handleClick}>
            회원가입
          </Button>
        </ButtonDiv>
      </FormLayout>
    </SignUpLMain>
  );
};
export default SignUpLayout;

const SignUpLMain = styled.div`
  width: 37em;
  height: 600px;
  padding: 32px 20px 48px;
  background: white;
  border-radius: 6px;
  h2 {
    font-weight: 200;
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

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`;

const FieldName = styled.div`
  text-align: right;
  width: 20%;
  font-size: 0.1em;
  padding-right: 5em;
`;

const InputSelect = styled.div`
  .ant-select-selection {
    color: red;
    border: 0px;
    width: 50%;
    height: 3em;
    font-size: 0.8em;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
