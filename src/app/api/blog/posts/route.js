import { NextResponse } from "next/server";

export const GET = async (req) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "content-type": "application/json",
    },
  });
  const posts = await res.json();
//   console.log(posts);
  return NextResponse.json(posts);
};
