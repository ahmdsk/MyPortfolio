import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import LogoText from "./LogoText"

export default function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-gray-300 pt-4 pb-8 mt-8">
        <LogoText text="Ahmd." link="/" />
        <div className="flex gap-4">
            <Link href="">
                <BsInstagram className="text-2xl" />
            </Link>
            <Link href="">
                <BsLinkedin className="text-2xl" />
            </Link>
            <Link href="">
                <BsGithub className="text-2xl" />
            </Link>
        </div>
    </div>
  )
}
