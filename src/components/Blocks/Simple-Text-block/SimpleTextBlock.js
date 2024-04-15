
import styles from './SimpleTextBlock.module.css';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'));


function SimpleTextBlock(props) {
    const {text} = props

    return (
        <div className={`${styles['simple-text-block']}`}>
        <ReactMarkdown>
            {text}
        </ReactMarkdown>
        </div>
    )
}

export default SimpleTextBlock