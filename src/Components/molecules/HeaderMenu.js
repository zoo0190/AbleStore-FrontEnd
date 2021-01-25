import React from "react";
import HeaderButton from "../Atoms/HeaderButton";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const HeaderMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#">123</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">456</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">789</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <MenuItems>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a style={{ color: "white", padding: "30px 15px" }}>Categories</a>
      </Dropdown>
      <HeaderButton title="Blog" />
      <HeaderButton title="Support" />
    </MenuItems>
  );
};

export default HeaderMenu;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;
