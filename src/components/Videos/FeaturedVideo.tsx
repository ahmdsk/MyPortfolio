import SectionFoot from "../SectionFoot";
import SectionHead from "../SectionHead";

export default function FeaturedVideo() {
    const dataVideo = [
        {
            id: 1,
            title: "Tutorial: How to make a website with Next.js",
            duration: "7:20"
        },
        {
            id: 2,
            title: "Tutorial React.js",
            duration: "5:20"
        },
        {
            id: 3,
            title: "Create a website with Next.js",
            duration: "2:30"
        }, {
            id: 4,
            title: "NextJS 13 Tutorial",
            duration: "19:00"
        },
        {
            id: 5,
            title: "learn Next.js with me",
            duration: "12:30"
        }
    ]

    return (
        <div className="pt-16">
            <SectionHead title="Featured" subtitle="Videos" />

            <div className="mt-4">
                <div className="overflow-x-auto my-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataVideo.map((video, idx) => {
                                return (
                                    <tr className="hover w-full" key={idx}>
                                        <td className="w-[35px]">{idx + 1}</td>
                                        <td className="w-[150px]">{video.title}</td>
                                        <td className="w-[35px]">{video.duration}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <SectionFoot text="See All Videos" />
            </div>
        </div>
    )
}