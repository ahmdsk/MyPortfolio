import LatestBlogPost from "@/components/Blog/LatestBlogPost";
import HeroSection from "@/components/HeroSection";
import FeaturedVideo from "@/components/Videos/FeaturedVideo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestBlogPost />
      <FeaturedVideo />
    </>
  )
}
