import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import "../../Pages/CategoryBoard/Board.css";

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

function EditBoard({ setInputData, content, inputData }) {
  const editorRef = useRef();

  const onChange = () => {
    const html = editorRef.current?.editor.root.innerHTML;
    setInputData(html);
  };

  return (
    <>
      <ReactQuill ref={editorRef} modules={editorConfig} theme="snow" onChange={onChange} />
    </>
  );
}

export default EditBoard;
