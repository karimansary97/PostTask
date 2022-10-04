import React from "react";
import UserCard from "../Components/UserCard";

function Home() {
  const array = [1, 1, 1];
  
  return (
    <div>
      {array.map((e) => (
        <UserCard />
      ))}
    </div>
  );
}

export default Home;
