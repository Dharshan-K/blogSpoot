/** @format */

import { Link } from "react-router-dom";

const Blog = ({ title, author, content, id }) => {
  return (
    <div className="blog text-dark font-bold mt-3 border rounded border-dark-subtle p-2 mx-3">
      <h2>{title}</h2>
      <p>By {author}</p>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <div>
        <Link to={`posts/edit/${id}`}>
          <button className="btn btn-dark mt-3">
            <i class="bi bi-pen-fill me-2 fs-6"></i>
            <span className="fs-6">Edit</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
