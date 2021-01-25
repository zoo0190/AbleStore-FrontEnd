import React, { useState } from "react";
import { Comment, Avatar, Button, Input, Menu, Dropdown, Modal } from "antd";
import axios from "axios";
import styled from "styled-components";
import LikeDisLike from "./LikeDisLike";
import { DownOutlined, DashOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function SingleComment({ comment, commentId, refresh }) {
  const [OpenReply, setOpenReply] = useState(false);
  const [commentVaule, setCommentValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      commentList: commentVaule,

      responseTo: comment.id,
      //  데뎃글쓴사람의 id , 모든뎃글리스트들에서 responseTo id가 있는것만 넣게됨
    };

    const result = axios.post("", commentData).then((res) => {
      if (res.data.success) {
        setCommentValue("");
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };

  const onHadleChange = (event) => {
    setCommentValue(event.currentTarget.value);
  };

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
  };

  const actions = [
    <>
      {/* <LikeDisLike commentId={comment.id} /> */}
      <span onClick={onClickReplyOpen} key="comment-basic-reply-to">
        Reply to
      </span>
    </>,
  ];
  const handleOk = async () => {
    console.log();
    setIsModalVisible(false);
    await axios.delete(``, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
    });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const menu = (
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

  return (
    <CommentContainer>
      <CommentInfo>
        <div>
          <span>{comment.nickname}</span>
          <span>@{comment.code}</span>
          <span>{comment.created_at.split("T")[0]}</span>
        </div>

        <div>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              <DashOutlined />
            </a>
          </Dropdown>
        </div>
      </CommentInfo>
      <Comment actions={actions} author avatar={<Avatar src alt />} content={<p>{comment.content}</p>} />
      {OpenReply && (
        <form style={{ display: "flex" }} onSubmit={onSubmit}>
          <textarea
            style={{ width: "100%", borderRadius: "5px" }}
            onChange={onHadleChange}
            value={commentVaule}
            placeholder="코멘트 작성해 주세요"
          ></textarea>
          <button style={{ width: "20%", height: "52px" }} onClick>
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
  padding: 20px;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding-right: 10px;
  }
`;
