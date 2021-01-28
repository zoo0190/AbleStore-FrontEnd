import React, { useState } from "react";
import styled from "styled-components";
import CardCollection from "./CardCollection";
import { Pagination, Menu, Dropdown, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CATEGORY_API } from "../../Enum";
const TEST_API = "/data/AramDataSecond.json";

const CatListMain = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [offset, setOffSet] = useState("?offset=0");
  const [limit, setLimit] = useState("&limit=10");

  const onPageChange = (page) => {
    // console.log(page);
    setOffSet(`?offset=${(page - 1) * 10}`);
    setLimit(`&limit=${page * 10}`);
  };
  const [tag, setTag] = useState([]);

  function onCheckChange(e) {
    console.log(e.target.checked);
    console.log(`checked = ${e.target.id}`);
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
      // setTag{(
      //   tag : e.target.id)}
    }
  }
  var currentDisplay = "";
  const [passCurrentDisplay, setPassCurrentDisplay] = useState("");

  const displayChange = ({ key }) => {
    currentDisplay = key;
    console.log(currentDisplay);
    if (currentDisplay === "item_0") {
      setPassCurrentDisplay("");
    }
    if (currentDisplay === "item_1") {
      setPassCurrentDisplay("&topic=1");
    }
    if (currentDisplay === "item_2") {
      setPassCurrentDisplay("&topic=2");
    }
  };

  const displayOption = (
    <Menu onClick={displayChange}>
      <Menu.Item>
        <span key="1">All</span>
      </Menu.Item>
      <Menu.Item>
        <span key="2">Question</span>
      </Menu.Item>
      <Menu.Item>
        <span key="3">Discussion</span>
      </Menu.Item>
    </Menu>
  );

  const tagOption = (
    <Menu>
      <Menu.Item>
        <Checkbox id="1" onChange={onCheckChange}>
          DSM Management
        </Checkbox>{" "}
      </Menu.Item>
      <Menu.Item>
        <Checkbox id="2" onChange={onCheckChange}>
          Storage Management
        </Checkbox>{" "}
      </Menu.Item>
      <Menu.Item>
        <Checkbox id="3" onChange={onCheckChange}>
          File Services
        </Checkbox>{" "}
      </Menu.Item>
    </Menu>
  );

  React.useEffect(() => {
    fetch(`${CATEGORY_API}${offset}${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCategoryData(res.CONTEXT));
  }, [offset]);
  React.useEffect(() => {
    fetch(`${CATEGORY_API}${offset}${limit}${passCurrentDisplay}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCategoryData(res.CONTEXT));
  }, [offset, passCurrentDisplay]);
  console.log("indese tag {}: ", categoryData);

  return (
    <>
      <CatListMainWrapper>
        <CatListFilterSection>
          <DisplayFilter>
            <Dropdown overlay={displayOption} trigger={["click"]}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Display <DownOutlined />
              </a>
            </Dropdown>
          </DisplayFilter>
          <TagFilter>
            <Dropdown overlay={tagOption} trigger={["click"]}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Tags <DownOutlined />
              </a>
            </Dropdown>
          </TagFilter>
        </CatListFilterSection>
        <CatListCardCollection>
          <CardCollection categoryData={categoryData} />
        </CatListCardCollection>
        <Pagination defaultCurrent={1} total={40} onChange={onPageChange} />
      </CatListMainWrapper>
    </>
  );
};
export default CatListMain;

const CatListMainWrapper = styled.div`
  width: 100%;
`;

const CatListFilterSection = styled.div`
  display: flex;

  height: 4em;
  line-height: 2;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const DisplayFilter = styled.div`
  padding: 1em 1em;
  font-size: 0.9em;
  a {
    color: grey;
  }
`;
const TagFilter = styled.div`
  padding: 1em 1em;
  font-size: 0.9em;
  a {
    color: grey;
  }
`;
const CatListCardCollection = styled.div``;
