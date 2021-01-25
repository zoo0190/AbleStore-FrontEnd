import React from "react";
import styled from "styled-components";

const CardButton = ({ tag, goToTags }) => {
  const handleClickTags = () => {
    goToTags(tag);
  };

  return <Button onClick={handleClickTags}>{tag.name}</Button>;
};

export default CardButton;

const Button = styled.a`
  border-radius: 5px;
  padding: 2px 8px;
  font-size: 12px;
  line-height: 18px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: #4c5861;
  background: #fff;
  border: 1px solid #4c5861;
  vertical-align: middle;
  display: inline-block;
`;
