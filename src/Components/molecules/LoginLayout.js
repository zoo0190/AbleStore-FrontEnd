import React, { Component } from "react";
import FormLayout from "../Atoms/FormLayout";
import styled from "styled-components";
import { Input, Button } from "antd";

export default class LoginLayout extends Component {
  render() {
    const { format } = this.props;

    return (
      <LoginLMain>
        <FormLayout>
          <h2>{format.text}</h2>
          <div>
            <Input />
          </div>
          <Button type="primary">로그인</Button>
        </FormLayout>
      </LoginLMain>
    );
  }
}

const LoginLMain = styled.div`
  width: 375px;
  padding: 32px 20px 48px;
  background: white;
  border-radius: 6px;

  p {
    margin-top: 20px;
    text-align: center;
    color: rgb(140, 140, 140);

    span {
      color: rgb(255, 47, 110);
    }
  }
`;
