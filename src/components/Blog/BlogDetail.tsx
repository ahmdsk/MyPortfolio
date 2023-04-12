import { getPost } from "@/utils/mdx";
import BlogAuthor from "./BlogAuthor";
import BlogContent from "./BlogContent";
import BlogDescription from "./BlogDescription";
import BlogTags from "./BlogTags";
import BlogThumbnail from "./BlogThumbnail";
import BlogTitle from "./BlogTitle";
import Breadcrumb from "./Breadcrumb";

interface Props {
    params: {
        slug: string
    };
}

export default function BlogDetail({ params }: Props) {
    const post = getPost(params.slug);
    
    return (
        <>
            <Breadcrumb title={post.data.title} />
            <BlogTitle title={post.data.title} />
            <BlogAuthor publish_date={post.data.date} reading_time={post.content} />
            <BlogTags tags={post.data.category} />
            <BlogThumbnail thumbnail={post.data.thumbnail} />
            <BlogDescription description={post.data.description} />
            <BlogContent content={post.content} />
        </>
    )
}
