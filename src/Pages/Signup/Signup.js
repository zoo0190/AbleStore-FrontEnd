import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SignUpLayout from "../../Components/Molecules/SignUpLayout";
import { Button } from "antd";
import { SIGN_UP_API } from "../../Enum";
//test123@test.com
//123123qweqwe

const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function SignUp() {
  const [accountForm] = useState(signUpProps);
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [checkName, setCheckName] = useState(true);
  const [checkNickName, setCheckNickName] = useState(true);
  const [checkUserId, setCheckUserId] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkLocation, setCheckLocation] = useState(true);

  const goMain = () => {
    history.push("/");
  };

  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
    userId: "",
    email: "",
    password: "",
    location: "",
  });

  const { name, nickName, userId, email, password, location } = inputs;

  const inputStatus = {
    status: [
      {
        id: 0,
        statusField: checkName,
        message: "이 필드는 필수 필드입니다.",
      },
      {
        id: 1,
        statusField: checkNickName,
        message: "이 필드는 필수 필드입니다.",
      },
      {
        id: 2,
        statusField: checkUserId,
        message: "이 필드는 필수 필드입니다.",
      },
      {
        id: 3,
        statusField: checkEmail,
        message: "올바른 이메일 주소를 입력하십시오.",
      },
      {
        id: 4,
        statusField: checkPassword,
        message: "패스워드가 잘못됬습니다.(숫자와 문자 조합 최소 9자) ",
      },
      {
        id: 5,
        statusField: checkLocation,
        message: "위치를 선택하십시오. ",
      },
    ],
  };

  const handleIdPasswordInput = (e) => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };
  const checkValidation = () => {
    setClicked(true);

    const nameValid = name.length > 0;
    const nickNameValid = nickName.length > 0;
    const userIdValid = userId.length > 0;
    const emailValid = email.match(emailRule);
    const pwValid = password.match(pwRule);
    const locationValid = location;
    const inputPass = nameValid && nickNameValid && userIdValid && emailValid && pwValid && locationValid;

    setCheckName(nameValid ? true : false);
    setCheckNickName(nickNameValid ? true : false);
    setCheckUserId(userIdValid ? true : false);
    setCheckEmail(emailValid ? true : false);
    setCheckPassword(pwValid ? true : false);
    setCheckLocation(locationValid ? true : false);

    inputPass && signInFetch();
  };

  const signInFetch = () => {
    fetch(SIGN_UP_API, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        nickname: nickName,
        code: userId,
        email: email,
        password: password,
        country: location,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          alert("환영합니다");
          console.log("input passed");
          history.push({
            pathname: "/",
          });
        } else if (res.MESSAGE === "USER_EXIST") {
          alert("이미 등록된 이메일입니다");
        } else {
          alert("아이디 혹은 password를 확인해 주세요");
        }
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
        inputStatus={inputStatus}
        setCheckName={setCheckName}
        setCheckNickName={setCheckNickName}
        setCheckUserId={setCheckUserId}
        setCheckEmail={setCheckEmail}
        setCheckPassword={setCheckPassword}
        setCheckLocation={setCheckLocation}
        clicked={clicked}
      />
      <ButtonDiv>
        <SignUpBtn type="primary" onClick={checkValidation}>
          회원가입
        </SignUpBtn>
      </ButtonDiv>
    </SignUpMain>
  );
}

export default SignUp;

const SignUpMain = styled.div`
  position: relative;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

const ButtonDiv = styled.div`
  display: flex;
  bottom: 10%;
`;
const SignUpBtn = styled(Button)`
  width: 11em;
`;
const signUpProps = {
  type: "signUp",
  text: "계정 만들기",
  data: [
    {
      id: 0,
      tag: "input",
      name: "name",
      type: "name",
      text: "성함을 입력해주세요*",
    },
    {
      id: 1,
      tag: "input",
      name: "nickName",
      type: "nickname",
      text: "별명을 입력해주세요*",
    },
    {
      id: 2,
      tag: "input",
      name: "userId",
      type: "userID",
      text: "user id를 입력해주세요*",
    },
    {
      id: 3,
      tag: "input",
      name: "email",
      type: "email",
      text: "로그인 이메일입니다*",
    },
    {
      id: 4,
      tag: "input",
      name: "password",
      type: "password",
      text: "강력한 패스워드를 선택하십시오*",
    },
    {
      id: 5,
      tag: "select",
      name: "location",
      type: "location",
      text: "위치를 선택하십시오",
    },
  ],
};
