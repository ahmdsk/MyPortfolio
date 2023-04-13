import { myself } from "@/utils/myself";
import moment from "moment";
import Image from "next/image";
import readingTime from "reading-time";

interface Props {
    publish_date: string;
    reading_time: string;
}

export default function BlogAuthor({ publish_date, reading_time }: Props) {
    return (
        <div className="flex items-center gap-4">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src={myself.profile_pict} alt="Post" width={100} height={100} />
                </div>
            </div>
            <div className="dark:text-slate-200">
                <h2 className="text-sm font-medium">{myself.name}</h2>
                <div className="flex items-center gap-x-2">
                    <h4 className="text-sm">{moment(publish_date).format("dddd, D MMM YYYY")}</h4>
                    <span className="text-xs text-gray-400">•</span>
                    <h4 className="text-sm">{readingTime(reading_time).text}</h4>
                </div>
            </div>
        </div>
    )
}