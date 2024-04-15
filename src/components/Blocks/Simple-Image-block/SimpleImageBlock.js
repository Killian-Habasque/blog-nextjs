import styles from './SimpleImageBlock.module.css';
import Image from "next/image"

function SimpleImageBlock(props) {
    const { image, size } = props

    return (
        <div className={`${styles['simple-image-block']} size--${size}`}>
            <Image width={200} height={100} src={"https://" + process.env.NEXT_PUBLIC_API_DOMAIN + image.data.attributes.url} alt={image.data.attributes.name} />
        </div>
    )
}

export default SimpleImageBlock