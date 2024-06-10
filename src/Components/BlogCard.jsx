import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import blogImg  from "/src/assets/BlogImg.jpg";

const BlogCard = ({blog, deletable, handleDelete}) => {
    const { title, cover_image, published_at, description, id } = blog;
    console.log(blog);
    return (
        <div className='relative border-2 rounded-md border-[#961eff4a] hover:border-secondary hover:scale-105 transition-all'>
            <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || blogImg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
            { deletable && <h1 onClick={()=>handleDelete(id)} className='text-secondary hover:text-primary hover:scale-105 absolute -top-4 -right-6 bg-primary p-3 hover:bg-secondary group cursor-pointer rounded-full'>
                <span><MdDeleteForever size={22} /></span>
            </h1> 
            }
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
}

export default BlogCard;