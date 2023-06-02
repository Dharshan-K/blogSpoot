/** @format */

import axios from "axios";
import Quill from "quill";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

export default function MyComponent({ edit }) {
  const [value, setValue] = useState("Compose your blog......");
  const [finalValue, setFinalValue] = useState("");
  const [content, setContent] = useState("hello");
  const [blogData, setBlogData] = useState({});
  const blogId = useParams();
  var text;

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

  useEffect(() => {
    const getBlog = async () => {
      const blogInfo = await axios.get(
        `http://localhost:5000/blog/user/${blogId.id}`
      );
      // console.log("blogInfo", blogInfo.data);
      setBlogData(blogInfo.data);
      setValue(blogInfo.data.content);

      // console.log("value", value);
      // console.log("blogData", blogInfo.data.content);
    };

    getBlog();
  }, []);
  const updatePost = async () => {
    const data = {
      id: blogId.id,
      content: value,
    };
    console.log(data);
    const blog = await axios
      .patch(`http://localhost:5000/blog/update/${blogId.id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPost = async () => {
    const postTitle = document.getElementById("title");
    // const postContent = value;

    const postData = {
      title: postTitle.value,
      author: localStorage.getItem("name"),
      content: value,
    };
    console.log(postData);

    const blog = await axios
      .post(`http://localhost:5000/blog/posts`, postData)
      .then((response) => {
        console.log("response", response);
        console.log("post created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (editedContent) => {
    // text = editor.getText(content);
    // console.log("value", value);
    // console.log("text", text);
    console.log(editedContent);
    setValue(editedContent);
  };

  return (
    <div>
      {edit ? (
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
      ) : (
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
          <div>
            <ReactQuill
              value={value}
              modules={modules}
              theme="snow"
              onChange={handleChange}
              placeholder="Compose your blog......"
            />
            {/* <div id="blog" dangerouslySetInnerHTML={{ __html: value }}></div> */}
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  createPost();
                }}
              >
                Post
              </button>
              <div>text{text}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
