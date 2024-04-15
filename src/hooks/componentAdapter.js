import SimpleTextBlock from "@/components/Blocks/Simple-Text-block/SimpleTextBlock";
import SimpleImageBlock from "@/components/Blocks/Simple-Image-block/SimpleImageBlock";
import FramedTextBlock from "@/components/Blocks/Framed-Text-block/FramedTextBlock";
import MultipleFramedTextBlock from "@/components/Blocks/Multiple-Framed-Text-block/MultipleFramedTextBlock";


function ComponentAdapter(props){
    const { data, component } = props

    switch(component){
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