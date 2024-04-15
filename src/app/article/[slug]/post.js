"use client";
import ComponentAdapter from "@/hooks/componentAdapter";

export default function Post({ content }) {
  console.log(content)
    return (
        <main>
            <br />
            <p>Page blog</p>
            <br />
            {
              content.map((element) => (
                <>
                {console.log(element)}

                 <ComponentAdapter key={element.__component + "-" + element.id} data={element} component={element.__component} />
                </>
              ))
            }

        </main>
    );
}
