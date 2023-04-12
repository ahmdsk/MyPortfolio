import { IPost } from "@/types/posts";
import BlogListBody from "./BlogListBody";
import BlogListImage from "./BlogListImage";

export default function BlogList({ title, description, slug, thumbnail, date, category }: IPost) {
    return (
        <div className="flex md:flex-row min-[300px]:flex-col justify-between border-2 border-gray-300 dark:border-slate-100 rounded-xl px-3 py-4 mb-6 dark:shadow-sm dark:shadow-slate-100">
            <BlogListBody slug={slug} title={title} thumbnail={thumbnail} date={date} description={description} category={category} />
            <BlogListImage thumbnail={thumbnail} />
        </div>
    )
}
