import { getAllPosts } from "@/utils/mdx";
import SectionFoot from "../SectionFoot";
import SectionHead from "../SectionHead";
import Blog from "./Blog";

export default function LatestBlogPost() {
  const posts = getAllPosts([
    'slug',
    'title',
    'description',
    'thumbnail',
    'date',
    'category'
  ])

  posts.slice(0, 5)

  return (
    <div className="pt-16">
      <SectionHead title="Latest" subtitle="Blog Post" />

      <div className="mt-4">
        {posts.map(({ title, description, slug, thumbnail, date, category }, index) => {
          return <Blog slug={slug} title={title} description={description} thumbnail={thumbnail ?? ''} date={date} category={category} key={index} />
        })}

        <SectionFoot text="See All Posts" link="/blog" />
      </div>
    </div>
  )
}
