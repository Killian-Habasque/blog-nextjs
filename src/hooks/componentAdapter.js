import SimpleTextBlock from "@/components/Blocks/SimpleTextBlock";
import SimpleImageBlock from "@/components/Blocks/SimpleImageBlock";
import FramedTextBlock from "@/components/Blocks/FramedTextBlock";
import MultipleFramedTextBlock from "@/components/Blocks/MultipleFramedTextBlock";

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