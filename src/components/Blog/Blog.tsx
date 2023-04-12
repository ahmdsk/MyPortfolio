import { IPost } from '@/types/posts'
import moment from 'moment'
import BlogList from './BlogList'

moment.locale('id')

export default function Blog({ title, description, slug, thumbnail, date, category }: IPost) {
    return (
        <BlogList slug={slug} title={title} thumbnail={thumbnail} date={date} description={description} category={category} />
    )
}