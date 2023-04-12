import BlogDetail from "@/components/Blog/BlogDetail";

type Params = {
  params: {
    slug: string
  }
}

export default function DetailBlog({ params }: Params) {
  return (
    <BlogDetail params={params} />
  )
}
