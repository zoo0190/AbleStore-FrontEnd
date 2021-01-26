import React from "react";
import CatListCard from "../Atoms/CatListCard";
import styled from "styled-components";

const CardCollection = ({ categoryData, fromMyPage }) => {
  console.log(categoryData);
  return (
    <>
      <CardCollectionMain>
        {categoryData.map((el, id) => {
          return <CatListCard key={id} fromMyPage={fromMyPage} cardData={el}/>;
        })}
      </CardCollectionMain>
    </>
  );
};
export default CardCollection;

const CardCollectionMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5em 0;
`;
