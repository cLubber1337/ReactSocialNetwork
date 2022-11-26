import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.friends}
          src="https://www.maitre-mouhou.com/wp-content/uploads/2013/07/temoignage.jpg"
          alt="friends"
        />
      </div>
      <div className={s.item}>
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
