import styles from './MultipleFramedTextBlock.module.css';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'));


function MultipleFramedTextBlock(props) {
    const { framedText } = props

    return (
        <div className={`${styles['multiple-framed-text-block']}`}>

            {framedText.map(({ id, text }) => (
                <div key={id} className={`${styles['col-block']}`}>
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
                </div>
            ))}

        </div>
    )
}

export default MultipleFramedTextBlock