/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./blog";

export default function MyPage({ author }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = author;
      try {
        const response = await axios.get("http://localhost:5000/blog/${user}");
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
      {data.map((blog) => (
        <Blog title={blog.title} author={blog.author} content={blog.content} />
      ))}
    </div>
  );
}
