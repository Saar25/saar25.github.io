import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'This is my portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
