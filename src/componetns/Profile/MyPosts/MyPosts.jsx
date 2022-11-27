import React from "react";
import s from "./MyPosts.module.css";
import Post1 from "./Post1/Post1";

const MyPosts = () => {
  return (
    <div className={s.item}>
      <Post1 message="Hi, how are you?" likesCount="15" />
      <Post1 message="It's is my first post." likesCount="36" />
    </div>
  );
};

export default MyPosts;
