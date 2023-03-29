import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogTags from "@/components/Blog/BlogTags";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { BsPinAngleFill } from "react-icons/bs";

export default function DetailBlog() {
  return (
    <>
      <Breadcrumb title="How to create a blog with Next.js" />
      <h1 className="text-blue-600 text-3xl font-bold py-6">How to create a blog with Next.js</h1>
      <BlogAuthor publish_date="Fri Sep 09 2022" />

      <BlogTags tags={['nextjs', 'tailwindcss', 'daisyui', 'mdx']} />

      <div className="">
        <img src="/blog/pexels-pat-whelen-5579612.jpg" alt="Post" className="w-full rounded-lg" />
      </div>

      <div className="rounded-lg bg-gray-100 p-4 w-full mt-5 flex gap-3 items-center flex-wrap">
        <BsPinAngleFill className="text-gray-600 text-xl" />
        <p className="italic text-gray-600">&quot;Create Static Blog Using Next JS and MDX&quot;</p>
      </div>
    </>
  )
}
