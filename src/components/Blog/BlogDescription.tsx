import { BsPinAngleFill } from "react-icons/bs"

interface Props {
    description: string;
}

export default function BlogDescription({ description }: Props) {
    return (
        <div className="rounded-lg bg-gray-100 p-4 w-full mt-5 flex gap-3 items-center flex-wrap">
            <BsPinAngleFill className="text-gray-600 text-xl" />
            <p className="italic text-gray-600">&quot;{description}&quot;</p>
        </div>
    )
}
