import SectionFoot from "../SectionFoot";
import SectionHead from "../SectionHead";
import Blog from "./Blog";

export default function LatestBlogPost() {
  return (
    <div className="pt-16">
      <SectionHead title="Latest" subtitle="Blog Post" />

      <div className="mt-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />

        <SectionFoot text="See All Posts" link="/blog" />
      </div>
    </div>
  )
}
