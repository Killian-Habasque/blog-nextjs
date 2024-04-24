import Posts from '@/app/posts'
import { fetchApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'
import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation'

export function usePostsQuery(postLimit, slug) {
    const categoryExist = slug ? `filters[categories][slug]=${slug}` : ``;
    return useQuery({
        queryKey: ["posts", postLimit],
        queryFn: () => fetchApi(`/posts?${POPULATE_ALL}&${SORT_DESC}&${categoryExist}&pagination[start]=${postLimit}&pagination[limit]=10`),
        enabled: !!postLimit,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}

export default async function PostsPage({category = ''}) {
    const nbPost = 10;
    const categoryExist = category ? `&filters[categories][slug]=${category}` : ``;
    const posts = await fetchApi(`/posts?${POPULATE_ALL}&${SORT_DESC}${categoryExist}&pagination[start]=0&pagination[limit]=10`);
    const categories = await fetchApi(`/categories`);

    if (posts && posts.data.length == 0) {
        console.log(posts.data.length)
		return notFound()
	}

    return <Posts category={category} nbpost={nbPost} initialPosts={posts.data} categories={categories.data}/>;
}