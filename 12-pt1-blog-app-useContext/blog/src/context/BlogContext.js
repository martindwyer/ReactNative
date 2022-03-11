import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addBlogPost = () => {
    setPosts([...posts, { title: `Blog Post # ${posts.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: posts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
