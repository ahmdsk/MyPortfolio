import Image from "next/image";

interface Props {
    publish_date: string;
}

export default function BlogAuthor({ publish_date }: Props) {
    return (
        <div className="flex items-center gap-4">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src="https://avatars.githubusercontent.com/u/85729997?v=4" alt="Post" width={100} height={100} />
                </div>
            </div>
            <div className="">
                <h2 className="text-sm font-medium">Ahmad Shaleh Kurniawan</h2>
                <h4 className="text-sm">{publish_date}</h4>
            </div>
        </div>
    )
}