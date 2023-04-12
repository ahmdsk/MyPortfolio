interface ISectionHead {
    title: string,
    subtitle: string
}

export default function SectionHead({ title, subtitle }: ISectionHead) {
    return (
        <div className="space-y-2">
            <h2 className="font-bold text-zinc-700 dark:text-slate-200 text-2xl">{title}</h2>
            <h1 className="font-bold text-blue-600 text-4xl">{subtitle}</h1>
        </div>
    )
}
