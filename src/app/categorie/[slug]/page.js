import PostsPage from '@/app/page'
import { fetchApi } from '@/hooks/useApi'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = params.slug

    const categories = await fetchApi(`/categories`)

    const categoryData = categories.data.find(cat => cat.attributes.slug === slug);

    if (!categoryData) {
        return notFound()
    }
    return {
        title: categoryData.attributes.name,
        description: categoryData.attributes.description,
        openGraph: {
            title: categoryData.attributes.name,
            description: categoryData.attributes.description,
            type: 'website',
            url: `https://yourwebsite.com/categories/${slug}`,
            site_name: 'Doowup',
        },
        meta: [
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Doowup Team' },
        ],
    }
}


export default function CategoryPage({ params }) {
    const { slug } = params;
    return <PostsPage category={slug} />;
}