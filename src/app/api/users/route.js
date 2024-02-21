import { connectMongoDB } from "@/lib/connectDB";
import { mongoConnect } from "@/lib/mongooseConnect";
import { UserModel } from "@/lib/mongooseSchema";
import { NextResponse } from "next/server";
const mongoose = require("mongoose");

export const GET = async (req) => {
  try {
    await mongoConnect();
    // const client = await connectMongoDB(); // Await the connection

    // const usersCollection = client.db("TestDB").collection("Users");
    // const result = await usersCollection.find().toArray();

    console.log("Mongoose connected");
    return NextResponse.json({ msg: "Mongoose connected" }, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { msg: "Error, something went wrong" },
      { status: 400 }
    );
  }
};

