import { toast } from "react-toastify"

const getStoredBlogs = () =>{
    const storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs) {
        return JSON.parse(storedBlogs)
    }
    return []
}

const saveBlog = blog =>{
    const blogs = getStoredBlogs();
    const exist = blogs.find(b=>b.id === blog.id)
    if (exist) {
        toast.error('Allready Bookmarked')
    }
    else {
        blogs.push(blog)
        localStorage.setItem('blogs', JSON.stringify(blogs))
        toast.success('Bookmarked Successfully');
    }
    return blogs
}

const deleteBlog = id =>{
    const blogs = getStoredBlogs();
    const remaining = blogs.filter(b=>b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
}

export { getStoredBlogs, saveBlog, deleteBlog }