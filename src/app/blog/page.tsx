import Blog from "@/components/Blog/Blog"
import SectionFoot from "@/components/SectionFoot"
import SectionHead from "@/components/SectionHead"

export default function Blogs() {
  const blogs = [
    {
      title: "How to create a blog with Next.js",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde non rem, laudantium eius.",
      link: '/blog/how-to-create-a-blog-with-nextjs',
      image: "/blog/pexels-pat-whelen-5579612.jpg",
      date: "Wed Sep 21 2022",
      category: ["NextJS", "React", "NodeJS"]
    },
    {
      title: "How to config TailwindCSS with Next.js",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde non rem, laudantium eius.",
      link: '/blog/how-to-config-tailwindcss-with-nextjs',
      date: "Wed Sep 21 2022",
      category: ["NextJS", "React", "NodeJS", "TailwindCSS"]
    },
    {
      title: "How to create a blog with Next.js",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde non rem, laudantium eius.",
      link: '/blog/how-to-create-a-blog-with-nextjs',
      image: "/blog/pexels-pat-whelen-5579612.jpg",
      date: "Wed Sep 21 2022",
      category: ["NextJS", "React", "NodeJS"]
    },
    {
      title: "How to config TailwindCSS with Next.js",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde non rem, laudantium eius.",
      link: '/blog/how-to-config-tailwindcss-with-nextjs',
      date: "Wed Sep 21 2022",
      category: ["NextJS", "React", "NodeJS", "TailwindCSS"]
    }
  ]

  return (
    <div>
      <SectionHead title="Blogs" subtitle="All Posts" />

      <div className="mt-4">
        {blogs.map(({ title, description, link, image, date, category }, index) => {
          return <Blog title={title} description={description} link={link} image={image ?? ''} date={date} category={category} />
        })}
      </div>
    </div>
  )
  }
  