import { useEffect, useState } from "react";
import { deleteBlog, getStoredBlogs } from "../Util/LocalStorage";
import BlogCard from "../Components/BlogCard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Bookmark = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getStoredBlogs();
        if (storedBlogs) {
            setBlogs(storedBlogs)
        }
    },[])
    const handleDelete = (id) => {
        deleteBlog(id)
        const storedBlogs = getStoredBlogs();
        if (storedBlogs) {
            setBlogs(storedBlogs)
        }
        toast.success('Delete Successfully')
    }
    console.log(blogs);
    if (blogs.length < 1) return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-116px)]">
            <h1 className="text-3xl">No Bookmarks Found</h1>
            <Link to={'/blogs'} className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
            <span className="relative text-black group-hover:text-white">Browse Blogs</span>
            </Link>
        </div>
    )
    return (
        <div className="grid gap-10 grid-cols-3 p-10">
            {blogs.map(blog=><BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)}
        </div>
    );
};

export default Bookmark;