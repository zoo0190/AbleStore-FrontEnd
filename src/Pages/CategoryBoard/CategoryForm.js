import React, { useRef, useState, useEffect } from "react";
import { Form, Input, Button, Select, Tag } from "antd";
import "antd/dist/antd.css";
import CategoryBoard from "./CategoryBoard";
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

function CategoryForm() {
  const [tagData, setTagData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/data/postData.json")
      .then((res) => res.json())
      .then((res) => {
        const newTag = res.data.filter((e) => e.title === "Tags");
        setTagData(newTag[0].text);
        const newTopic = res.data.filter((e) => e.title === "TOPIC");
        setTopicData(newTopic[0].text);
      });
  }, []);

  const formRef = useRef();

  const onFinish = (values) => {
    const newData = { ...values, Tags: values.Tags.join(","), content: inputData.value };
  };
  const onReset = () => {
    formRef.current.resetFields();
  };
  const onBack = () => {};

  return (
    <Form size={"large"} {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
      <Form.Item
        name="Topic"
        label="Topic"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Select a Type">
          {topicData.map((e) => (
            <Option key={e.id} value={e.text}>
              <Tag>{e.text}</Tag>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="Title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Tags"
        label="Tags"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select mode="multiple" showArrow>
          {tagData.map((e) => (
            <Option key={e.id} value={e.text}>
              <Tag>{e.text}</Tag>
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="Content" label="Content">
        <CategoryBoard setInputData={setInputData} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onBack}>
          Back
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;
