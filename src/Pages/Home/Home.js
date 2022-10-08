import React from "react";
import { useQuery } from "react-query";

import UserCard from "../../Components/UserCard/UserCard";
import apiClient from "../../api/ApiClient";
import End_Points from "../../config/END_POINTS";

import Styles from "./Styles.module.css";

const Home = () => {
  const { isLoading, error, data } = useQuery(
    "usersData",
    async () => await apiClient.get(End_Points.Users)
  );

  return (
    <>
      {isLoading && (
        <div className={Styles.Loading}>
          <h2 className={Styles.Text}>Loading...</h2>
        </div>
      )}
      {!isLoading && error && (
        <div className={Styles.Loading}>
          <h2 className={Styles.Text}>{error.message}</h2>
        </div>
      )}
      {!isLoading && !error && (
        <div className={Styles.HomeCont}>
          {data?.data.map((user) => (
            <UserCard key={user.id} userId={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
