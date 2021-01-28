import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import CommentWrite from "./CommentWrite";

function CommentReply({ refresh, comment, categoryId, boardId, parentCommentId, commentUserData, setRefreshComment }) {
  const [commetNumber, setCommentNumber] = useState(0);
  const [openReplyComments, setOpenReplyComments] = useState(false);
  useEffect(() => {
    let commentNumber = 0;

    commentUserData.map((comment) => {
      if (comment.reply === parentCommentId) {
        commentNumber++;
      }
      setCommentNumber(commentNumber);
    });
  }, [commentUserData]);

  const onHandleChange = () => {
    setOpenReplyComments(!openReplyComments);
  };

  const renderReplyComment = () =>
    commentUserData.map((comment, index) => (
      <>
        {comment.reply === parentCommentId && (
          <div style={{ width: "80%", marginLeft: "40px" }}>
            <SingleComment
              commentId={comment.id}
              boardId={boardId}
              comment={comment}
              setRefreshComment={setRefreshComment}
              reply={comment.reply}
              parentCommentI={parentCommentId}
            />
            <CommentReply
              parentCommentId={comment.id}
              boardId={boardId}
              comment={comment}
              commentUserData={commentUserData}
              setRefreshComment={setRefreshComment}
              categoryId={categoryId}
            />
          </div>
        )}
      </>
    ));

  return (
    <div>
      {commetNumber > 0 && (
        <p
          style={{ cursor: "pointer", fontSize: "14px", marginBottom: "10px", color: "gray" }}
          onClick={onHandleChange}
        >
          View {commetNumber} more comment(s)
        </p>
      )}
      {openReplyComments && renderReplyComment()}
    </div>
  );
}

export default CommentReply;
