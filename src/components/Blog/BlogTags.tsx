import Link from 'next/link'

interface Props {
    tags: string[] | any;
}

export default function BlogTags({ tags }: Props) {
    return (
        <div className="flex gap-4 pt-3 pb-5">
            {tags 
                ? tags.map((tag: string, index: number) => {
                    return <Link className="font-bold underline dark:text-gray-200" href="" key={index}>#{tag}</Link>
                }) : ''
            }
        </div>
    )
}
