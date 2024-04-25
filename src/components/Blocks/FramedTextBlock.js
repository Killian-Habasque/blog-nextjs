import ReactMarkdown from 'react-markdown'
import { renderers } from "@/hooks/markdownAdapter";

function FramedTextBlock(props) {
    const { text, size } = props

    return (
        <div className={`framed-text-block size--${size} mb-2`}>
            <div className="col-block bg-gray-100 p-4 md:p-6 rounded-lg w-full md:w-auto flex-1">
                <ReactMarkdown components={renderers}>
                    {text}
                </ReactMarkdown>
            </div>
        </div >
    )
}
export default FramedTextBlock