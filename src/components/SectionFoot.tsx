import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

interface ISectionFoot {
    text: string;
    link?: string;
    blank?: boolean;
}

export default function SectionFoot({ text, link, blank }: ISectionFoot) {
    return (
        <div className="flex gap-2 items-center">
            <Link href={link ?? ''} className="font-bold text-zinc-900 text-xl" target={blank ? '_blank' : ''}>{text}</Link>
            <IoChevronForward className="text-lg" />
        </div>
    )
}
