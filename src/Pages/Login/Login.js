import React, { useState } from "react";
import { useHistory } from "react-router";
import LoginLayout from "../../Components/Molecules/LoginLayout";
import styled from "styled-components";
import{ LOGIN_API } from "../../Enum";

const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function Login() {
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [clicked, setClicked] = useState(false);

  const history = useHistory();

  const goMain = () => {
    history.push("/");
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const handleIdPasswordInput = (e) => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const checkValidation = () => {
    setClicked(true);

    const emailValid = email.match(emailRule);
    const pwValid = password.match(pwRule);
    const inputPass = emailValid && pwValid;

    setCheckEmail(emailValid ? true : false);
    setCheckPassword(pwValid ? true : false);

    inputPass && loginFetch();
  };
  console.log(inputs)
  const loginFetch = () => {
    
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ACCESS_TOKEN) {
          sessionStorage.setItem('ACCESS_TOKEN', res.ACCESS_TOKEN);
          alert("환영합니다");
          console.log(res.ACCESS_TOKEN);
          console.log("input passed");
          history.push({
            pathname: "/",
          });
        } else {
          alert("아이디 혹은 password를 다시 확인해 주세요");
        }
      });
  };

  return (
    <LoginMain>
      <LoginLayout
        format={loginProps}
        goMain={goMain}
        onModify={handleIdPasswordInput}
        value={setInputs}
        setCheckEmail={setCheckEmail}
        setCheckPassword={setCheckPassword}
        checkValidation={checkValidation}
        clicked={clicked}
        checkEmail={checkEmail}
        checkPassword={checkPassword}
      />
    </LoginMain>
  );
}

export default Login;

const LoginMain = styled.div`
  background: #f5f7f9;
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
      cursor: pointer;
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
  text: "로그인 대상 Community",
  data: [
    {
      name: "email",
      type: "email",
      text: "이메일",
      placeholder: "Synology 계정(이메일)",
      warning: "email 형식이 잘못됬습니다",
    },
    {
      name: "password",
      type: "password",
      text: "비밀번호",
      placeholder: "패스워드",
      warning: "비밀번호 형식이 잘못됬습니다",
    },
  ],
};
