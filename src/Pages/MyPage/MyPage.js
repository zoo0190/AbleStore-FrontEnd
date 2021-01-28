import React, { useState } from "react";
import Header from "../../Components/Organisms/Header/Header";
import styled from "styled-components";
import CardCollection from "../../Components/Molecules/CardCollection";
import { useHistory, useParams } from "react-router";
import { MY_PAGE } from "../../Enum";
//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.aU6ChK-2f2V_6DQaLKkpsWOS4742sIC_DjQ801RT2b4"
function MyPage() {
  const history = useHistory();
  const [myData, setMyData] = useState([]);
  const [myPostData, setMyPostData] = useState([]);
  const myPageInfo = useParams();

  console.log(myPageInfo.avatarId);

  const currentToken = sessionStorage.getItem("ACCESS_TOKEN");

  React.useEffect(() => {
    fetch(`${MY_PAGE}${myPageInfo.avatarId}/profile`, {
      method: "GET",
      headers: {
        Authorization: currentToken,
      },
    })
      .then((res) => res.json())
      .then((res) => setMyData(res.user_info));
  }, []);

  console.log(myData);

  React.useEffect(() => {
    fetch(`${MY_PAGE}${myPageInfo.avatarId}/profile`, {
      method: "GET",
      headers: {
        Authorization: currentToken,
      },
    })
      .then((res) => res.json())
      .then((res) => setMyPostData(res.context));
  }, [setMyPostData]);

  const showAlert = () => {
    alert("please login");
    history.push("/login");
  };

  return (
    <>
      {!myData ? (
        <div alert={showAlert()}></div>
      ) : (
        <>
          <Header />
          <MyPageWrapper>
            <MyPageTop>
              <TopProfile>
                <ProfileCircle>{myData.user_nickname && myData.user_nickname.charAt(0)}</ProfileCircle>
                <ProfileUserName>{myData.user_nickname}</ProfileUserName>
                <ProfileNickName>{myData.user_code}</ProfileNickName>
              </TopProfile>
              <TopRank>
                <img alt="rankimage" src="https://community.synology.com/front/img/level/newbie.png"></img>
                <RankTitle>Newbie</RankTitle>
                <RankUnderLine></RankUnderLine>
              </TopRank>
              <TopPostNumber>
                <PostCount>{myData.board_count}</PostCount>
                <PostText>Posts created</PostText>
              </TopPostNumber>
            </MyPageTop>
            <MyPageMain>
              <MyPageMainTitle>Posts</MyPageMainTitle>
              <MyPageMainPost>
                <CardCollection fromMyPage="0" categoryData={myPostData} />
              </MyPageMainPost>
            </MyPageMain>
          </MyPageWrapper>
        </>
      )}
    </>
  );
}

export default MyPage;

const MyPageWrapper = styled.div`
  width: 80%;
  max-width: 1280px;
  min-width: 1030px;
  margin: 0 auto;
  /* height: 100%; */
  padding: 1em 1em;
`;
const MyPageTop = styled.div`
  display: flex;
  width: 100%;
  height: 10em;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 5.5em;
`;
const TopProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  border-right: 1px solid lightgrey;
`;
const ProfileCircle = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: lightgrey;
  margin: 0.4em 0.4em;
  padding: 1.8em 1.8em;
  font-size: 1.2em;
  font-weight: 600;
  color: white;
`;
const ProfileUserName = styled.div`
  font-size: 1.4em;
`;

const ProfileNickName = styled.div`
  font-size: 1em;
  color: grey;
`;

const TopRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  border-right: 1px solid lightgrey;
`;

const RankTitle = styled.div`
  margin-bottom: 0.5em;
`;

const RankUnderLine = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgrey;
`;

const TopPostNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  border-right: 1px solid lightgrey;
`;

const PostCount = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const PostText = styled.div`
  font-size: 1.2em;
  font-weight: 300;
`;

const MyPageMain = styled.div`
  width: 100%;
`;

const MyPageMainTitle = styled.div`
  margin-bottom: 0.5em;
  border-bottom: 1px solid lightgrey;
  font-size: 2em;
  font-weight: 300;
`;
const MyPageMainPost = styled.div`
  height: auto;
  border-bottom: 1px solid lightgrey;
`;
