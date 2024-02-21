import { connectMongoDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      const client = await connectMongoDB(); // Await the connection
  
      const usersCollection = client.db("TestDB").collection("Users");
      const result = await usersCollection.find().toArray();
  
    //   console.log(result);
      return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      console.error("Error in GET request:", error);
      return NextResponse.json(
        { msg: "Error, something went wrong" },
        { status: 400 }
      );
    }
  };
  