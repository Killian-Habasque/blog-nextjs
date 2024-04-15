"use client";
import ComponentAdapter from "@/hooks/componentAdapter";

export default function Post({ post, content }) {
  return (
    <main>
      <h1>{post.title}</h1>
      {content.map((element) => (
        <ComponentAdapter key={element.__component + "-" + element.id} data={element} component={element.__component} />
      ))}
    </main>
  );
}
