import React from "react";
import HeaderButton from "../Atoms/HeaderButton";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const CATEOGRY = [
  {
    id: 1,
    title: "NAS",
  },
  {
    id: 2,
    title: "Router",
  },
  {
    id: 3,
    title: "Surveillance",
  },
  {
    id: 4,
    title: "C2",
  },
  {
    id: 17,
    title: "Legacy Forums",
  },
  {
    id: 18,
    title: "Announcement",
  },
];

const HeaderMenu = () => {
  const menu = (
    <Menu
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "850px",
        height: "180px",
        border: "1px solid #d6dfe6",
        padding: "36px",
      }}
    >
      {CATEOGRY.map((item) => {
        return (
          <Menu.Item
            key={item.id}
            style={{
              flex: "0 0 25%",
              maxHeight: "35%",
              maxWidth: "25%",
            }}
          >
            <a href="#">{item.title}</a>
          </Menu.Item>
        );
      })}
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
