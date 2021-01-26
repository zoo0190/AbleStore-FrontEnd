import React from "react";
import styled from "styled-components";
import HeaderLogo from "../../Molecules/HeaderLogo";
import HeaderMenu from "../../Molecules/HeaderMenu";
import HeaderSignin from "../../Molecules/HeaderSignin";
import "antd/dist/antd.css";
import { Avatar, Menu, Dropdown, Button } from "antd";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const userId = sessionStorage.getItem("USER_ID");

  const menu = (
    <Menu style={{ minHeight: "100px", width: "234px", padding: "0 20px" }}>
      <Menu.Item
        key="0"
        style={{ padding: "20px 12px", fontWeight: "700", cursor: "unset", backgroundColor: "transparent" }}
      >
        <strong>{sessionStorage.getItem("USER_NICKNAME")}</strong>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={`/user/${userId}/profile/topic`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/setting/profile">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="#">Synology Account</Link>
      </Menu.Item>
      <Menu.Item key="4" style={{ backgroundColor: "transparent", cursor: "unset" }}>
        <Button
          onClick={() => {
            sessionStorage.removeItem("ACCESS_TOKEN");
            sessionStorage.removeItem("USER_NICKNAME");
            sessionStorage.removeItem("USER_ID");
            history.push("/");
          }}
          type="primary"
          style={{ margin: "10px 0" }}
        >
          sign out
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <Nav>
        <HeaderLogo />
        <HeaderMenu />
        {sessionStorage.getItem("ACCESS_TOKEN") ? (
          <SuccessWrapper>
            <PositionContainer>
              <MessageIcon onClick={() => history.push("/private_message/inbox")}></MessageIcon>
              <BellIcon onClick={() => history.push("/notification")}></BellIcon>
              <Dropdown overlay={menu} trigger={"click"}>
                <Avatar size={40} style={{ marginRight: "40px", cursor: "pointer" }}>
                  {sessionStorage.getItem("USER_NICKNAME")[0]}
                </Avatar>
              </Dropdown>
            </PositionContainer>
          </SuccessWrapper>
        ) : (
          <HeaderSignin />
        )}
      </Nav>
    </Wrapper>
  );
}
export default Header;

const Wrapper = styled.header`
  width: 100%;
  background-color: #0467e6;
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  background-color: #0467e6;
  height: 84px;
  min-width: 1030px;
  max-width: 1280px;
  margin: 0 auto;
`;

const SuccessWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PositionContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MessageIcon = styled.div`
  background-image: url("https://community.synology.com/front/img/message@2x.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const BellIcon = styled.div`
  background-image: url("https://community.synology.com/front/img/bell@2x.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
