import React, { useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import "./Board.css";

Quill.register("modules/imageResize", ImageResize);

const editorConfig = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }, { size: [] }, { font: [] }],
      [{ align: [false, "center", "right"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["code-block"],
      ["clean"],
    ],
  },
  imageResize: {
    modules: ["Resize", "DisplaySize"],
    displaySize: true,
  },
};

const CategoryBoard = ({ setInputData, inputData }) => {
  const editorRef = useRef();

  const handleOnChange = () => {
    const html = editorRef.current.editor.root.innerHTML;
    setInputData(html);
  };
  console.log(inputData);
  return (
    <>
      <ReactQuill ref={editorRef} modules={editorConfig} theme="snow" value={inputData} onChange={handleOnChange} />
    </>
  );
};

export default CategoryBoard;
