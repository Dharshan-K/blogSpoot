const Blog = ({ title, author, content }) => {
  return (
    <div className="blog">
      <h2>{title}</h2>
      <p>By {author}</p>
      <div>{content}</div>
    </div>
  );
};

export default Blog;
