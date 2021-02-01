import React from "react";
import styled from "styled-components";
import CardButton from "../Atoms/CardButton";
import moment from "moment";
import "antd/dist/antd.css";
import { Avatar } from "antd";

const questionImgPath = "https://community.synology.com/front/img/question.png";
const solvedImgPath = "https://community.synology.com/front/img/solved1.png";

const MainCard = ({ item, goToDetail, goToTags, goToProfile }) => {
  const handleClickDetail = () => {
    goToDetail(item);
  };

  const handleClickProfile = () => {
    goToProfile(item);
  };

  const htmlCode = item.content;

  return (
    <Container>
      <IconWrapper>
        {(() => {
          if (item.topic === "Discussion") {
            return <Icon imgUrl=""></Icon>;
          }
          if (item.topic === "Question" && item.solution === true) {
            return <Icon imgUrl={solvedImgPath}></Icon>;
          }
          if (item.topic === "Question" && item.solution === false) {
            return <Icon imgUrl={questionImgPath}></Icon>;
          }
        })()}
        <Icon></Icon>
      </IconWrapper>
      <CardContentsWrapper>
        <Title onClick={handleClickDetail}>{item.title}</Title>
        <Description>
          {item.coment_last.nickname ? (
            item.coment_last.content
          ) : (
            <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
          )}
        </Description>
        <Info>
          <Category>{item.category}</Category>
          {item.tags.map((tag, idx) => (
            <CardButton goToTags={goToTags} key={idx} tag={tag} />
          ))}
          <CommonStyleWrapper style={{ marginLeft: "12px" }}>
            <Writer>By {item.user_nickname}</Writer>
          </CommonStyleWrapper>
          <CommonStyleWrapper>
            {item.hit} <ThinStyle>Views</ThinStyle>
          </CommonStyleWrapper>
          <CommonStyleWrapper>
            {item.comment_number} <ThinStyle>Replies</ThinStyle>
          </CommonStyleWrapper>
          <CommonStyleWrapper>
            {item.like} <ThinStyle>Likes</ThinStyle>
          </CommonStyleWrapper>
        </Info>
      </CardContentsWrapper>
      <Time>{moment(`${item.created_at}`).fromNow()}</Time>
      <AvatarWrapping onClick={handleClickProfile}>
        <Avatar size={40} style={{ marginRight: "40px", margin: "0 auto" }}>
          {item.coment_last.nickname ? item.coment_last.nickname[0] : item.user_nickname[0]}
        </Avatar>
        <UserName>{item.coment_last.nickname ? item.coment_last.nickname : item.user_nickname}</UserName>
      </AvatarWrapping>
    </Container>
  );
};

export default MainCard;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #d6dfe6;
`;

const IconWrapper = styled.div`
  width: 15px;
  position: absolute;
  left: 0;
  top: 17px;
`;

const Icon = styled.div`
  display: block;
  width: 15px;
  height: 15px;
  background-size: contain;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
`;

const CardContentsWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  padding: 0;
  width: calc(100% - 184px - 260px);
`;

const Title = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0;
  font-weight: 700;
  font-size: 18px;
  max-height: 48px;
  overflow: hidden;
  line-height: 1.3em;
  color: black;
`;

const Description = styled.p`
  margin-bottom: 10px;
  max-height: 38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3em;
  font-weight: 400;
  color: #4c5861;
`;

const Info = styled.div``;

const Category = styled.div`
  display: inline-block;
  vertical-align: middle;
  background: #4c5861;
  color: #fff;
  border-radius: 5px;
  padding: 2px 8px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 1px solid #4c5861;
`;

const CommonStyleWrapper = styled.div`
  margin-right: 16px;
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 5px;
  font-weight: bold;
`;

const Writer = styled.span`
  font-size: 12px;
`;

const ThinStyle = styled.span`
  font-weight: 400;
  line-height: 1.5;
  color: #4c5861;
  font-size: 12px;
`;

const Time = styled.div`
  text-align: center;
  width: 184px;
  padding: 0 20px;
  font-size: 12px;
`;

const AvatarWrapping = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 126px;
`;

const UserName = styled.div`
  font-weight: 600;
  color: black;
  margin-top: 6px;
`;
