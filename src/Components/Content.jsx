import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import blogImg from '/src/assets/BlogImg.jpg';

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, tags, title, body_markdown } = blog;
    return (
        <div className="border p-6">
        <img src={cover_image || blogImg} alt="" />
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
			{
                tags.map(tag=><a key={tag} rel="noopener noreferrer" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
            }
		</div>
		<div className="space-y-2">
			<a className="text-2xl hover:underline font-semibold">{title}</a>
		</div>
		<div>
			<Markdown rehypePlugins={rehypeRaw}>{body_markdown}</Markdown>
		</div>
        </div>
    );
};

export default Content;