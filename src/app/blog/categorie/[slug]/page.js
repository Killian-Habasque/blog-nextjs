import PostsPage from '@/app/blog/page'

export default function CategoryPage({ params }) {
    const { slug } = params;
    return <PostsPage slug={slug} />;
}
