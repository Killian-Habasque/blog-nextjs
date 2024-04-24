import SimpleTextBlock from "@/components/Blocks/SimpleTextBlock";
import SimpleImageBlock from "@/components/Blocks/SimpleImageBlock";
import FramedTextBlock from "@/components/Blocks/FramedTextBlock";
import MultipleFramedTextBlock from "@/components/Blocks/MultipleFramedTextBlock";

export const renderers = {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-4 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-3 mb-1">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-2 mb-1">{children}</h4>,
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
};

function ComponentAdapter(props) {
    const { data, component } = props

    switch (component) {
        case 'blog.simple-text-block':
            return (<SimpleTextBlock text={data.text} />)
        case 'blog.simple-image-block':
            return (<SimpleImageBlock image={data.image} size={data.size} />)
        case 'blog.framed-text-block':
            return (<FramedTextBlock text={data.text} size={data.size} />)
        case 'blog.multiple-framed-text-block':
            return (<MultipleFramedTextBlock framedText={data.framedText} />)
    }

}
export default ComponentAdapter