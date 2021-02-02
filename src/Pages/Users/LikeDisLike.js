import React, { useState } from "react";
import { Tooltip } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { instance } from "../../Enum";

function LikeDisLike({ likeData, boardId, setRefreshLike }) {
  const onLike = async () => {
    await instance.post(`${boardId}/likes`).then((res) => {
      if ((res.data.MESSAGE = "BOARD_LIKE_CREATE")) {
        setRefreshLike(res);
      }
    });

    // fetch(`${LIKE_API}/community/boards/${boardId}/likes`, {
    //   headers: {
    //     Authorization: TOKEN,
    //   },
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.MESSAGE === "BOARD_LIKE_CREATE") {
    //       setLikeAction("liked");
    //       setRefreshLike(res);
    //     } else {
    //       setRefreshLike(res);
    //       setLikeAction("");
    //     }
    //   });
  };

  return (
    <div>
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <LikeOutlined onClick={onLike} style={{ color: likeData > 0 ? "red" : "black" }} />
        </Tooltip>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{likeData}</span>
      </span>
    </div>
  );
}

export default LikeDisLike;
