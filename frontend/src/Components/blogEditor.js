/** @format */

import axios from "axios";
import Quill from "quill";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent(props) {
  const { id, title, author, content } = props.location.state;
  const [value, setValue] = useState(props.content);
  console.log(id, title, author, content);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const updatePost = async () => {
    const data = {
      id: id,
      content: value,
    };
    const blog = await axios
      .patch(`http://localhost:5000/blog/post/${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPost = () => {};

  const handleChange = (editedContent) => {
    setValue(editedContent);
    console.log(editedContent);
  };

  return (
    <div>
      <ReactQuill
        value={value}
        modules={modules}
        theme="snow"
        onChange={handleChange}
      />
      <div>
        <button className="btn btn-primary" onClick={updatePost}>
          Finish
        </button>
      </div>
    </div>
  );
}
