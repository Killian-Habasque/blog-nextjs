import Post from '@/app/article/[slug]/post'
import { fetchApi, POPULATE_ALL } from '@/hooks/useApi'

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  const product = await fetchApi(`/posts/${slug}?${POPULATE_ALL}`)

  return {
    title: product.data.attributes.title,
    description: product.data.attributes.description,
    openGraph: {
      title: product.data.attributes.title,
      description: product.data.attributes.description,
      type: 'website',
      url: `https://doowup.fr/article/${slug}`,
      site_name: 'Doowup',
      images: [
        {
          url: `https://${process.env.NEXT_PUBLIC_API_DOMAIN}${product.data.attributes.thumbnails.data.attributes.url}`,
          width: 800,
          height: 600,
        },
      ],
    },
    meta: [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Doowup Team' },
    ],
  }
}

export default async function PostPage({ params }) {
  const slug = params.slug;
  const post = await fetchApi(`/posts/${slug}?${POPULATE_ALL}`)
  const content = await fetchApi(`/posts/${slug}?populate[content][populate]=*`);
  return <Post post={post.data.attributes} content={content.data.attributes.content} />;
}