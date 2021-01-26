import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const CatListCard = ({ cardData, fromMyPage }) => {
  const moment = require("moment");
  const history = useHistory();
  const postClick = () => {
    // history.push("");
    // console.log("post clicked");
  };
  
  return (
    <CatListCardWrapper onClick={postClick}>
      <CardLeft>
        <LeftTop>{cardData.title}</LeftTop>
        <LeftMiddle>{cardData.comment_number === 0 ? cardData.content : cardData.coment_last.content}</LeftMiddle>
        <LeftBottom>
          {cardData.tags.map((el, id) => {
            return <LftBtmTags key={id}>{el.name}</LftBtmTags>;
          })}
          <LftBtmAuthor>By {cardData.user_nickname}</LftBtmAuthor>
          <LftBtmRightView> {cardData.hit} Views</LftBtmRightView>
          <LftBtmRightReply> {cardData.comment_number} Replies</LftBtmRightReply>
          <LftBtmRightLike> {cardData.like} Likes</LftBtmRightLike>
        </LeftBottom>
      </CardLeft>
      <CardRight>
        {!fromMyPage && (
          <RightProfile>
            {cardData.comment_number === 0
              ? cardData.user_nickname.slice(0, 1)
              : cardData.coment_last.nickname.slice(0, 1)}
          </RightProfile>
        )}
        {!fromMyPage && (
          <RightUserName>
            {!fromMyPage && (cardData.comment_number === 0 ? cardData.user_nickname : cardData.coment_last.nickname)}
          </RightUserName>
        )}
        <RightDate>{moment(cardData.created_at).fromNow()}</RightDate>
      </CardRight>
    </CatListCardWrapper>
  );
};
export default CatListCard;

const CatListCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 8em;
  cursor: pointer;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1em;
  width: 88%;
  height: 100%;
`;

const LeftTop = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.4em;
`;
const LeftMiddle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
  margin-bottom: 0.4em;
  font-size: 0.9em;
`;
const LeftBottom = styled.div`
  display: flex;
`;
const LftBtmTags = styled.span`
  border: 1px solid grey;
  border-radius: 8%;
  padding: 0.5em 0.5em;
  margin-right: 0.5em;
  font-size: 0.7em;
  color: grey;
`;
const LftBtmAuthor = styled.span`
  padding: 0.5em 0.5em;
  margin-right: 0.5em;
  font-size: 0.7em;
  font-weight: bold;
`;

const LftBtmRightView = styled.span`
  padding: 0.5em 0.5em;
  margin-right: 0.5em;
  font-size: 0.7em;
`;

const LftBtmRightReply = styled.span`
  padding: 0.5em 0.5em;
  margin-right: 0.5em;
  font-size: 0.7em;
`;

const LftBtmRightLike = styled.span`
  padding: 0.5em 0.5em;
  margin-right: 0.5em;
  font-size: 0.7em;
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 100%;
`;

const RightProfile = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: lightgrey;
  margin: 0.2em 0;
  padding: 0.5em 0.85em;
  font-size: 1.2em;
  font-weight: 600;
  color: white;
`;

const RightUserName = styled.div`
  margin: 0.2em 0;
  font-weight: bold;
  font-size: 0.9em;
`;

const RightDate = styled.div`
  margin: 0.2em 0;
  font-size: 0.9em;
`;
