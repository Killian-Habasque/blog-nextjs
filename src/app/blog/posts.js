"use client";
import { useState } from "react";
import { fetchPosts } from "@/app/blog/page";
import { Card } from "@/components/Card";
import Link from "next/link"

export default function Posts({ category, nbpost, initialPosts, categories }) {
    const [pageLimit, setPageLimit] = useState(nbpost);
    const [post, setPosts] = useState(initialPosts);
    const { status, data, error, isFetching } = fetchPosts(pageLimit, category);

    const paginate = async () => {
        setPageLimit(pageLimit + 10);
        setPosts([...post, ...data.data])
    };

    return (
        <main>
            <h1>Blog</h1>

            {categories.map(({ id, attributes }) => (
                <Link
                    key={id}
                    href={`/blog/categorie/${attributes.slug}`}
                // className={currentCategory === attributes.slug ? "active" : ""}
                >
                    <span key={id} className="btn-link">{attributes.name}</span>{"  "}
                </Link>
            ))}
            {post.map(({ id, attributes }) => (
                <Card key={id} slug={attributes.slug} title={attributes.title} desc={attributes.description} img={attributes.thumbnails.data.attributes} />
            ))}
            {!isFetching ? <button onClick={paginate}>Load more</button> : <span>Loading...</span>}
        </main>
    );
}
