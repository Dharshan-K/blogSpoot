/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./blog";
import MyPage from "./myPage";

export default function Home() {
  const [data, setData] = useState([]);
  const author = localStorage.getItem("author");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hi");
        const response = await axios.get("http://localhost:5000/blog/");
        console.log(response);
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
      <a>My Blogs</a>
      <h1>{localStorage.getItem("name")}</h1>
      <div>
        <MyPage author={author} />
        hi
      </div>
      <div>
        {data.map((blog) => (
          <Blog
            key={blog._id}
            title={blog.title}
            author={blog.author}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}

// /** @format */

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Blog from "./blog";

// export default function Home() {
//   const [data, setData] = useState();
//   var blogData;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("hi");
//         const response = await axios.get("http://localhost:5000/blog/Dharshan");
//         blogData = response.data;
//         console.log("data", data);
//       } catch (error) {
//         console.log("erroe", error);
//       }
//     };

//     fetchData();
//     setData(blogData);
//   }, []);

//   //   useEffect(() => {
//   //     const refresh = async () => {
//   //       await homePage();
//   //       setData(blogData);
//   //     };
//   //     refresh();
//   //   }, []);

//   //   const homePage = async () => {
//   //     console.log("hi");
//   //     await axios.get("http://localhost:5000/blog/Dharshan").then((response) => {
//   //       blogData = response.data;
//   //     });
//   //     console.log("data", data);

//   return (
//     <div>
//       {/* {data.map((blog, index) => {
//         <div>
//           <Blog title={blog[index].title} />
//           <Blog author={blog[index].author} />
//           <Blog content={blog[index].content} />
//         </div>;
//       })} */}
//       <button>getBLog</button>
//       {/* <div>{data[0]}</div> */}
//     </div>
//   );
// }
