import React from "react";

const MyProfile = ({ params }) => {
  console.log(params);
  return <div>user profile name is {params.username}</div>;
};

export default MyProfile;
