import Posts from '@/app/blog/posts'
import { useApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'
import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation'

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

export default async function PostsPage({category = ''}) {
    const nbPost = 10;
    const categoryExist = category ? `&filters[categories][slug]=${category}` : ``;
    const posts = await useApi(`/posts?${POPULATE_ALL}&${SORT_DESC}${categoryExist}&pagination[start]=0&pagination[limit]=10`);
    const categories = await useApi(`/categories`);

    // const categoryData = categories.data.find(cat => cat.attributes.slug === slug);

    if (posts.data.length == 0) {
        console.log(posts.data.length)
		return notFound()
	}

    return <Posts category={category} nbpost={nbPost} initialPosts={posts.data} categories={categories.data}/>;
}