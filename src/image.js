import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommonService } from "app/services";

Quill.register("modules/imageResize", ImageResize);

const NO_IMAGE_URL = `${window.location.origin}/assets/images/icons/icon-image-placeholder.png`;
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
    handlers: {
      image: null,
    },
  },
  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },
};

const QuillEditor = ({ defaultValue, value, onChange }) => {
  const editorRef = useRef();

  editorConfig.toolbar.handlers.image = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const editorEl = editorRef.current.editor;
      const range = editorEl.getSelection(true);

      editorEl.insertEmbed(range.index, "image", NO_IMAGE_URL);
      editorEl.setSelection(range.index + 1);

      const list = await CommonService.uploadFile(file, { path: "content" });
      const { path } = await CommonService.getFileInfo(list[0].id);
      input.setAttribute("data-img-id", list[0].id);
      editorEl.deleteText(range.index, 1);
      editorEl.insertEmbed(range.index, "image", path);
    };
  };

  const handleOnChange = () => {
    const html = editorRef.current.editor.root.innerHTML;
    onChange(html);
  };

  return (
    <ReactQuill
      ref={editorRef}
      modules={editorConfig}
      placeholder="내용을 입력해주세요."
      defaultValue={defaultValue || ""}
      value={value || ""}
      onChange={handleOnChange}
    />
  );
};

QuillEditor.propType = {
  defaultValue: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuillEditor;
