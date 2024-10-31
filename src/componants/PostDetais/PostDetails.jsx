import { useLoaderData, useNavigate } from "react-router-dom";

function PostDetails() {
    const postDetails = useLoaderData()
    // console.log(postDetails)
    const {title,body} = postDetails;
    const navigate = useNavigate();
    function backnaviate() {
      navigate(-1);
    }
  return (
    <div>
      <h1>This is Post details container</h1>
        <div className="border-2 border-yellow-500 rounded-lg p-10 w-4/12 mx-auto">
            <h1 className="text-2xl font-bold">Title: {title}</h1>
            <h1 className="text-lg font-semibold">Body: {body}</h1>
            <button onClick={backnaviate} className="btn btn-primary">Go Back</button>
        </div>
    </div>
  );
}

export default PostDetails;
