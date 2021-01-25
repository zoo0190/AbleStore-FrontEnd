import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import axios from "axios";

function LikeDisLike(userId, commentId) {
  const [likes, setLikes] = useState(0);
  const [likeAction, setLikeAction] = useState("");
  console.log(likes);
  const onLike = () => {
    console.log(likes);
    fetch("http://172.30.1.48:8000/community/boards/4/likes", {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "BOARD_LIKE_CREATE") {
          console.log(likes);
          setLikes(likes + 1);
          setLikeAction("liked");
        } else {
          setLikes(likes - 1);
          setLikeAction("");
        }
      });

    fetch("")
      .then((res) => res.json())
      .then((res) => {});
  };

  return (
    <div>
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <LikeOutlined onClick={onLike} style={{ color: likeAction === "liked" ? "red" : "" }} />
        </Tooltip>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{likes}</span>
      </span>
    </div>
  );
}

export default LikeDisLike;
