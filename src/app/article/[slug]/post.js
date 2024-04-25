"use client";
import ComponentAdapter from "@/hooks/componentAdapter";
import Image from "next/image";
import Link from 'next/link';

export default function Post({ post, content }) {

  let objectFitValue = 'cover';
  if (post.thumbnailType === 'illustration transparente') {
    objectFitValue = 'contain';
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://doowup.fr/article/${post.slug}`,
    },
    headline: post.title,
    image: `https://${process.env.NEXT_PUBLIC_API_DOMAIN}${post.thumbnails.data.attributes.url}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Doowup',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Doowup',
    },
    description: post.description,
  };

  return (
    <main className="container mx-auto p-4 max-w-screen-lg">
      <Link href={`/`} className={`px-4`}>
        <span className={`btn-link -mx-4 px-2 py-1 rounded bg-blue-500 text-white`}>Retour</span>
      </Link>
      <article className="prose prose-lg my-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="mb-6">
          <p className="text-gray-600">{post.description}</p>
          <p className="mt-2 text-sm text-gray-500">Publié le {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div
          className="relative h-96 mb-6 rounded-lg overflow-hidden"
          style={post.background_color.data ? { backgroundColor: post.background_color.data.attributes.hexCode } : {}}
        >
          <Image
            src={`https://${process.env.NEXT_PUBLIC_API_DOMAIN}${post.thumbnails.data.attributes.url}`}
            alt={post.thumbnails.data.attributes.alternativeText ?? post.thumbnails.data.attributes.name}
            layout="fill"
            objectFit={objectFitValue}
            objectPosition="center"
            className="rounded-lg"
          />
        </div>

        {content.map((element) => (
          <ComponentAdapter key={element.__component + "-" + element.id} data={element} component={element.__component} />
        ))}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
