import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="friends"
          src="https://www.maitre-mouhou.com/wp-content/uploads/2013/07/temoignage.jpg"
          alt="friends"
        />
      </div>
      <div>
        <img
          className="ava"
          src="https://www.armrus.org/upload/main/581/581c1a044fcd9f526747749f6eb7b93d.jpg"
          alt="ava"
        />
        Description
      </div>
      <div>
        My post
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
