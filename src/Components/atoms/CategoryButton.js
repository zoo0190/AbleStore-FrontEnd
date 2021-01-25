import React from "react";
import styled from "styled-components";

const CategoryButton = ({ item, goToCategory }) => {
  const handleClick = () => {
    goToCategory(item.id);
  };

  return (
    <Wrapping onClick={handleClick}>
      <Container>
        <ItemImg src={item.imgSrc}></ItemImg>
        <ItemTitle>{item.title}</ItemTitle>
      </Container>
    </Wrapping>
  );
};

export default CategoryButton;

const Wrapping = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin: 9px 0;
  padding: 0 9px;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef3f7;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  padding: 22px 20px;
  height: 100%;
  width: 100%;
`;

const ItemImg = styled.img``;

const ItemTitle = styled.div`
  margin-top: 12px;
  color: black;
`;
