
import { Inter } from "next/font/google"
import {
    Provider
} from '@/app/blog/provider'
const inter = Inter({ subsets: ["latin"] });
import '../../styles/globals.css';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
    title: 'Blog',
    openGraph: {
        title: 'Blog',
        description: 'Generated by create next app',
        image: '/path/to/your/image.jpg',
        url: 'https://yourwebsite.com'
    },
}

export default function RootLayout({ children }) {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: "test",
        image: "test",
        description: "test",
    }

    return (
        <Provider>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                </body>

            </html>
        </Provider>
    );
}
