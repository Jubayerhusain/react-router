/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';

function Post({ post }) {
  const navigate = useNavigate();
  function navigateFunc() {
    navigate(`/post/${post.id}`)
  }
  function BacknavigateFunc() {
    navigate(-1)
  }
  return (
    <div>
      <div className="border-2  rounded-xl p-5 m-5 ">
        <p className="text-4xl font-bold my-2">{post.title}</p>
        <p className="text-lg font-semibold">{post.body}</p>
        <Link className='btn btn-primary' to={`/post/${post.id}`}>Show Details</Link>
        <button className='btn btn-ghost' onClick={navigateFunc}>See details</button>
        <button className='btn btn-outline' onClick={BacknavigateFunc}>Go Back</button>
      </div>
    </div>
  );
}

export default Post;
