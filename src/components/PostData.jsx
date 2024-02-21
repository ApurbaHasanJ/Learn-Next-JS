import { connectMongoDB } from "@/lib/connectDB";

const create = async (formData) => {
  "use server";
  console.log("formData", formData);
  const age = Number(formData.get("age"));
  const client = await connectMongoDB();
  const usersCollection = client.db("TestDB").collection("Users");
  const result = await usersCollection.insertOne({
    name: formData.get("name"),
    age: age,
    job: formData.get("job"),
  });
  console.log("result", result);
};

const PostData = () => {
  return (
    <section className="my-8">
      <h3 className="text-xl">Add User Data:</h3>
      <form
        action={create}
        className="border border-red-500 p-3 flex flex-col gap-1">
        Name:{" "}
        <input type="text" name="name" id="" className="text-red-600 p-1" />
        <br />
        Age:{" "}
        <input type="number" name="age" id="" className="text-red-600 p-1" />
        <br />
        Profession:{" "}
        <input type="text" name="job" id="" className="text-red-600 p-1" />
        <br />
        <button
          type="submit"
          className="bg-red-400 w-fit hover:bg-rose-500 p-2 border">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostData;
