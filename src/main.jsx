import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import BlogDetails from './Components/BlogDetails';
import Content from './Components/Content';
import Author from './Components/Author';
import Bookmark from './Pages/Bookmark';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch(`https://dev.to/api/articles/?per_page=22&top=20`)
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
          },
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmark></Bookmark>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
