import React, { useState } from "react";
import { Tooltip } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { instance, LOCAL_HOST } from "../../Enum";
import axios from "axios";

function LikeDisLike({ likeData, boardId, setRefreshLike }) {
  const [like, setLikeAction] = useState(0);
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");

  const onLike = async () => {
    await axios({
      url: `${LOCAL_HOST}/community/boards/${boardId}/likes`,
      method: "post",
      headers: {
        Authorization: TOKEN,
      },
    }).then((res) => {
      if (res.data.MESSAGE === "BOARD_LIKE_CREATE") {
        console.log(res);
        setLikeAction("liked");
        setRefreshLike(res);
      } else {
        setLikeAction("");
        setRefreshLike(res);
      }
    });
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
