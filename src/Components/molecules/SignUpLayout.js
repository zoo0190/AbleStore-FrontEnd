import React from "react";
import styled from "styled-components";
import FormLayout from "../Atoms/FormLayout";
import InputComp from "../Atoms/Input";
import { Select } from "antd";
import { COUNTRY } from "../../../src/Enum";
import "antd/dist/antd.css";

const { Option } = Select;

const SignUpLayout = ({ format, goMain, onChange, inputStatus }) => {
  const handleChange = (e) => {
    onChange({ name: "location", value: String(e) });
  };
  return (
    <SignUpLMain>
      <FormLayout goMain={goMain}>
        <h2>{format.text}</h2>
        <div>
          {format.data.map((input, idx) =>
            input.tag === "input" ? (
              <InputDivWrap key={idx}>
                <InputDiv>
                  <FieldName>{input.type}</FieldName>
                  <InputComp
                    key={input.id}
                    type={input.type}
                    name={input.name}
                    placeholder={input.text}
                    onChange={onChange}
                    value={input.value}
                    validation={input.validation}
                  />
                </InputDiv>
                <InputWarn
                  key={idx}
                  status={inputStatus.status[idx].statusField.toString()}
                >
                  {inputStatus.status[idx].message}
                </InputWarn>
              </InputDivWrap>
            ) : (
              <InputDivWrap key={idx}>
                <InputDiv>
                  <FieldName>{input.type}</FieldName>
                  <Select
                    className="ant-select-selection"
                    name={input.name}
                    defaultValue={input.text}
                    onChange={handleChange}
                    style={{ border: "0px", width: "64.5%", fontSize: "0.8em" }}
                  >
                    {COUNTRY.country.map((el, id) => (
                      <Option key={id} value={el.nation}>
                        {el.nation}
                      </Option>
                    ))}
                  </Select>
                </InputDiv>
                <InputWarn
                  key={idx}
                  status={inputStatus.status[idx].statusField.toString()}
                >
                  {inputStatus.status[idx].message}
                </InputWarn>
              </InputDivWrap>
            ),
          )}
        </div>
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
const InputDivWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1em 0;
`;
const InputWarn = styled.div`
  padding-left: 20%;
  font-size: 0.1em;
  color: red;
  opacity: ${(props) => (props.status === "false" ? "1" : "0")};
`;
const FieldName = styled.div`
  text-align: right;
  width: 20%;
  font-size: 0.1em;
  padding-right: 5em;
`;
