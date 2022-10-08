import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Styles from "./Styles.module.css";

const PostCard = ({ post }) => {
  const [DropDown, setDropDown] = useState(false);
  return (
    <div className={DropDown == true ? Styles.ExpandCard : Styles.Card}>
      <h1 className={Styles.Title}>{post?.title}</h1>

      <h6 className={DropDown == true ? Styles.DesExpand : Styles.Des}>
        {post?.body}
      </h6>

      <AiOutlineArrowDown
        className={DropDown == true ? Styles.ArrowExpand : Styles.Arrow}
        size={25}
        color={"#5d9afc"}
        onClick={() => setDropDown((prevState) => !prevState)}
      />

      {/* {DropDown && (
        <AiOutlineArrowUp
          size={25}
          onClick={() => setDropDown((prevState) => !prevState)}
        />
      )} */}
    </div>
  );
};

export default PostCard;
