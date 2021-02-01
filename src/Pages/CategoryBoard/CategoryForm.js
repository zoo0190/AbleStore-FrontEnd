import React, { useRef, useState, useEffect } from "react";
import { Form, Input, Button, Select, Tag } from "antd";
import "antd/dist/antd.css";
import CategoryBoard from "./CategoryBoard";
import axios from "axios";
import { BOARD_USER_API } from "../../Enum";
import { useHistory } from "react-router-dom";

const API = `${BOARD_USER_API}/community/categories/1/boards`;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 7,
  },
};

function CategoryForm() {
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");

  const [tagData, setTagData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [inputData, setInputData] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetch(`${window.location.origin}/data/postData.json`)
      .then((res) => res.json())
      .then((res) => {
        const { topic, tags } = res.data;
        setTagData(tags.items);
        setTopicData(topic.items);
      });
  }, []);

  const onFinish = (values) => {
    // const newData = inputData.indexOf("</p>");
    // const Data = {
    //   Topic: values.Topic,
    //   Title: values.Title,
    //   Content: inputData,
    //   Image: "",
    //   Tags: values.Tags.join(","),
    // };
    // console.log(Data);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        Topic: values.Topic,
        Title: values.Title,
        Content: inputData,
        Image: "",
        Tags: values.Tags.join(","),
      }),
    };
    fetch(API, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          history.push("/forum/1");
        }
      });
  };

  const onBack = () => {
    history.push("/forum/1");
  };

  const options = [
    {
      required: true,
    },
  ];

  const formWrapper = (text, child) => (
    <Form.Item name={text} label={text} rules={options}>
      {child}
    </Form.Item>
  );

  return (
    <Form size={"large"} {...layout} name="control-ref" onFinish={onFinish}>
      {formWrapper(
        "Topic",
        <Select placeholder="Select a Type">
          {topicData.map((e) => (
            <Option key={e.id} value={e.text}>
              <Tag>{e.text}</Tag>
            </Option>
          ))}
        </Select>,
      )}

      {/* </Form.Item> */}
      {formWrapper("Title", <Input />)}

      {formWrapper(
        "Tags",
        <Select mode="multiple" showArrow>
          {tagData.map((e) => (
            <Option key={e.id} value={e.text}>
              <Tag>{e.text}</Tag>
            </Option>
          ))}
        </Select>,
      )}

      <Form.Item name="Content" label="Content">
        <CategoryBoard setInputData={setInputData} inputData={inputData} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onBack}>
          Back
        </Button>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;
