"use client";
import { useState } from 'react';
import { usePostsQuery } from '@/app/page';
import { Card } from '@/components/Card';
import Link from 'next/link';

export default function Posts({ category, initialPosts, categories }) {
    const [postLimit, setPostLimit] = useState(10);
    const [posts, setPosts] = useState(initialPosts);
    let categoryData = null;
    const { data, isFetching } = usePostsQuery(postLimit, category);

    const paginate = async () => {
        if (data && data.meta.pagination.total > postLimit) {
            setPostLimit(postLimit + 10);
            setPosts([...posts, ...data.data]);
        }
    };
    category ? categoryData = categories.find(cat => cat.attributes.slug === category) : ''

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': categoryData ? `https://doowup.fr/categorie/${category}` : `https://doowup.fr/blog`,
        },
        headline: categoryData ? (categoryData.attributes.name) : 'Blog',
        description: categoryData && categoryData.attributes.description ? categoryData.attributes.description : "Créateurs d'expériences digitales sur mesure. Depuis 2016, Doowup accompagne ses clients PME et Start-Up dans leur stratégie digitale à travers la création de sites internet optimisés pour l'utilisateur et la mise en place de stratégie de référencement.",
        image: initialPosts ?  `https://${process.env.NEXT_PUBLIC_API_DOMAIN}${initialPosts[0].attributes.thumbnails.data.attributes.url}` : '',
        author: {
            '@type': 'Person',
            name: 'Doowup',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Doowup',
        }
    };

    return (
        <main className="container mx-auto p-4 max-w-screen-lg">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>

            <div className="flex flex-wrap -mx-1 mb-4">
                <Link href={`/`}>
                    <span className={`btn-link mx-1 px-2 py-1 rounded ${!category ? 'bg-blue-500 text-white' : ''}`}> Tout</span>
                </Link>
                {categories.map(({ id, attributes }) => (
                    <Link key={id} href={`/categorie/${attributes.slug}`} >
                        <span className={`btn-link mx-1 px-2 py-1 rounded ${category === attributes.slug ? 'bg-blue-500 text-white' : ''}`}>{attributes.name}</span>
                    </Link>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map(({ id, attributes }) => (
                    <Card
                        key={id}
                        slug={attributes.slug}
                        title={attributes.title}
                        desc={attributes.description}
                        img={attributes.thumbnails.data.attributes}
                        bgColor={attributes.background_color.data ? attributes.background_color.data.attributes.hexCode : null}
                        fitImage={attributes.thumbnailType}
                    />
                ))}
            </div>

            <div className="mt-4 flex flex-col items-center">

                {!isFetching && posts.length < data.meta.pagination.total ? (
                    <button
                        onClick={paginate}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Load more
                    </button>
                ) : ''}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
