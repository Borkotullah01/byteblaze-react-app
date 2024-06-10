import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../Util/LocalStorage";

const BlogDetails = () => {
    const blog = useLoaderData();
	const [tabIndex, setTabIndex] = useState(0)
    console.log(blog);
	const handleBookmark = blog =>{
		saveBlog(blog)
	}
    const { cover_image, title, published_at, body_markdown, id, user, reading_time_minutes, public_reactions_count, tags } = blog;
    return (
		<div className="max-w-2xl py-16 mx-auto space-y-12 overflow-hidden">
		<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
			<div className="space-y-6">
				<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
				<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
					<div className="flex items-center md:space-x-2">
						<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
						<p className="text-sm">{user.name} • {new Date(published_at).toLocaleDateString()}</p>
					</div>
					<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes} min read • {public_reactions_count} views</p>
				</div>
			</div>
		</article>
		<div>
		<div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
		<Link to={''} onClick={()=>setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex== 0 ? "border border-b-0 rounded-t-lg":"border-b"} dark:border-gray-600 dark:text-gray-600`}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
			</svg>
			<span>Content</span>
		</Link>
		<Link to={'author'} onClick={()=>setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex== 1 ? "border border-b-0 rounded-t-lg":"border-b"} dark:border-gray-600 dark:text-gray-900`}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
				<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
			</svg>
			<span>Author</span>
		</Link>
		<Link onClick={()=>handleBookmark(blog)} className="p-3 rounded-full m-3 bg-[#621eff30] hover:scale-105 transition-all">
            <div className="text-secondary">
			<MdBookmarkAdd size={20} />
			</div>
		</Link>
		</div>
	
		</div>
		<Outlet></Outlet>
		</div>
    );
};

export default BlogDetails;