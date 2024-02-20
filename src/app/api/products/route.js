import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// get request 
// export async function GET(req) {
//   return NextResponse.json({ msg: "Hello Next.js API" });
// }

// get request arrow function
export const GET = async (req) => {
    // get headers
    // const requestHeaders = new Headers(req.headers)
    // console.log("headers", requestHeaders);

    // URL Query Parameters

    // 1st way
    // const {searchParams}= new URL(req.url)

    // 2nd way
    // const searchParams = req.nextUrl.searchParams

    // console.log("search params",searchParams);
    // console.log("search params",searchParams.get("search"));

    // get cookies
    // const cook1 = req.cookies
    // console.log("cookies1",cook1);

    // cookie function
    // const cook2 = cookies()
    // console.log("cookies2",cook2);

  return NextResponse.json({ msg: "Hello Next.js API" });
};


// post request
export const POST = async(req)=>{
// console.log(req);

// request body
// const res = await req.json()
// console.log("response", res);

// get form data
// const formData = await req.formData()
// console.log("formData", formData);
// console.log("get name", formData.get("name"));
// console.log("get age", formData.get("age"));

return NextResponse.json({ msg: "Post success" },{status:201});
}