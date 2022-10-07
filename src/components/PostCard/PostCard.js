import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Styles from "./Styles.module.css";

const PostCard = ({ post }) => {
  const [DropDown, setDropDown] = useState(false);
  return (
    <div className={DropDown == true ? Styles.ExpandCard : Styles.Card}>
      <h1 className={Styles.Title}>{post?.title}</h1>

      <h6 className={DropDown == true ? Styles.DesExpand : Styles.Des}>
        laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
        necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
        accusantium
      </h6>

      <AiOutlineArrowDown
        className={DropDown == true ? Styles.ArrowExpand : Styles.Arrow}
        size={25}
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
