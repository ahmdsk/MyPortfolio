interface Props {
    title: string;
}

export default function BlogTitle({ title }: Props) {
  return (
    <h1 className="text-blue-600 text-4xl font-bold py-6">{title}</h1>
  )
}
