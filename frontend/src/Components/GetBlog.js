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
        `http://localhost:5000/blog/user/${blogID.id}`
      );

      setBlogData(blogInfo.data);
      console.log(blogInfo.data);
    };

    getBlog();
  }, []);

  return (
    <div>
      <p>{blogData.content}</p>
    </div>
  );
}
