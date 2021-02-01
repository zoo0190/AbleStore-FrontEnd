import axios from "axios";
import React from "react";
import { useState } from "react";
import { BOARD_USER_API } from "../../Enum";

function CommentWrite({ boardId, categoryId, setRefreshComment }) {
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");
  const [commentValue, setCommentValue] = useState("");

  const handleClick = (event) => {
    setCommentValue(event.currentTarget.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setCommentValue("");
    const commentData = {
      content: commentValue,
    };

    fetch(`${BOARD_USER_API}/community/boards/${boardId}/comments`, {
      headers: {
        Authorization: TOKEN,
      },
      method: "POST",
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((res) => setRefreshComment(res));
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div>
      <br />
      <p> Replies </p>
      <hr />
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleClick}
          value={commentValue}
          placeholder="코멘트를 작성해 주세요"
          onKeyPress={onKeyPress}
        ></textarea>
        <button style={{ width: "20%", height: "52px", borderRadius: "5px" }} onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentWrite;
