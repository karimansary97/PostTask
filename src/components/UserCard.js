import React from "react";
import account from "../assets/account.png";
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
function UserCard() {
  return (
    <div className="UserCardContainer">
      <div className="Header">
        <img src={account} className="accountImage" />
        <div className="SubHeader">
          <h2 className="Name">Karim Ansary</h2>
          <div className="SubHeaderInfo">
            <h6 className="UserName">@Ansary97 ,</h6>
            <h6 className="Email">kareem.ansary@gmail.com</h6>
          </div>
        </div>
      </div>
      <h6 className="Phone">Phone:01020603674</h6>
      <h6 className="Address">Address:cairo,Egypt</h6>
      <h6 className="Company">Company:Fixed Soluation</h6>
      <button className="PostsButton">Posts</button>
    </div>
  );
}

export default UserCard;
