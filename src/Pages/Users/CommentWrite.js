import axios from "axios";
import React from "react";
import { useState } from "react";

function CommentWrite({ id, setRfresh }) {
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

    // 뎃글쓴 데이터 post
    // console.log(commentValue);
    fetch(`http://172.30.1.48:8000/community/boards/1/comments`, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
      method: "POST",
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((res) => setRfresh(res));
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
        ></textarea>
        <button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentWrite;
