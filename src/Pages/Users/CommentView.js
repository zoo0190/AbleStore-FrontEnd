import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentWrite from "./CommentWrite";
import SingleComment from "./SingleComment";
import CommentReply from "./CommentReply";
import styled from "styled-components";

function CommentView({ boardId, categoryId, setRefreshComment, setRfresh, commentUserData }) {
  const getClick = (e) => {
    console.log(e);
  };

  return (
    <>
      {/* {commentUserData &&
        commentUserData.map((comment, index) => {
          !comment.responseTo && (
            <>
              <SingleComment refresh={refresh} comment={comment} postId={postId} />
              <CommentReply parentCommentId={commentId} postId={postId} commentUserData={commentUserData} />
            </>
          );
        })} */}

      {commentUserData &&
        commentUserData.map((comment, index) => (
          <SingleComment commentId={comment.id} comment={comment} onClick={getClick} />
        ))}

      <CommentWrite boardId={boardId} setRefreshComment={setRefreshComment} categoryId={categoryId} />
    </>
  );
}

export default CommentView;
