import Posts from '@/app/blog/posts'
import { useApi, POPULATE_ALL, SORT_DESC } from '@/hooks/useApi'
import { useQuery } from '@tanstack/react-query';

export function fetchPosts(pageLimit) {
    return useQuery({
      queryKey: ["posts", pageLimit],
      queryFn: () => useApi(`/posts?${POPULATE_ALL}&${SORT_DESC}&pagination[start]=${pageLimit}&pagination[limit]=10`),
      enabled: !!pageLimit,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    });
  }

export default async function PostsPage() {
    const nbPost = 10;
    const posts = await useApi(`/posts?${POPULATE_ALL}&${SORT_DESC}&pagination[start]=0&pagination[limit]=10`);
    return <Posts nbpost={nbPost} initialPosts={posts.data} />;
}

