"use client";
import { useState } from 'react';
import { fetchPosts } from '@/app/blog/page';
import { Card } from '@/components/Card';
import Link from 'next/link';

export default function Posts({ category, initialPosts, categories }) {
    const [postLimit, setPostLimit] = useState(10);
    const [posts, setPosts] = useState(initialPosts);

    const { data, isFetching } = fetchPosts(postLimit, category);

    const paginate = async () => {
        if (data && data.meta.pagination.total > postLimit) {
            setPostLimit(postLimit + 10);
            setPosts([...posts, ...data.data]);
        }
    };

    return (
        <main>
            <h1>Blog</h1>

            {categories.map(({ id, attributes }) => (
                <Link key={id} href={`/blog/categorie/${attributes.slug}`}>
                    <span className="btn-link">{attributes.name}</span>{"  "}
                </Link>
            ))}

            {posts.map(({ id, attributes }) => (
                <Card key={id} slug={attributes.slug} title={attributes.title} desc={attributes.description} img={attributes.thumbnails.data.attributes} />
            ))}

            {(isFetching ? <span>Loading more...</span> : '')}
            {!isFetching && posts.length < data.meta.pagination.total ? (
                <button onClick={paginate}>Load more</button>
            ) : ''}

        </main>
    );
}
