import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SignUpLayout from "../../Components/Molecules/SignUpLayout";

function SignUp() {
  const [accountForm] = useState(signUpProps);
  const history = useHistory();
  const goMain = () => {
    history.push("/");
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    이름: "",
    닉네임: "",
    user_id: "",
    location: "",
  });
  const { 이름, 닉네임, user_id, email, password, location } = inputs;

  const handleIdPasswordInput = (e) => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  return (
    <SignUpMain>
      <SignUpLayout
        format={accountForm}
        goMain={goMain}
        onChange={handleIdPasswordInput}
        value={setInputs}
        location={location}
      />
    </SignUpMain>
  );
}

export default SignUp;

const SignUpMain = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    justify-content: center;
    align-items: center;

    .logo {
      width: 140px;
      height: 70px;
      background: url("https://account.synology.com/img/logo/logo_gray.svg");
      background-size: 100% 100%;
      cursor: pointer;
    }
    .logoText {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      color: #6e7b85;
      font-size: 1.3em;
      height: 70px;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }

  h2 {
    margin: 0 0 24px;
    text-align: center;
    font-size: 1.1em;
    font-weight: normal;
    color: #6e7b85;
  }
`;

const signUpProps = {
  type: "signUp",
  text: "계정 만들기",
  data: [
    {
      id: 1,
      tag: "input",
      field: "이름",
      name: "이름",
      type: "name",
      text: "성함을 입력해주세요*",
    },
    {
      id: 2,
      tag: "input",
      field: "닉네임",
      name: "닉네임",
      type: "nickname",
      text: "별명을 입력해주세요*",
    },
    {
      id: 3,
      tag: "input",
      field: "userId",
      name: "user_id",
      type: "userID",
      text: "user id를 입력해주세요*",
    },
    {
      id: 4,
      tag: "input",
      field: "이메일",
      name: "email",
      type: "email",
      text: "로그인 이메일입니다*",
    },
    {
      id: 5,
      tag: "input",
      field: "비밀번호",
      name: "password",
      type: "password",
      text: "강력한 패스워드를 선택하십시오*",
    },
    {
      id: 6,
      tag: "select",
      field: "위치",
      name: "location",
      type: "location",
      text: "대한민국",
    },
  ],
};
