import React from "react";
import styled from "styled-components";

const ItemTypeB = ({ item }) => (
  <Wrapping>
    <Container>
      <ItemImg src={item.imgSrc}></ItemImg>
      <ItemTitle>{item.title}</ItemTitle>
    </Container>
  </Wrapping>
);

export default ItemTypeB;

const Wrapping = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin: 9px 0;
  padding: 0 9px;
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 20px;
  height: 100%;
  width: 100%;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  background-color: #eef3f7;
`;

const ItemImg = styled.img`
  margin-right: 4px;
`;

const ItemTitle = styled.div`
  color: black;
`;
