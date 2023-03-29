import Link from 'next/link'
import Image from 'next/image'
import { IPost } from '@/types/posts'
import moment from 'moment'

moment.locale('id')

export default function Blog({ title, description, slug, thumbnail, date, category }: IPost) {
    return (
        <div className="flex md:flex-row min-[300px]:flex-col justify-between border-2 border-gray-300 rounded-xl px-3 py-4 mb-6">
            <div className="basis-10/12 min-[300px]:order-last md:order-first space-y-3">
                <Link href={`/blog/${slug}`} className="font-medium text-2xl underline underline-offset-[10px] text-zinc-800">{title}</Link>
                <p className="text-zinc-900">{description}</p>

                <div className="flex md:flex-row min-[300px]:flex-col gap-6 items-center">
                    <p className="text-zinc-600 text-sm">{moment(date).format("ddd MMM  D YYYY")}</p>
                    <div className="flex flex-wrap gap-2">
                        {category ?
                            category?.map((category, index) => {
                                return <Link href="/" className="btn btn-sm btn-primary btn-outline" key={index}>{category}</Link>
                            }) : ''
                        }
                    </div>
                </div>
            </div>
            <div className="basis-2/12 min-[300px]:order-first md:order-last">
                {thumbnail ?
                    <div className="md:flex justify-end">
                        <Image src={thumbnail} className="md:w-24 md:h-24 min-[300px]:w-full min-[300px]:mb-4 rounded-lg" alt="Post" width={100} height={100} />
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}