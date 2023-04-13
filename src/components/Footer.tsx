import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import LogoText from "./LogoText"
import { myself } from "@/utils/myself"

export default function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-gray-300 pt-4 pb-8 mt-8">
        <LogoText text={myself.nick} link="/" />
        <div className="flex gap-4">
            <Link href={myself.social.instagram} target="_blank">
                <BsInstagram className="text-2xl dark:text-slate-200" />
            </Link>
            <Link href={myself.social.linkedin} target="_blank">
                <BsLinkedin className="text-2xl dark:text-slate-200" />
            </Link>
            <Link href={myself.social.github} target="_blank">
                <BsGithub className="text-2xl dark:text-slate-200" />
            </Link>
        </div>
    </div>
  )
}
