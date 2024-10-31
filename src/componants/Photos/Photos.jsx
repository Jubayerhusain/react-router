import { useLoaderData } from "react-router-dom"
import Photo from './../Photo/Photo';

function Photos() {
    const photos = useLoaderData();
    return (
        <div>
            <h1>Total Photos: {photos.length}</h1>
            <div className="grid grid-cols-5 gap-3">
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    )
}

export default Photos
