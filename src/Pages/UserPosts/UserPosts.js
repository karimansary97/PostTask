import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import END_POINTS from "../../config/END_POINTS";
import apiClient from "../../api/ApiClient";
import PostCard from "../../Components/PostCard/PostCard";

import Styles from "./Styles.module.css";

const UserPosts = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    "usersPosts",
    async () => await apiClient.get(END_POINTS.Posts)
  );

  const FilterData = data?.data.filter((post) => post?.userId == +id);

  return (
    <>
      {isLoading && (
        <div className={Styles.Loading}>
          <h2>Loading...</h2>
        </div>
      )}
      {!isLoading && error && (
        <div className={Styles.Loading}>
          <h2>{error.message}</h2>
        </div>
      )}
      <div className={Styles.Cont}>
        {FilterData?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default UserPosts;
