import React, { useRef, useState, useEffect } from "react";
import EditBoard from "./EditBoard";
import { Form, Input, Button, Select, Tag } from "antd";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BOARD_USER_API } from "../../Enum";
import HeaderNav from "../../Components/Organisms/Header/Header";

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
  const TOKEN = sessionStorage.getItem("ACCESS_TOKEN");

  let histroy = useHistory();
  const { categoryId, boardId } = useParams();
  const [tagData, setTagData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [user, setUser] = useState({});
  const [context, setContext] = useState([]);
  const [fieldVaule, setFieldValue] = useState({});

  const formRef = useRef();
  const history = useHistory();

  useEffect(() => {
    axios.get(`${window.location.origin}/data/postData.json`).then((res) => {
      const { topic, tags } = res.data.data;
      setTagData(tags.items);
      setTopicData(topic.items);
    });
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`${BOARD_USER_API}/community/categories/${categoryId}/boards/${boardId}`);
    setUser(result.data.CONTEXT[0]);
    setContext(result.data.CONTEXT[0].tags);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onFinish = async (values) => {
    const editData = {
      ...values,
      Topic: values.Topic,
      Title: values.Title,
      Content: inputData,
      Image: "",
      Tags: values.Tags?.join(","),
    };
    console.log(editData);
    await axios
      .put(`${BOARD_USER_API}/community/categories/${categoryId}/boards/${boardId}`, editData, {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((res) => {
        if (res.data.MESSAGE === "MODIFY_SUCCESSFULLY") {
          history.push(`/boardDetail/${categoryId}/${boardId}`);
        }
      });
  };

  const onBack = () => {
    history.push(`/boardDetail/${categoryId}/${boardId}`);
  };

  const options = [
    {
      required: true,
    },
  ];

  const { title, content, topic, tags } = user;

  const formWrapper = (text, child) => (
    <Form.Item name={text} label={text} rules={options}>
      {child}
    </Form.Item>
  );

  return (
    <>
      <HeaderNav />
      <EditUserContainer>
        <Title>
          <h1>Edit</h1>
        </Title>
        <Form
          size={"large"}
          initialValues={{
            remember: true,
            name: user.topic,
          }}
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
        >
          {formWrapper(
            "Topic",
            <Select name={user.topic} autoFocus={user.topic} value={user.topic}>
              {topicData.map((e) => (
                <>
                  <Option value={topic} selected={topic} disabled hidden>
                    {topic}
                  </Option>
                  <Option name={user.topic} key={e.id} value={e.text}>
                    <Tag>{e.text}</Tag>
                  </Option>
                </>
              ))}
            </Select>,
          )}

          {formWrapper("Title", <Input name={title} type="text" value={title} />)}

          {formWrapper(
            "Tags",
            <Select mode="multiple" showArrow value={user.tags?.join("")}>
              {tagData.map((e) => (
                <Option key={e.id} value={e.text}>
                  <Tag>{e.text}</Tag>
                </Option>
              ))}
            </Select>,
          )}

          <Form.Item name="Content" label="Content">
            <EditBoard setInputData={setInputData} content={content} inputData={inputData} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button style={{ borderRadius: "3px" }} htmlType="button" onClick={onBack}>
              Back
            </Button>

            <Button style={{ marginLeft: "10px", borderRadius: "3px" }} type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </EditUserContainer>
    </>
  );
}

export default EditUser;

const EditUserContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 60px;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
  h1 {
    color: #4c5861;
  }
`;
