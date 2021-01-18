import React from "react";
import styled from "styled-components";
import LoginLayout from "../../Components/Molecules/LoginLayout";

function Login() {
  return (
    <LoginMain>
      <LoginLayout format={loginProps} />
    </LoginMain>
  );
}

export default Login;

const LoginMain = styled.div`
  background: rgba(0, 0, 0, 0.56);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    margin-bottom: 14px;

    .logo {
      margin: 0 auto;
      width: 116px;
      height: 70px;
      background: url("https://account.synology.com/img/logo/logo_gray.svg");
      background-size: 100% 100%;
    }
  }

  h2 {
    margin: 24px 0;
    font-size: 17px;
    text-align: center;
  }
`;

const loginProps = {
  type: "signIn",
  text: "로그인",
  data: [
    {
      type: "email",
      text: "이메일",
    },
    {
      type: "password",
      text: "비밀번호",
    },
  ],
};
