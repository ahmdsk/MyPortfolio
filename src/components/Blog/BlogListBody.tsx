import { IPost } from "@/types/posts"
import moment from "moment"
import Link from "next/link"

export default function BlogListBody({ title, slug, description, date, category }: IPost) {
    return (
        <div className="basis-10/12 min-[300px]:order-last md:order-first space-y-3">
            <Link href={`/blog/${slug}`} className="font-medium text-2xl underline underline-offset-[10px] text-zinc-800 dark:text-slate-200">{title}</Link>
            <p className="text-zinc-900 dark:text-slate-200">{description}</p>

            <div className="flex md:flex-row min-[300px]:flex-col gap-6 items-center">
                <p className="text-zinc-600 dark:text-slate-200 text-sm">{moment(date).format("ddd MMM  D YYYY")}</p>
                <div className="flex flex-wrap gap-2">
                    {category ?
                        category?.map((category, index) => {
                            return <Link href="/" className="btn btn-sm btn-primary btn-outline" key={index}>{category}</Link>
                        }) : ''
                    }
                </div>
            </div>
        </div>
    )
}
