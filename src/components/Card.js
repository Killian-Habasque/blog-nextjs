import Image from "next/image"
import Link from "next/link"

export const Card = ({ slug, title, desc, img }) => {
    return (
        <div className="card__container">
            <Link href={'/article/' + slug}>
                <div className="img__group">
                    <Image src={'https://' + process.env.NEXT_PUBLIC_API_DOMAIN + img.url} alt={img.alternativeText ?? "doowup"} width={200}
                        height={100} />
                </div>
                <div className="txt__group">
                    <h2 className="txt__subtitle">{title}</h2>
                    <p className="txt__paragraph">{desc}</p>
                    <div className="txt__cta">Voir plus ...</div>
                </div>
            </Link>
        </div>
    );
};




