import React, { useEffect } from "react";
import SingleComment from "./SingleComment";

function CommentReply({ refresh, comment, postId, commentUserData, parentCommentId }) {
  useEffect(() => {
    let commentNumber = 0;
  }, []);

  // const renderReplyComment = (parentCommentId) => {
  //   commentUserData.map((comment, index) => {
  //     {
  //       comment.responseTo === parentCommentId && (
  //         <>
  //           <SingleComment refresh={refresh} comment={comment} postId={postId} />
  //           <CommentReply parentCommentId={commentId} postId={postId} commentUserData={commentUserData} />
  //         </>
  //       );
  //     }
  //   });
  // };

  return (
    <div>
      {}
      <p> View 1 more (comment)(s)</p>

      {/* {renderReplyComment(parentCommentId)} */}
    </div>
  );
}

export default CommentReply;
