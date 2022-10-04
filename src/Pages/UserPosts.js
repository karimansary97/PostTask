import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import END_POINTS from "../config/END_POINTS";
import apiClient from "../api/ApiClient";

function UserPosts() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    "usersPosts",
    async () => await apiClient.get(`${END_POINTS.Posts}/${id}`)
  );

  console.log(data);
  return (
    <>
      <h1>sssssssss</h1>
    </>
  );
}

export default UserPosts;
