import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogTags from "@/components/Blog/BlogTags";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import { getPost } from "@/utils/mdx";
import { marked } from "marked";
import { BsPinAngleFill } from "react-icons/bs";

type Params = {
  params: {
    slug: string
  }
}

export default function DetailBlog({ params }: Params) {
  const post = getPost(params.slug)

  return (
    <>
      <Breadcrumb title={post.data.title} />
      <h1 className="text-blue-600 text-4xl font-bold py-6">{post.data.title}</h1>
      <BlogAuthor publish_date="Fri Sep 09 2022" />

      <BlogTags tags={post.data.category} />

      <div className="">
        <img src={post.data.thumbnail ?? ''} alt="Post" className="w-full rounded-lg" />
      </div>

      <div className="rounded-lg bg-gray-100 p-4 w-full mt-5 flex gap-3 items-center flex-wrap">
        <BsPinAngleFill className="text-gray-600 text-xl" />
        <p className="italic text-gray-600">&quot;{post.data.description}&quot;</p>
      </div>

      <div className="pt-6 pb-3">
        <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
      </div>
    </>
  )
}
