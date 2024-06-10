import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import { useState } from "react";
import blogImg from "/src/assets/BlogImg.jpg";
import { useNavigation } from "react-router-dom";
import { DNA } from "react-loader-spinner";

const Blogs = () => {
    const blogs = useLoaderData();
    const [lenght, setLength] = useState(10);
	const navigation = useNavigation();
	if (navigation.state === 'loading') return (
	<div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
		<DNA
		visible={true}
		height="80"
		width="80"
		ariaLabel="dna-loading"
		wrapperStyle={{}}
		wrapperClass="dna-wrapper"
		/>
	</div>
	)
	
    return (
    <section className="dark:bg-gray-100 -z-10 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link to={`/blog/${blogs[0].id}`} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={blogs[0].cover_image || blogImg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
				<span className="text-xs dark:text-gray-600">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
				<p>{blogs[0].description}</p>
			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.slice(1,lenght).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
		</div>
		<div className="flex justify-center">
        { lenght < 11 && <Link onClick={()=>setLength()} className="cursor-pointer relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Show All</span>
        </Link>}
		</div>
	</div>
    </section>
    );
};

export default Blogs;