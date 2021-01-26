import React, { useState } from "react";
import { Tooltip } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { LIKE_API } from "../../Enum";

function LikeDisLike({ likeData, boardId, setRefreshLike }) {
  const [likeAction, setLikeAction] = useState("");

  const onLike = () => {
    fetch(`${LIKE_API}/community/boards/${boardId}/likes`, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "BOARD_LIKE_CREATE") {
          setLikeAction("liked");
          setRefreshLike(res);
        } else {
          setRefreshLike(res);
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
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{likeData}</span>
      </span>
    </div>
  );
}

export default LikeDisLike;
