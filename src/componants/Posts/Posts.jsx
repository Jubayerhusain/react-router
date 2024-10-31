/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import Post from "./../Post/Post";

function Posts() {
  const postsData = useLoaderData();
  // console.log(postsData)
  return (
    <div>
      <h1>this is post container</h1>
      <h1>Posts Length:{postsData.length}</h1>
      <div className="grid grid-cols-3 gap-10">
        {postsData.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}

export default Posts;
