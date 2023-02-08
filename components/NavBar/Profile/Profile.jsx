import React from "react";
import Image from "next/image";

import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Nikhil Rana</p>
          <small>42524624672</small>
        </div>
      </div>

    </div>
  );
};

export default Profile;
