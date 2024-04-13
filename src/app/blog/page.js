import Posts from '@/app/blog/posts'
import { useQuery } from '@tanstack/react-query';

export async function fetchPostsList(pageLimit) {
    console.log("fetch")
    let pagebegin = pageLimit - 10;
    console.log(pagebegin)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/posts?populate=*&sort=createdAt%3Adesc&pagination[start]=${pagebegin}&pagination[limit]=10`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`An error occurred: ${error.message}`);
    }
};

export function usePaginate(pageLimit) {
    return useQuery({
      queryKey: ["posts", pageLimit],
      queryFn: () => fetchPostsList(pageLimit),
      enabled: !!pageLimit,
      refetchOnWindowFocus: false,
      keepPreviousData: true, // Garder les données précédentes en cache
    });
  }

export default async function PostsPage() {
    const nbPost = 10;
    const posts = await fetchPostsList(nbPost);
    return <Posts nbpost={nbPost} initialPosts={posts} />;
}

