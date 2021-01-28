import React, { useEffect, useState } from "react";
import MainBannerDescription from "../Atoms/MainBannerDescription";
import styled from "styled-components";
import { BOARD_USER_API } from "../../Enum";

const MainBannerDescriptions = () => {
  const [postCount, setPostCount] = useState([]);

  useEffect(() => {
    fetch(`${BOARD_USER_API}/community/boards/numbers`)
      .then((res) => res.json())
      .then((res) => {
        setPostCount(res.CONTEXT);
      });
  }, []);

  return (
    <Wrapper>
      {postCount.map((item) => (
        <MainBannerDescription key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default MainBannerDescriptions;

const Wrapper = styled.div`
  display: flex;
  max-width: 42%;
`;
