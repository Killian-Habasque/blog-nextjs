import Post from '@/app/article/[slug]/post'
import { fetchApi, POPULATE_ALL } from '@/hooks/useApi'

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = params.slug
   
    const product = await fetchApi(`/posts/${slug}?${POPULATE_ALL}`)

   console.log(product)
    return {
      title: product.data.attributes.title,
    }
  }
  
export default async function PostPage({ params }) {
    const slug = params.slug;
    const post = await fetchApi(`/posts/${slug}?${POPULATE_ALL}`)
    const content = await fetchApi(`/posts/${slug}?populate[content][populate]=*`);
    return <Post post={post.data.attributes} content={content.data.attributes.content}/>;
}