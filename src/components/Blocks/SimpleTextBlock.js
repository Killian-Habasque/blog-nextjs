import {renderers} from "@/hooks/componentAdapter";
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'));


function SimpleTextBlock(props) {
    const { text } = props

    return (
        <div className="simple-text-block p-2 mb-2">
            <ReactMarkdown components={renderers}>
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default SimpleTextBlock