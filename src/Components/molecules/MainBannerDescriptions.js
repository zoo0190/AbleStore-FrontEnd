import React from "react";
import MainBannerDescription from "../Atoms/MainBannerDescription";
import styled from "styled-components";

const COUNT_TITLE = [
  {
    id: 1,
    countTitle: "Online experts",
  },
  {
    id: 2,
    countTitle: "Today's Posts",
  },
  {
    id: 3,
    countTitle: "Total Posts",
  },
];

const MainBannerDescriptions = () => (
  <Wrapper>
    {COUNT_TITLE.map((item) => (
      <MainBannerDescription key={item.id} item={item} />
    ))}
  </Wrapper>
);

export default MainBannerDescriptions;

const Wrapper = styled.div`
  display: flex;
  max-width: 42%;
`;
