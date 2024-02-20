import { NextResponse } from "next/server";

export const GET = async (req, context) => {
//   console.log("req", req);
// get params
  console.log("context", context.params.id);
  return NextResponse.json({ msg: "get dynamic params" });
};

// another way to get dynamic params
// export const GET = async (req, { params }) => {
//   //   console.log("req", req);
//   console.log("params", params.id);

//   return NextResponse.json({ msg: "get dynamic params" });
// };
