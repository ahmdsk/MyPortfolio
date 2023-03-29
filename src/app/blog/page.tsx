import Blog from "@/components/Blog/Blog"
import SectionHead from "@/components/SectionHead"
import { getAllPosts } from "@/utils/mdx"

export default function Blogs() {
  const posts = getAllPosts([
    'slug',
    'title',
    'description',
    'thumbnail',
    'date',
    'category'
  ])

  return (
    <div>
      <SectionHead title="Blogs" subtitle="All Posts" />

      <div className="mt-4">
      {posts.map(({ title, description, slug, thumbnail, date, category }, index) => {
          return <Blog title={title} description={description} slug={slug} thumbnail={thumbnail ?? ''} date={date} category={category} key={index} />
        })}
      </div>
    </div>
  )
}