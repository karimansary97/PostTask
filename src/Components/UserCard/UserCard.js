import React from "react";
import account from "../../assets/account.png";
import { useNavigate } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiBuildings, BiWorld } from "react-icons/bi";
import Styles from "./Styles.module.css";
/**
 * 
Name.
UserName.
Phone.
Email.
Address including street and city only.
Company name.
Website as link opens the website in another tab.

 */

const UserCard = ({ userId, user }) => {
  console.log("🚀 ~ file: UserCard.js ~ line 16 ~ UserCard ~ id", userId);
  const navigate = useNavigate();
  return (
    <div className={Styles.UserCardContainer}>
      <div className={Styles.Header}>
        <img src={account} className={Styles.AccountImage} />
        <h2 className={Styles.Name}>{user?.name}</h2>
        <div className={Styles.SubHeaderInfo}>
          <h6 className={Styles.UserName}>@{user?.username}</h6>
          <h6 className={Styles.UserName}>,</h6>
          <h6 className={Styles.Email}>{user?.email}</h6>
        </div>
      </div>
      <div className={Styles.SubCont}>
        <div className={Styles.IconText}>
          <AiFillPhone size={20} color={"#5d9afc"} />
          <h6 className={Styles.Phone}>
            <span></span>
            {user?.phone.split(" ")[0]}
          </h6>
        </div>
        <div className={Styles.IconText}>
          <MdLocationOn size={20} color={"#5d9afc"} />
          <h6 className={Styles.Phone}>
            {user?.address.street},{user?.address.city}
          </h6>
        </div>
        <div className={Styles.IconText}>
          <BiBuildings size={20} color={"#5d9afc"} />
          <h6 className={Styles.Phone}>{user?.company?.name}</h6>
        </div>
        <div className={Styles.IconText}>
          <BiWorld size={20} color={"#5d9afc"} />
          <a
            href={`https://${user?.website}`}
            target="_blank"
            className={Styles.Phone}
          >
            {user?.website}
          </a>
        </div>
      </div>
      <button
        className={Styles.PostsButton}
        onClick={() => navigate(`/userPosts/${userId}`)}
      >
        Posts
      </button>
    </div>
  );
};

export default UserCard;
