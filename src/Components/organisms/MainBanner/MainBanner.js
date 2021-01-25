import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { RightOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import MainBannerTitle from "../../Atoms/MainBannerTitle";
import MainBannerDescriptions from "../../Molecules/MainBannerDescriptions";

const MainBanner = () => {
  const { Search } = Input;
  return (
    <Wrapper>
      <MainBannerTitle />
      <Search style={{ width: 600, height: "40px", marginBottom: "26px", marginLeft: "15px" }} />
      <MainBannerDescriptions />
      <Button
        style={{
          background: "linear-gradient(to right, #2e52fe 0%, #58dcf9 100%)",
          borderRadius: "6px",
          outline: "none",
          height: "38px",
          border: "none",
          padding: "7px 20px",
          lineHeight: "24px",
          fontSize: "18px",
          color: "#fff",
          marginTop: "47px",
          marginBottom: "73px",
          marginLeft: "15px",
        }}
        type="primary"
      >
        DSM 7.0 Beta
        <RightOutlined />
      </Button>
    </Wrapper>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  background-image: url("https://community.synology.com/front/img/banner_img_201904.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) 0px;
  min-height: 374px;
  background-size: 365px 351px;
`;
