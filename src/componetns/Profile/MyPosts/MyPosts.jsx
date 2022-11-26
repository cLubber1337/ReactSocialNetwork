import React from "react";
import s from "./MyPosts.module.css";
import Post1 from "./Post1/Post1";

const MyPosts = () => {
  return (
    <div className={s.item}>
      <Post1 message="Hi, how are you?" />
      <Post1 message="It's is my first post." />
    </div>
  );
};

export default MyPosts;
