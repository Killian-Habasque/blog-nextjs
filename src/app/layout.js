import { Inter } from "next/font/google"
import {
    Provider
} from '@/app/provider'
const inter = Inter({ subsets: ["latin"] });
import '@/styles/globals.css';

export default function RootLayout({ children }) {
    return (
        <Provider>
            <html lang="fr">
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </Provider>
    );
}
