interface Props {
    thumbnail: string;
}

export default function BlogThumbnail({ thumbnail }: Props) {
    return (
        <div className="">
            <img src={thumbnail ?? ''} alt="Post" className="w-full rounded-lg" />
        </div>
    )
}
