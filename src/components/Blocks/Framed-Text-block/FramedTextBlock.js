import styles from './FramedTextBlock.module.css';
import ReactMarkdown from 'react-markdown'


function FramedTextBlock(props) {
    const {text, size} = props

    return (
        <div className={`${styles['framed-text-block']} size--${size}`}>
        <ReactMarkdown>
            {text}
        </ReactMarkdown>
        </div>
    )
}

export default FramedTextBlock