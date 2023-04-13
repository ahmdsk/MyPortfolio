import { marked } from "marked";

interface Props {
    content: string;
}

export default function BlogContent({ content }: Props) {
    return (
        <div className="pt-6 pb-3">
            <div className="prose prose-slate dark:prose-headings:text-white dark:text-slate-200 max-w-none" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    )
}
