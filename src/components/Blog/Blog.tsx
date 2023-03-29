import Link from 'next/link'
import Image from 'next/image'

interface Props {
    title: string;
    description: string;
    link: string;
    image: string;
    date: string;
    category?: string[];
}

export default function Blog({ title, description, link, image, date, category }: Props) {
    return (
        <div className="flex md:flex-row min-[300px]:flex-col justify-between border-2 border-gray-300 rounded-xl px-3 py-4 mb-6">
            <div className="basis-10/12 min-[300px]:order-last md:order-first space-y-3">
                <Link href={link} className="font-medium text-2xl underline underline-offset-[10px] text-zinc-800">{title}</Link>
                <p className="text-zinc-900">{description}</p>

                <div className="flex md:flex-row min-[300px]:flex-col gap-6 items-center">
                    <p className="text-zinc-600 text-sm">{date}</p>
                    <div className="flex flex-wrap gap-2">
                        {category ?
                            category?.map((category, index) => {
                                return <Link href="/" className="rounded-lg border-2 border-blue-600 text-blue-700 px-2 pb-1" key={index}>{category}</Link>
                            }) : ''
                        }
                    </div>
                </div>
            </div>
            <div className="basis-2/12 min-[300px]:order-first md:order-last">
                {image ?
                    <div className="md:flex justify-end">
                        <Image src={image} className="md:w-24 md:h-24 min-[300px]:w-full min-[300px]:mb-4 rounded-lg" alt="Post" width={100} height={100} />
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}
