import Link from 'next/link'
import SectionFoot from '../SectionFoot'
import Image from 'next/image'

export default function Blog() {
    return (
        <div className="flex justify-between border-2 border-gray-300 rounded-xl px-3 py-4 mb-6">
            <div className="basis-10/12 space-y-3">
                <Link href="/" className="font-medium text-2xl underline underline-offset-[10px] text-zinc-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis!</Link>
                <p className="text-zinc-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam assumenda dolores dolorum ullam reiciendis.</p>

                <div className="flex gap-6 items-center">
                    <p className="text-zinc-600 text-sm">Wed Sep 21 2022</p>
                    <div className="space-x-2">
                        <Link href="/" className="rounded-lg border-2 border-blue-600 text-blue-700 px-2 pb-1">Category</Link>
                    </div>
                </div>
            </div>
            <div className="basis-2/12">
                <div className="flex justify-end">
                    <Image src="https://hyn.gg/blog/pexels-pat-whelen-5579612.jpg" className="w-24 h-24 rounded-lg" alt="Post" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}
