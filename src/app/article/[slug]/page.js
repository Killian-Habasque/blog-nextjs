import Post from '@/app/article/[slug]/post'
import { useApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'


export default async function PostPage({ params }) {
    const slug = params.slug;
    const content = await useApi(`/posts/${slug}?populate[content][populate]=*`);
    return <Post content={content.data.attributes.content} />;
}