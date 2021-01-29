import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentWrite from "./CommentWrite";
import SingleComment from "./SingleComment";
import CommentReply from "./CommentReply";
import styled from "styled-components";

function CommentView({ boardId, categoryId, setRefreshComment, userData, commentUserData }) {
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");

  return (
    <>
      {commentUserData &&
        commentUserData.map((comment, index) => {
          return (
            !comment.reply && (
              <>
                <SingleComment
                  commentId={comment.id}
                  boardId={boardId}
                  comment={comment}
                  setRefreshComment={setRefreshComment}
                  reply={comment.reply}
                  parentCommentId={comment.id}
                  categoryId={categoryId}
                  userData={userData}
                />
                <CommentReply
                  parentCommentId={comment.id}
                  boardId={boardId}
                  comment={comment}
                  commentUserData={commentUserData}
                  setRefreshComment={setRefreshComment}
                  categoryId={categoryId}
                />
              </>
            )
          );
        })}

      {TOKEN && <CommentWrite boardId={boardId} setRefreshComment={setRefreshComment} categoryId={categoryId} />}
    </>
  );
}

export default CommentView;
