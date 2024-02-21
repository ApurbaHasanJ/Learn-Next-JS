import { connectMongoDB } from "@/lib/connectDB";

const GetData = async () => {
    const client = await connectMongoDB(); // Await the connection
  const usersCollection = client.db("TestDB").collection("Users");
  const users = await usersCollection.find().toArray();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
