"use client";
import ComponentAdapter from "@/hooks/componentAdapter";
import Image from "next/image";

export default function Post({ post, content }) {
  console.log(post.thumbnails.data)
  return (
    <main className="container mx-auto p-4 max-w-screen-lg">
      <article className="prose prose-lg">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="mb-6">
          <p className="text-gray-600">{post.description}</p>
          <p className="mt-2 text-sm text-gray-500">Publié le {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>

        <Image
          src={`https://${process.env.NEXT_PUBLIC_API_DOMAIN}${post.thumbnails.data.attributes.url}`}
          alt={post.thumbnails.data.attributes.alternativeText ?? post.thumbnails.data.attributes.name}
          className="mb-6 rounded-lg"
          layout="fill"
          objectFit="cover"
        />

        {content.map((element) => (
          <ComponentAdapter key={element.__component + "-" + element.id} data={element} component={element.__component} />
        ))}
      </article>
    </main>
  );
}
