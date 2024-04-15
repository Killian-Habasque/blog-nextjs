import Post from '@/app/article/[slug]/post'
import { useApi, POPULATE_ALL } from '@/hooks/useApi'

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = params.slug
   
    const product = await useApi(`/posts/${slug}?${POPULATE_ALL}`)
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   console.log(product)
    return {
      title: product.data.attributes.title,
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    }
  }
  
export default async function PostPage({ params }) {
    const slug = params.slug;
    const post = await useApi(`/posts/${slug}?${POPULATE_ALL}`)
    const content = await useApi(`/posts/${slug}?populate[content][populate]=*`);
    return <Post post={post.data.attributes} content={content.data.attributes.content}/>;
}