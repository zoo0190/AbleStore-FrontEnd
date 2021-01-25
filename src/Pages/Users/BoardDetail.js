import React, { useEffect, useState } from "react";
import View from "./View";
import CommentView from "./CommentView";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

function BoardDetail() {
  const { categoryId, postId } = useParams();
  const [userData, setUserData] = useState([]);
  const [commentUserData, setCommentUserData] = useState([]);
  const [refresh, setRfresh] = useState("");
  const getUserData = async () => {
    const result = await axios.get("http://172.30.1.51:8000/community/categories/1/boards/3").then((res) => {
      if (res) {
        setUserData(result.data.CONTEXT[0]);
      } else {
        alert("작성자 정보를 가져오길 실패했습니다");
      }
    });
  };

  const getUserCommentData = async () => {
    const result = await axios.get("http://172.30.1.48:8000/community/boards/1/comments");

    // console.log(commentUserData.concat(result.data.CONTEXT));
    setCommentUserData(userData.concat(result.data.CONTEXT));
  };

  console.log(commentUserData);
  useEffect(() => {
    // getUserData();
    getUserCommentData();

    console.log(refresh);
  }, [refresh]);
  // postId = 작성한사람의 id
  // commentUserData = 모든 뎃글의 data
  console.log(commentUserData);
  console.log(refresh);
  return (
    <DetailContainer>
      <View userData={userData} setUserData={setUserData} commentUserData={commentUserData} />
      <CommentView categoryId={categoryId} setRfresh={setRfresh} postId={postId} commentUserData={commentUserData} />
    </DetailContainer>
  );
}

export default BoardDetail;

const DetailContainer = styled.div`
  width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;
