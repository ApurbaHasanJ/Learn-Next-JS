"use client";

import { useEffect, useState } from "react";

const GetById = () => {
  const [user, setUser] = useState(null);

  // Using useEffect with the `user` dependency to fetch data only once
  useEffect(() => {
    fetch("http://localhost:3000/api/users/65d625767d31e35e5e462e7a")
      .then((response) => response.json())
      .then((data) => setUser(data.user));
  }, []); // Include the `user` dependency

  console.log(user); // Log user only after setting it

    console.log(user);
  return (
    <div className="w-full border p-8">
      <h2 className="text-red-500">This is the user data:</h2>
      <div className="p-5 border rounded-xl bg-white text-black">
        Name: {user?.name}
        <br />
        Age: {user?.age}
        <br />
        Profession: {user?.job}
        <br />
        Joined: {user?.createdAt}
      </div>
    </div>
  );
};

export default GetById;
