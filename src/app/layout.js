import { Inter } from "next/font/google"
import { Provider } from '@/app/provider'
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <Provider>
            <html lang="fr">
                <head>
                    <title>Blog | Doowup Agence Digitale</title>
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
