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
      }
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
