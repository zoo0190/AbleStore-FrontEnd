import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Menu, Dropdown, Tag, Modal, Button } from "antd";
import { DownOutlined, DashOutlined } from "@ant-design/icons";
import LikeDisLike from "./LikeDisLike";

function View({ userData, commentUserData }) {
  let { id } = useParams();
  let history = useHistory();
  let [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUser] = useState([]);
  const [authId, setAuthId] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const getAuthrizon = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const result = await axios.get("");
      setAuthId(result);
    }
  };

  const getView = async () => {
    fetch("http://127.0.0.1:8000/community/categories/1/boards/4")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    getAuthrizon();
    getView();
  }, []);

  const handleOk = async () => {
    setIsModalVisible(false);
    await axios.delete(`http://172.30.1.51:8000/community/categories/1/boards/3`, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const gotoEdit = () => {
    history.push(`/user/edit/${id}`);
  };

  const { title, content, nickname, code, created_at, tag } = userData;

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

  return (
    <ViewContainer>
      <Header>
        <Tag>{tag}</Tag>
        <TitleContainer>
          <Title>{title}</Title>
          <LikeDisLike userId={userData.id} />
        </TitleContainer>
      </Header>
      <Content>
        <ContentHeader>
          <UserInfo>
            <div>
              <span>{nickname}</span>
              <span>{code}</span>
            </div>
            <div>
              <span>{created_at}</span>
            </div>
          </UserInfo>
          <UserSet>
            <Li>{commentUserData.length} Replies</Li>
            <Li> Views</Li>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <DashOutlined />
              </a>
            </Dropdown>
          </UserSet>
        </ContentHeader>
        <ContentBody>{content}</ContentBody>
      </Content>
    </ViewContainer>
  );
}

export default View;

const ViewContainer = styled.div`
  width: 1200px;
  margin: 50px auto;
  height: 220px;
`;
const Header = styled.header`
  margin-bottom: 30px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
  line-height: 34px;
`;
const Like = styled.div``;
const Content = styled.div``;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserSet = styled.ul`
  display: flex;
`;

const Li = styled.li`
  padding-right: 30px;
`;

const UserInfo = styled.div``;

const ContentBody = styled.div`
  margin-top: 20px;
`;
