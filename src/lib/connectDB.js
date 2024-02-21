import { MongoClient, ServerApiVersion } from "mongodb";

const dotenv = require("dotenv");
await dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@believer.igrxpib.mongodb.net/?retryWrites=true&w=majority`;

export const connectMongoDB = async () => {
  try {
    const client = await MongoClient.connect(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw to expose connection errors to API consumers
  }
};
