import React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import styled from "styled-components";
import FooterAnchor from "../../Atoms/FooterAnchor";
import { FacebookFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";

const { Text } = Typography;

const FOOTER_INFO = [
  { id: 1, title: "Terms & Conditions", borderRight: true },
  { id: 2, title: "Privacy", borderRight: true },
  { id: 3, title: "Contact Us", borderRight: false },
];

function Footer() {
  const newDate = new Date();
  const getYear = newDate.getFullYear();

  return (
    <Wrapper>
      <Text style={{ color: "#4c5861", width: "25%" }} type="success">
        Copyright &copy; {getYear} Synology Inc. All rights reserved.
      </Text>
      <FlexContainer>
        <LinkWrapper>
          {FOOTER_INFO.map((item) => {
            return <FooterAnchor key={item.id} item={item} />;
          })}
        </LinkWrapper>
        <IconWrapper>
          Follow us
          <FacebookFilled style={{ fontSize: "13px", marginLeft: "12px" }} />
          <TwitterOutlined style={{ fontSize: "13px", margin: "0 12px" }} />
          <YoutubeFilled style={{ fontSize: "13px" }} />
        </IconWrapper>
      </FlexContainer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  max-width: 1280px;
  min-width: 1030px;
  margin: 10px auto;
  margin-top: auto;
  display: flex;
  font-size: 13px;
  line-height: 1.5;
  padding: 0 15px;
  height: 42px;
  align-items: center;
`;

const FlexContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const LinkWrapper = styled.div`
  font-size: 13px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: #4c5861;
`;
