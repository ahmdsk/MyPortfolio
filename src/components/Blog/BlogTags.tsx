import Link from 'next/link'

interface Props {
    tags: string[];
}

export default function BlogTags({ tags }: Props) {
    return (
        <div className="flex gap-4 pt-3 pb-5">
            {tags 
                ? tags.map((tag, index) => {
                    return <Link className="font-bold underline" href="" key={index}>#{tag}</Link>
                }) : ''
            }
        </div>
    )
}
