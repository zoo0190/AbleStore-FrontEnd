import React, { useState } from "react";
import { Tooltip } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { LIKE_API } from "../../Enum";

function LikeDisLike({ likeData, boardId, setRefreshLike }) {
  const [likeAction, setLikeAction] = useState("");
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");

  const onLike = () => {
    fetch(`${LIKE_API}/community/boards/${boardId}/likes`, {
      headers: {
        Authorization: TOKEN,
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
