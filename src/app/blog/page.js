import Posts from '@/app/blog/posts'
import { useApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'
import { useQuery } from '@tanstack/react-query';

export function fetchPosts(pageLimit, slug) {
    const categoryExist = slug ? `filters[categories][slug]=${slug}` : ``;
    return useQuery({
        queryKey: ["posts", pageLimit],
        queryFn: () => useApi(`/posts?${POPULATE_ALL}&${SORT_DESC}&${categoryExist}&pagination[start]=${pageLimit}&pagination[limit]=10`),
        enabled: !!pageLimit,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}

export default async function PostsPage({slug = ''}) {
    const nbPost = 10;
    const categoryExist = slug ? `&filters[categories][slug]=${slug}` : ``;
    const posts = await useApi(`/posts?${POPULATE_ALL}&${SORT_DESC}${categoryExist}&pagination[start]=0&pagination[limit]=10`);

    return <Posts slug={slug} nbpost={nbPost} initialPosts={posts.data} />;
}