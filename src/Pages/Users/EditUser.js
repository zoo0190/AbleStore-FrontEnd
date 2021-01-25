import React, { useRef, useState, useEffect } from "react";
import EditBoard from "./EditBoard";
import { Form, Input, Button, Select, Tag } from "antd";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

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

function EditUser() {
  let histroy = useHistory();
  const { postId, categoryId } = useParams();
  const [tagData, setTagData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [user, setUser] = useState({});
  const [context, setContext] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3000/data/postData.json")
      .then((res) => res.json())
      .then((res) => {
        const { topic, tags } = res.data;
        setTagData(tags.items);
        setTopicData(topic.items);
      });
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://172.30.1.51:8000/community/categories/1/boards/3");
    setUser(result.data.CONTEXT[0]);
    setContext(result.data.CONTEXT[0].tags);
  };
  console.log(context.toString());
  useEffect(() => {
    loadUser();
  }, []);

  const onFinish = async (values) => {
    const newData = inputData.indexOf("</p>");
    const editData = {
      ...values,
      Topic: values.Topic,
      Title: values.Title,
      Content: inputData,
      Image: "",
      Tags: values.Tags.join(","),
    };

    await axios.put(`http://172.30.1.51:8000/community/categories/1/boards/3`, editData, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
    });
  };

  const onBack = () => {};

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

  const { title, content, topic } = user;

  return (
    <EditUserContainer>
      <Title>
        <h1>Edit</h1>
      </Title>
      <Form size={"large"} {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
        {formWrapper(
          "Topic",
          <Select defaultValue={topic}>
            {topicData.map((e) => (
              <Option key={e.id} value={e.text}>
                <Tag>{e.text}</Tag>
              </Option>
            ))}
          </Select>,
        )}

        {/* </Form.Item> */}

        {formWrapper("Title", <Input defaultValue={title} />)}

        {formWrapper(
          "Tags",
          <Select mode="multiple" showArrow defaultValue={context.toString()}>
            {tagData.map((e) => (
              <Option key={e.id} value={e.text}>
                <Tag>{e.text}</Tag>
              </Option>
            ))}
          </Select>,
        )}

        <Form.Item name="Content" label="Content">
          <EditBoard setInputData={setInputData} content={content} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button htmlType="button" onClick={onBack}>
            Back
          </Button>

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </EditUserContainer>
  );
}

export default EditUser;

const EditUserContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
`;
