import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Menu, Dropdown, Tag, Modal, Button, Breadcrumb } from "antd";
import { DashOutlined } from "@ant-design/icons";
import LikeDisLike from "./LikeDisLike";
import { BOARD_USER_API } from "../../Enum";

function View({ userData, commentUserData, boardId, categoryId, likeData, setRefreshLike }) {
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");
  const NICKNAME = sessionStorage.getItem("USER_NICKNAME");
  let history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    await axios
      .delete(`${BOARD_USER_API}/community/categories/${categoryId}/boards/${boardId}`, {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((res) => {
        if (res) {
          history.push("/forum/1");
        }
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const gotoEdit = () => {
    history.push(`/user/edit/${categoryId}/${boardId}`);
  };

  const { title, content, nickname, code, created_at, tags } = userData;

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={gotoEdit} style={{ border: "none" }}>
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

      <Menu.Item>
        <Button onClick={gotoEdit} style={{ border: "none" }}>
          report
        </Button>
      </Menu.Item>
    </Menu>
  );
  const goToPrev = () => {
    history.push(`/forum/${categoryId}`);
  };
  const htmlCode = content;

  return (
    <ViewContainer>
      <Breadcrumb separator=">" style={{ marginTop: "45px", marginBottom: "25px" }}>
        <Breadcrumb.Item style={{ cursor: "pointer" }}>
          <Link to="/" style={{ color: "4c5861", fontSize: "12px" }}>
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: "pointer" }} onClick={goToPrev}>
          <Link style={{ color: "4c5861", fontSize: "12px" }}> Nas</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{userData.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Header>
        {tags?.map((tag) => {
          return (
            <Tag
              style={{
                borderRadius: "5px",
                padding: "2px 8px",
                fontSize: "12px",
                lineHeight: "18px",
                marginRight: "5px",
                marginBottom: "5px",
                color: "#4c5861",
                backgroundColor: "#fff",
                border: "1px solid #4c5861",
                verticalAlign: "middle",
                display: "inline-block",
              }}
            >
              {tag}
            </Tag>
          );
        })}
        <TitleContainer>
          <Title>{title}</Title>
          <LikeDisLike
            style={{ width: "50px" }}
            boardId={boardId}
            categoryId={categoryId}
            likeData={likeData}
            setRefreshLike={setRefreshLike}
          />
        </TitleContainer>
      </Header>
      <Content>
        <ContentHeader>
          <UserInfo>
            <div className="userInfo">
              <span className="nickname">{nickname?.split("")[0]} </span>
            </div>
            <div className="year">
              <span>
                <span style={{ fontWeight: "900" }}>{nickname} </span>
                <span>@{code}</span>
              </span>

              <span>{created_at?.split("T")[0]}</span>
            </div>
          </UserInfo>
          <UserSet>
            <Li>{commentUserData.length} Replies</Li>
            <Li> {userData.hit} Views</Li>
            <Li>
              {userData.nickname === NICKNAME && (
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <DashOutlined />
                  </a>
                </Dropdown>
              )}
            </Li>
          </UserSet>
        </ContentHeader>
        <ContentBody>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
        </ContentBody>
      </Content>
    </ViewContainer>
  );
}

export default View;

const ViewContainer = styled.div`
  height: 650px;
`;
const Header = styled.header`
  margin-bottom: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-weight: 600;
  color: #000;
  margin: 3px auto 0;
  font-size: 24px;
  line-height: 34px;
  width: calc(100% - 50px);
`;

const Content = styled.div``;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const UserSet = styled.ul`
  display: flex;
`;

const Li = styled.li`
  margin-left: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  .nickname {
    display: inline-block;
    border-radius: 50%;
    background-color: rgb(183, 194, 206);
    padding: 12px;
    margin-right: 10px;
    color: #fff;
  }

  .year {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
  }
`;

const ContentBody = styled.div``;
