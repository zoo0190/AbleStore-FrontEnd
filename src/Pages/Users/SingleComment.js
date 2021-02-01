import React, { useState, useEffect, useCallback } from "react";
import { Comment, Avatar, Button, Input, Menu, Dropdown, Modal, Tag } from "antd";
import axios from "axios";
import styled from "styled-components";
import { DashOutlined } from "@ant-design/icons";
import { SOLUTION_API, BOARD_USER_API, REPLY_API } from "../../Enum";
import { useHistory, useParams } from "react-router-dom";

function SingleComment({ comment, boardId, setRefreshComment, categoryId, userData }) {
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");
  const nickName = sessionStorage.getItem("USER_NICKNAME");
  const [OpenReply, setOpenReply] = useState(false);
  const [commentVaule, setCommentValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkdSolution, setCheckedSolution] = useState();
  const { CheckableTag } = Tag;
  const [solution, setSolution] = useState(true);
  const history = useHistory();

  const instance = axios.create({
    baseURL: `${REPLY_API}`,
    headers: {
      Authorization: `${TOKEN}`,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setCommentValue("");
    const commentData = {
      content: commentVaule,
    };

    fetch(`${REPLY_API}/${boardId}/comments/${comment.id}/comments`, {
      headers: {
        Authorization: TOKEN,
      },
      method: "POST",
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((res) => setRefreshComment(res));
  };

  const onHadleChange = useCallback(
    (event) => {
      setCommentValue(event.currentTarget.value);
      console.log("onHandleChange");
    },
    [commentVaule],
  );

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
    console.log("onClick");
  };

  const actions = [
    <>
      {comment.reply ? (
        ""
      ) : (
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to">
          Reply to
        </span>
      )}
    </>,
  ];

  const handleOk = async () => {
    setIsModalVisible(false);
    console.log("handleok");

    const commentId = {
      comment_id: comment.id,
    };
    fetch(`${BOARD_USER_API}/community/boards/${boardId}/comments`, {
      headers: {
        Authorization: TOKEN,
      },
      method: "DELETE",
      body: JSON.stringify(commentId),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setRefreshComment(res);
          history.push(`/boardDetail/${categoryId}/${boardId}`);
        }
      });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = () => {
    return (
      <Menu>
        <Menu.Item>
          <Button onClick style={{ border: "none" }}>
            Edit
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button style={{ border: "none" }} onClick={showModal}>
            Delete
          </Button>
          <Modal
            style={{ marginTop: "150px" }}
            visible={isModalVisible}
            cancelText="No"
            okText="Yes"
            onOk={() => handleOk()}
            onCancel={handleCancel}
          >
            <p>Are you sure you want to delete the post?</p>
          </Modal>
        </Menu.Item>
      </Menu>
    );
  };

  const changeChecked = async (e) => {
    setCheckedSolution(true);

    if (+e.target.id === +comment.id) {
      fetch(`${SOLUTION_API}/${boardId}/comments/${comment.id}`, {
        headers: {
          Authorization: TOKEN,
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          setRefreshComment(res);
        });
    } else {
      console.log("end");
    }
    console.log("changeChecke");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };
  const GetSolution = () => {
    if (checkdSolution) {
      return comment.solution ? "Solution" : "";
    }
    return userData.nickname !== comment.nickname ? "Solution" : "";
  };

  return (
    <CommentContainer>
      <CommentInfo>
        <div>
          <span
            style={{
              display: "inline-block",
              marginRight: "10px",
              borderRadius: "50%",
              padding: "12px",
              backgroundColor: "#dadada",
            }}
          >
            {comment.nickname?.split("")[0]}{" "}
          </span>
          <span>{comment?.nickname}</span>
          <span>@{comment?.code}</span>
          <span>{comment.created_at?.split("T")[0]}</span>
        </div>
        <div>
          {nickName === userData?.nickname && TOKEN && userData?.topic === "Question" && (
            <CheckableTag
              id={comment.id}
              onClick={changeChecked}
              checked={comment.solution || checkdSolution ? true : false}
            >
              {userData.nickname !== comment.nickname ? "Solution" : ""}
            </CheckableTag>
          )}

          {nickName === comment?.nickname && TOKEN && (
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <DashOutlined />
              </a>
            </Dropdown>
          )}
        </div>
      </CommentInfo>
      <Comment actions={actions} content={<p>{comment.content}</p>} />

      {OpenReply && (
        <form style={{ display: "flex" }} onSubmit={onSubmit}>
          <textarea
            style={{ width: "100%", borderRadius: "5px" }}
            onChange={onHadleChange}
            value={commentVaule}
            placeholder="코멘트 작성해 주세요"
            onKeyPress={onKeyPress}
          ></textarea>
          <button type="submit" style={{ width: "20%", height: "52px", borderRadius: "5px" }} onClick>
            Submit
          </button>
        </form>
      )}
    </CommentContainer>
  );
}

export default SingleComment;

const CommentContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  padding: 10px;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding-right: 10px;
  }
`;
