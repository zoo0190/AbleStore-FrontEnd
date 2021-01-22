import React, { useEffect, useState } from "react";
import SectionTitle from "../../Atoms/SectionTitle";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import MainCard from "../../Molecules/MainCard";
import styled from "styled-components";

const Discussions = () => {
  const { TabPane } = Tabs;
  const [cardList, setCardList] = useState([]);
  const [filterCardList, setFilterCardList] = useState([]);
  const [totalView, setTotalView] = useState(0);

  useEffect(() => {
    fetch("/data/MainCardList.json")
      .then((res) => res.json())
      .then((res) => {
        setCardList(res.CardList);
      });
  }, []);

  const showingTotalCards = () => {
    setTotalView(1);
  };

  const filteringCardList = (e) => {
    switch (e) {
      case "Solved":
        const solvedData = cardList.filter((item) => item.solution === true);
        setFilterCardList(solvedData);
        setTotalView(0);
        break;
      case "Open":
        const openData = cardList.filter((item) => item.topic === "question" && item.solution === false);
        setFilterCardList(openData);
        setTotalView(0);
        break;
      case "Trending":
        const copy = [...cardList];
        const openTrending = copy.sort((a, b) => {
          if (a.replies > b.replies) {
            return -1;
          }
          return null;
        });
        setFilterCardList(openTrending);
        setTotalView(0);
        break;
      default:
        setTotalView(0);
        break;
    }
  };

  const filterMainCard = totalView
    ? filterCardList.map((item) => <MainCard key={item.board_id} item={item} />)
    : filterCardList.slice(0, 2).map((item) => <MainCard key={item.board_id} item={item} />);

  return (
    <>
      <SectionTitle />
      <Tabs defaultActiveKey="1" onTabClick={(e) => filteringCardList(e)}>
        <TabPane tab="All" key="All">
          {totalView
            ? cardList.map((item) => <MainCard key={item.board_id} item={item} />)
            : cardList.slice(0, 2).map((item) => <MainCard key={item.board_id} item={item} />)}
        </TabPane>
        <TabPane tab="Solved" key="Solved">
          {filterMainCard}
        </TabPane>
        <TabPane tab="Open" key="Open">
          {filterMainCard}
        </TabPane>
        <TabPane tab="Trending" key="Trending">
          {filterMainCard}
        </TabPane>
      </Tabs>
      <ButtonWrapper display={totalView}>
        <ShowMoreButton onClick={showingTotalCards}>Show more</ShowMoreButton>
      </ButtonWrapper>
    </>
  );
};

export default Discussions;

const ShowMoreButton = styled.button`
  padding: 20px;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4c5861;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  display: ${(props) => (props.display ? "none" : "block")};
  text-align: center;
`;
