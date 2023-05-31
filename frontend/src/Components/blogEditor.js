/** @format */

import axios from "axios";
import Quill from "quill";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

export default function MyComponent() {
  const [value, setValue] = useState("");
  const [blogData, setBlogData] = useState({});
  const blogId = useParams();

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

  // const getBlog = async () => {
  //   console.log(blogId.id);
  //   const blogInfo = await axios.get(
  //     `http://localhost:5000/blog/user/${blogId.id}`
  //   );

  //   setBlogData(blogInfo.data);
  //   setValue(blogData.content);
  //   console.log(blogData.content);
  // };

  useEffect(() => {
    const getBlog = async () => {
      console.log("blogId", blogId.id);
      console.log("getting data.....");
      const blogInfo = await axios.get(
        `http://localhost:5000/blog/user/${blogId.id}`
      );
      console.log("blogInfo", blogInfo.data);
      setBlogData(blogInfo.data);
      setValue(blogInfo.data.content);
      console.log("value", value);
      console.log("blogData", blogInfo.data.content);
    };

    getBlog();
  }, []);
  const updatePost = async () => {
    // const data = {
    //   id: id,
    //   content: value,
    // };
    // const blog = await axios
    //   .patch(`http://localhost:5000/blog/post/${id}`, data)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const createPost = () => {};

  const handleChange = (editedContent) => {
    setValue(editedContent);
    console.log("editedContent", editedContent);
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
        <button className="btn btn-primary">Finish</button>
      </div>
    </div>
  );
}
