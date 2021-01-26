import React from "react";
import CKEditor from "ckeditor4-react";

function EditBoard({ setInputData, content }) {
  const onChange = (e) => {
    setInputData(e.editor.getData());
  };
  return <CKEditor data={content} value={content} onChange={onChange} />;
}

export default EditBoard;
