

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/posts");
  return res.json();
};

// async function getData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json();
// }

const LearnDataFetching = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      <h2>All Post data here:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post, index) => (
          <div key={post.id} className="border rounded-xl p-4">
            <div className=" ">
              <h2>{post?.index}</h2>
              User Id: {post.userId}
              <br />
              Title: {post.title}
              <div className="bg-teal-600 h-full p-2 rounded-xl">
                Post: {post.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LearnDataFetching;
