import React, { useState, useEffect } from "react";
import CKEditor from "ckeditor4-react";
import styled from "styled-components";

const CategoryBoard = ({ setInputData }) => {
  const [abc, setABC] = useState("");
  const onChange = (e) => {
    setInputData(e.editor.getData());
  };

  return (
    <>
      <CKEditor onChange={onChange} />
    </>
  );
};

export default CategoryBoard;

const EditorBoard = styled.div``;
