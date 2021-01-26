import React from "react";
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import styled from "styled-components";
import { Button, Breadcrumb } from "antd";

const CatListTop = () => {
  const history = useHistory();
  const goCreatePost = () => {
    history.push("/categoryPost/1");
  };
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      </Breadcrumb>
      <CatListTopMain>
        <TopTitle> NAS</TopTitle>
        <ButtonSection>
          <CreatePostBtn onClick={goCreatePost}>Create a Post</CreatePostBtn>
        </ButtonSection>
      </CatListTopMain>
    </>
  );
};
export default CatListTop;

const CatListTopMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1.5em 0;
`;

const TopTitle = styled.div`
  font-size: 2.2em;
  font-weight: 700;
`;

const ButtonSection = styled.div`
  /* margin-bottom: 3em; */
  margin-right: 0;
  display: flex;
  right: 0%;
  float: right;
`;

const CreatePostBtn = styled(Button)`
  /* background: blue; */
  color: #0f7afe;
  border: 0px solid;
`;
