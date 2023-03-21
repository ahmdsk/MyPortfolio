import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

interface ISectionFoot {
    text: string
}

export default function SectionFoot({ text }: ISectionFoot) {
    return (
        <div className="flex gap-2 items-center">
            <Link href="/blog" className="font-bold text-zinc-900 text-xl">{text}</Link>
            <IoChevronForward className="text-lg" />
        </div>
    )
}
