import React from "react";
import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";
import "./style.css";

/**
 * @author: Sohag babu
 * @function Post
 **/

const Post = (props) => {
  return (
      <section className='container'>
          <BlogPost {...props}/>
          <Sidebar {...props}/>
      </section>
  )
};

export default Post;
