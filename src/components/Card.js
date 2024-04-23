import Image from "next/image";
import Link from "next/link";

export const Card = ({ slug, title, desc, img }) => {
    return (
        <div className="card__container shadow-md rounded-lg overflow-hidden bg-white">
            <Link href={'/article/' + slug}>
                    <div className="img__group relative h-40">
                        <Image 
                            src={'https://' + process.env.NEXT_PUBLIC_API_DOMAIN + img.url} 
                            alt={img.alternativeText ?? "doowup"} 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-600">{desc}</p>
                        <div className="mt-4 text-blue-500 hover:text-blue-600">Voir plus ...</div>
                    </div>
            </Link>
        </div>
    );
};
