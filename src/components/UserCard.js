import React from "react";
import account from "../assets/account.png";
import { useNavigate } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
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
    <div className="UserCardContainer">
      <div className="Header">
        <img src={account} className="accountImage" />
        <h2 className="Name">{user?.name}</h2>
        <div className="SubHeaderInfo">
          <h6 className="UserName">@{user?.username}</h6>
          <h6 className="UserName">,</h6>
          <h6 className="Email">{user?.email}</h6>
        </div>
      </div>
      <div className="SubCont">
        <div className="IconText">
          <AiFillPhone size={20} color={"#70b0f0"} />
          <h6 className="Phone">
            <span></span>
            {user?.phone.split(" ")[0]}
          </h6>
        </div>
        <div className="IconText">
          <MdLocationOn size={20} color={"#70b0f0"} />
          <h6 className="Phone">
            {user?.address.street},{user?.address.city}
          </h6>
        </div>
        <div className="IconText">
          <BiBuildings size={20} color={"#70b0f0"} />
          <h6 className="Phone">{user?.company?.name}</h6>
        </div>
      </div>
      <button
        className="PostsButton"
        onClick={() => navigate(`/userPosts/${userId}`)}
      >
        Posts
      </button>
    </div>
  );
};

export default UserCard;
