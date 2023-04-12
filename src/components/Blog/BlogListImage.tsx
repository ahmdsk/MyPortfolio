import Image from 'next/image'

interface Props {
    thumbnail: string;
}

export default function BlogListImage({ thumbnail }: Props) {
    return (
        <div className="basis-2/12 min-[300px]:order-first md:order-last">
            {thumbnail ?
                <div className="md:flex justify-end">
                    <Image src={thumbnail} className="md:w-24 md:h-24 min-[300px]:w-full min-[300px]:mb-4 rounded-lg" alt="Post" width={100} height={100} />
                </div>
                : ''
            }
        </div>
    )
}
