import Link from "next/link";

interface Props {
  text: string;
  link?: string;
}

export default function LogoText({ text, link }: Props) {
  return (
    <Link className="font-black text-xl text-zinc-700" href={link ?? ''}>{ text }</Link>
  )
}
