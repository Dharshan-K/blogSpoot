/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./blog";

import { Link, useParams } from "react-router-dom";

export default function MyPage() {
  const [data, setData] = useState([]);
  const { author } = useParams();
  console.log("fetching user data...", author);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/blog/${author}`
        );
        const blogData = response.data;
        console.log("blogData", blogData);
        setData(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((blog, index) => (
        <Link className="text-decoration-none" to={`/post/${blog.id}`}>
          <Blog
            key={index}
            title={blog.title}
            author={blog.author}
            content={blog.content}
          />
        </Link>
      ))}
    </div>
  );
}
