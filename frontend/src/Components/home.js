/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./blog";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const author = localStorage.getItem("author");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hi");
        const response = await axios.get("http://localhost:5000/blog/");
        const blogData = response.data;
        setData(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {data.map((blog) => (
          <div>
            <div>
              <Link to={`post/${blog.id}`}>
                <Blog
                  key={blog._id}
                  title={blog.title}
                  author={blog.author}
                  content={blog.content}
                  id={blog.id}
                />
              </Link>
            </div>
            <h1>{blog.id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
