/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "./blog";

export default function GetBlog() {
  const blogID = useParams();
  const [blogData, setBlogData] = useState([]);
  //   var blogData;
  console.log(blogID.id);
  console.log("delivering data...........");

  useEffect(() => {
    const getBlog = async () => {
      const blogInfo = await axios.get(
        `http://blogspot-backend.vercel.app/blog/user/${blogID.id}`
      );

      setBlogData(blogInfo.data);
    };

    getBlog();
  }, []);

  return (
    <div className="border border-dark-subtle px-2 mx-2 my-3">
      <div className="my-2 d-flex justify-content-center fs-1 fw-bolder">
        {blogData.title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
      <div className="my-3 fw-bolder">By {blogData.author}</div>
    </div>
  );
}
