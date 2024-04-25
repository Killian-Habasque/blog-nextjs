import { Inter } from "next/font/google"
import { Provider } from '@/app/provider'
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blog | Doowup Agence Digitale",
    description: "Créateurs d'expériences digitales sur mesure. Depuis 2016, Doowup accompagne ses clients PME et Start-Up dans leur stratégie digitale à travers la création de sites internet optimisés pour l'utilisateur et la mise en place de stratégie de référencement.",
    openGraph: {
        title: "Blog | Doowup Agence Digitale",
        description: "Créateurs d'expériences digitales sur mesure. Depuis 2016, Doowup accompagne ses clients PME et Start-Up dans leur stratégie digitale à travers la création de sites internet optimisés pour l'utilisateur et la mise en place de stratégie de référencement.",
        type: 'website',
        site_name: 'Doowup',
    },
    meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Doowup Team' },
    ],
}

export default function RootLayout({ children }) {
    return (
        <Provider>
            <html lang="fr">
                <head>
                    <link rel="manifest" href={"/manifest.json"} />
                    <link rel="manifest" href={"/blog/favicons/manifest.json"} />
                    <link rel="apple-touch-icon" sizes="180x180" href={"/favicons/apple-touch-icon.png"} />
                    <link rel="icon" type="image/png" sizes="32x32" href={"/favicons/favicon-32x32.png"} />
                    <link rel="icon" type="image/png" sizes="16x16" href={"/favicons/favicon-16x16.png"} />
                    <link rel="mask-icon" href={"/favicons/safari-pinned-tab.svg"} color="#005e87" />
                    <link rel="shortcut icon" href={"/favicons/favicon.ico"} />
                    <meta name="msapplication-TileColor" content="#005e87" />
                    <meta name="msapplication-config" content={"/favicons/browserconfig.xml"} />
                    <meta name="theme-color" content="#ffffff" />
                </head>
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </Provider>
    );
}
