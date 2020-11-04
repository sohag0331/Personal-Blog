import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author: Sohag babu
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://lh3.googleusercontent.com/proxy/ziMml0ml2p449JsWF7fxLHqPqI0EcDVAyDU6ex-XPyVC3Kvx7At5yL31-v7wq6r17wMUias7sVEAwGG5OEe_-eHOMy-j4p_uVvpDv9WO4VyvuWTIIeHahSkUQYrQIOcB7Q"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Sohag Babu I am a web developer specialization in
           ReactJs developement...
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
