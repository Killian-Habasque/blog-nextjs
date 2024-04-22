import PostsPage from '@/app/blog/page'
import { useApi } from '@/hooks/useApi'

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = params.slug

    const categories = await useApi(`/categories`)

    const categoryData = categories.data.find(cat => cat.attributes.slug === slug);
    console.log(categoryData)
    return {
        title: categoryData.attributes.name,
        //   openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        //   },
    }
}


export default function CategoryPage({ params }) {
    const { slug } = params;
    return <PostsPage category={slug} />;
}
