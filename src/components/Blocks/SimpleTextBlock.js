import ReactMarkdown from 'react-markdown'
import { renderers } from "@/hooks/markdownAdapter";

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