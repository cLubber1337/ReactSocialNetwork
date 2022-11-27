import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import profPic from "./profPic.jpg";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.profPic} src={profPic} alt="profPic" />
      </div>
      <div>
        <img
          src="https://www.armrus.org/upload/main/581/581c1a044fcd9f526747749f6eb7b93d.jpg"
          alt="ava"
        />
        Description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
