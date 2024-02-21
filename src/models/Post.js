const { connectMongoDB } = require("@/lib/connectDB");

const menusCollection = async () => {
  const client = await connectMongoDB();
  const Menus = client.db("bistroBossDB").collection("menus");
  return Menus
};
module.exports = menusCollection;