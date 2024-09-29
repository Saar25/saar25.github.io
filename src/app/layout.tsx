import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
    title: "Saar's Portfolio",
    description: 'This is my portfolio',
};

const inter = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    adjustFontFallback: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
