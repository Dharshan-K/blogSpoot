/** @format */

const Blog = ({ title, author, content }) => {
  return (
    <div className="blog font-bold">
      <h2>{title}</h2>
      <p>By {author}</p>
      <div className="text-primary">{content}</div>
    </div>
  );
};

export default Blog;
