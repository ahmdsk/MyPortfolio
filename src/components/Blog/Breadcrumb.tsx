import Link from 'next/link'
import React from 'react'

interface Props {
    title: string;
}

export default function Breadcrumb({ title }: Props) {
    return (
        <div className="text-md breadcrumbs">
            <ul>
                <li><Link className="underline" href="/">Home</Link></li>
                <li><Link className="underline" href="/blog">Blog</Link></li>
                <li>{title}</li>
            </ul>
        </div>
    )
}
