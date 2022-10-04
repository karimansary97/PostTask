import React, { useEffect, useState } from "react";
import apiClient from "../api/ApiClient";
import { useQuery } from "react-query";

import UserCard from "../Components/UserCard";
import End_Points from "../config/END_POINTS";

function Home() {
  const { isLoading, error, data } = useQuery(
    "repoData",
    async () => await apiClient.get(End_Points.Users)
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>{error.message}</div>}
      {!isLoading && !error && (
        <div className="HomeCont">
          {data?.data.map((e) => (
            <UserCard key={e.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
