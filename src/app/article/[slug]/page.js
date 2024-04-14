
import { useApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'

export default async function PostPage({ params }) {
    const slug = params.slug;
    const post = await useApi(`/posts/${slug}?${POPULATE_ALL}`)
    const content = await useApi(`/posts/${slug}?populate[content][populate]=*`)
    console.log(post)
    return <div>My Post: {params.slug}</div>
}