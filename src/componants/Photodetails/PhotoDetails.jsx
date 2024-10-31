import { useLoaderData } from "react-router-dom"

function Photodetails() {
    const PhotoDetails =  useLoaderData();
    const {thumbnailUrl, title} = PhotoDetails;
    return (
        <div>
            This is photo detals id
            <div className="w-4/12 mx-auto border-2 rounded-lg p-10">
            <h2 className="text-xl font-bold">Title: {title}</h2>
            <h2 className="font-semibold text-md ">{thumbnailUrl}</h2>
            </div>
        </div>
    )
}

export default Photodetails
