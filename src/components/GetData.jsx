import { connectMongoDB } from "@/lib/connectDB";
import { mongoConnect } from "@/lib/mongooseConnect";
import { UserModel } from "@/lib/mongooseSchema";

const GetData = async () => {

  // get from mongodb 
  //   const client = await connectMongoDB(); // Await the connection
  // const usersCollection = client.db("TestDB").collection("Users");
  // const users = await usersCollection.find().toArray();

  // get users using mongoose and local mongodb
  await mongoConnect()
  const users= await UserModel.find({})

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <div key={user?._id} className="border rounded-xl p-4 bg-rose-400">
          Name: {user.name}
          <br />
          Age: {user.age}
          <br />
          Profession: {user.job}
        </div>
      ))}
    </div>
  );
};

export default GetData;
