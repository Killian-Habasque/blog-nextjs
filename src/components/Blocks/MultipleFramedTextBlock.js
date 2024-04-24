import dynamic from 'next/dynamic';
import {renderers} from "@/hooks/componentAdapter";
const ReactMarkdown = dynamic(() => import('react-markdown'));

function MultipleFramedTextBlock(props) {
    const { framedText } = props;

    return (
        <div className="multiple-framed-text-block flex gap-4 mb-2">
            {framedText.map(({ id, text }) => (
                <div key={id} className="bg-gray-100 p-4 md:p-6 rounded-lg w-full md:w-auto flex-1">
                    <ReactMarkdown components={renderers}>
                        {text}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
}

export default MultipleFramedTextBlock;
