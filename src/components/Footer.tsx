import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import LogoText from "./LogoText"

export default function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-gray-300 pt-4 pb-8 mt-8">
        <LogoText text="Ahmd." link="/" />
        <div className="flex gap-4">
            <Link href="https://www.instagram.com/ahmdsk._" target="_blank">
                <BsInstagram className="text-2xl dark:text-slate-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/ahmdsk" target="_blank">
                <BsLinkedin className="text-2xl dark:text-slate-200" />
            </Link>
            <Link href="https://www.github.com/ahmdsk" target="_blank">
                <BsGithub className="text-2xl dark:text-slate-200" />
            </Link>
        </div>
    </div>
  )
}
