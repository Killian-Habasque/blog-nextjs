"use client";
import { useState } from "react";
import { fetchPosts } from "@/app/blog/page";
import { Card } from "@/components/Card";

export default function Posts({ nbpost, initialPosts }) {
    const [pageLimit, setPageLimit] = useState(nbpost);
    const [post, setPosts] = useState(initialPosts);

    const { status, data, error, isFetching } = fetchPosts(pageLimit);
 
    const paginate = async () => {
        setPageLimit(pageLimit + 10);
        setPosts([...post, ...data.data])
    };

    return (
        <main>
            <h1>Blog</h1>
            {post.map(({ id, attributes }) => (
                <Card key={id} slug={attributes.slug} title={attributes.title} desc={attributes.description} img={attributes.thumbnails.data.attributes} />
            ))}
            {!isFetching ? <button onClick={paginate}>Load more</button> : <span>Loading...</span>}
        </main>
    );
}
