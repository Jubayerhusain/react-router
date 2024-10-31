import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home.jsx';
import About from './componants/About/About';
import Blog from './componants/Blog/Blog.jsx';
import Contact from './componants/Contact/Contact.jsx';
import Posts from './componants/Posts/Posts';
import Photos from './componants/Photos/Photos';
import PostDetails from './componants/PostDetais/PostDetails.jsx';
import Photodetails from './componants/Photodetails/PhotoDetails';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/Blog",
        element: <Blog></Blog>,
      },
      {
        path:"/Contact",
        element: <Contact></Contact>
      },
      {
        path:"/posts",
        element: <Posts></Posts>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path:"/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:"/photos",
        element: <Photos></Photos>,
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/photos`)
      },
      {
        path:"//photo/:photoId",
        element: <Photodetails></Photodetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`)
      },
      
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
