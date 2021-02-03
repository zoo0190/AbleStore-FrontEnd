import React, { useState, useEffect, useCallback } from "react";
import { Comment, Avatar, Button, Input, Menu, Dropdown, Modal, Tag } from "antd";
import axios from "axios";
import styled from "styled-components";
import { DashOutlined } from "@ant-design/icons";
import { SOLUTION_API, BOARD_USER_API, instance } from "../../Enum";
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setCommentValue("");
    const commentData = {
      content: commentVaule,
    };
    await instance.post(`${boardId}/comments/${comment.id}/comments`, commentData).then((result) => {
      setRefreshComment(result);
    });
  };

  const onHadleChange = useCallback(
    (event) => {
      setCommentValue(event.currentTarget.value);
    },
    [commentVaule],
  );

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
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

    await instance
      .delete(`${boardId}/comments`, {
        data: { comment_id: comment.id },
      })
      .then((res) => {
        setRefreshComment(res);
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
      const result = await instance
        .post(`${boardId}/comments/${comment.id}`)
        .then((result) => setRefreshComment(result));
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <CommentContainer>
      <CommentInfo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              backgroundColor: "rgb(183, 194, 206)",
              color: "#fff",
              padding: "0",
            }}
          >
            {comment.nickname?.split("")[0]}
          </span>
          <span style={{ fontSize: "12px", fontWeight: "900" }}>{comment?.nickname}</span>
          <span style={{ fontSize: "12px" }}>@{comment?.code}</span>
          <span style={{ fontSize: "12px" }}>{comment.created_at?.split("T")[0]}</span>
        </div>
        <div>
          {nickName === userData?.nickname && TOKEN && userData?.topic === "Question" && (
            <CheckableTag
              id={comment.id}
              onClick={changeChecked}
              checked={comment.solution || checkdSolution ? true : false}
            >
              {nickName !== comment.nickname ? "Solution" : ""}
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
      <Comment actions={actions} style={{ lineHeight: "1.4" }} content={<p>{comment.content}</p>} />

      {OpenReply && (
        <form style={{ display: "flex", justifyContent: "space-between" }} onSubmit={onSubmit}>
          <textarea
            style={{
              width: "100%",
              display: "block",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#4c5861",
              backgroundColor: "#fff",
              backgroundClip: "padding-box",
              border: "1px solid #d7dfe6",
              borderRadius: "5px",
              resize: "none",
            }}
            onChange={onHadleChange}
            value={commentVaule}
            placeholder="코멘트 작성해 주세요"
            onKeyPress={onKeyPress}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "0.5rem 3rem",
              borderRadius: "3px",
              backgroundColor: "#0067e6",
              border: "1px solid transparent",
              lineHeight: "1.5",
              borderColor: "#0067e6",
              color: "#fff",
            }}
            onClick
          >
            Submit
          </button>
        </form>
      )}
    </CommentContainer>
  );
}

export default SingleComment;

const CommentContainer = styled.div`
  margin: 10px 0 0 0;
  padding: 20px;
  border: 1px solid #d6dfe6;
  border-radius: 5px;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding-right: 10px;
  }
`;
