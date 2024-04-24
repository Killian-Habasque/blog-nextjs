import Image from "next/image"

function SimpleImageBlock(props) {
    const { image, size } = props

    return (
        <div className={`simple-image-block size--${size}`}>
            <div className="relative h-96 mb-2 rounded-lg overflow-hidden">
                <Image
                    src={"https://" + process.env.NEXT_PUBLIC_API_DOMAIN + image.data.attributes.url}
                    alt={image.data.attributes.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                />
            </div>
        </div>

    )
}

export default SimpleImageBlock