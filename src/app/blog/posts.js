"use client"
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPostsList } from '@/app/blog/page';

export default function Posts({ nbpost, posts }) {
    console.log(nbpost)
    const [pageLimit, setPageLimit] = useState(nbpost + 10);

    const { status, data, error, isFetching } = useQuery({
        queryKey: ['posts', pageLimit],
        queryFn: () => fetchPostsList(pageLimit),
        enabled: !!pageLimit,
        refetchOnWindowFocus: false
    });

    if (status === 'loading') {
        return <span>Loading...</span>;
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>;
    }
    if (status === 'success') {
        console.log(data)
    }

    return (
        <div>
            <br></br><p>Server rendering</p><br></br>
            {
                posts.data.map(({ id, attributes }) => (
                    <p key={id} id={id} >{attributes.title}</p>
                ))
            }

            <br></br><p>Client rendering</p><br></br>
            {isFetching ? <span>Fetching...</span> : null}
            {
                status === 'success' ? data.data.map(({ id, attributes }) => (
                    <p key={id} id={id} >{attributes.title}</p>
                )) : ''
            }

        </div>
    );
}

