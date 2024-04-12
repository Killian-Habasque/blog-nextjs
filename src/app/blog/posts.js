"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { usePaginate, fetchPostsList } from "@/app/blog/page";

export default function Posts({ nbpost, initialPosts }) {
    const queryClient = useQueryClient();
    const [pageLimit, setPageLimit] = useState(nbpost + 10);
    const { status, data, error, isFetching } = usePaginate(pageLimit);
    const [post, setPosts] = useState(initialPosts.data);
    // const [nextPosts, setNextPosts] = useState([]);
    const paginate = async () => {
        console.log(data)
        setPageLimit(pageLimit + 10);
        // setNextPosts([...data.data])
        setPosts([...post, ...data.data])
        // Précharger les données pour la prochaine page
        // await queryClient.prefetchQuery(["posts", pageLimit], () =>
        //   fetchPostsList(pageLimit)
        // );
    };

    if (status === "loading" && !initialPosts) {
        return <span>Loading...</span>;
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <br />
            <p>Server rendering</p>
            <br />
            {post.map(({ id, attributes }) => (
                <p key={id} id={id}>
                    {attributes.title}
                </p>
            ))}
            <br />
            <p>Client rendering</p>
            <br />
            {isFetching ? <span>Fetching...</span> : null}
            {/* {nextPosts.map(({ id, attributes }) => (
                <p key={id} id={id}>
                    {attributes.title}
                </p>
            ))} */}
            <button onClick={paginate}>Load more</button>
        </div>
    );
}
