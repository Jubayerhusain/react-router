/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function Photo({ photo }) {
  console.log(photo);
  const { id, albumId, title } = photo;

  const navigate = useNavigate();
  function navigateFunc() {
    navigate(`/photo/${id}`)
  }
  function gobackFunc() {
    navigate(-1);
  }
  return (
    <div className="border-2 rounded-xl p-5 m-5">
      <h1>Alum ID: {albumId}</h1>
      <h3 className="text-xl font-bold">{title}</h3>
      <Link className="btn btn-error" to={`/photo/${id}`}>
        Show Details
      </Link>
      <button onClick={navigateFunc} className="btn btn-secondary">see details</button>
      <button onClick={gobackFunc} className="btn btn-secondary">Go back</button>
    </div>
  );
}

export default Photo;
