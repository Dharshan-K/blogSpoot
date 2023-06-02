/** @format */

import { Link } from "react-router-dom";

const Blog = ({ title, author, content, id }) => {
  return (
    <div className="blog font-bold mt-3 border rounded border-dark-subtle p-2 mx-3">
      <h2>{title}</h2>
      <p>By {author}</p>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <p>{id}</p>
      <div>
        <Link to={`posts/edit/${id}`}>
          <button className="btn btn-dark">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
