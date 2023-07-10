import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amrit - Programming now in हिन्दी",
    description:
        "Why not code in your mother tongue हिन्दी, make it easy for everyone to learn programming.",
    generator: "Next.js",
    applicationName: "Amrit Playground",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Amrit",
        "Programming",
        "Hindi",
        "हिन्दी",
        "Devanagari",
        "देवनागरी",
        "Programming in Hindi",
        "Programming in हिन्दी",
        "Programming in Devanagari",
        "Programming in देवनागरी",
        "Suryansh",
        "Chauhan",
    ],
    authors: {
        name: "Suryansh Chauhan",
        url: "https://github.com/Suryansh-23/",
    },
    colorScheme: "light",
    creator: "Suryansh Chauhan",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://amrit-playground.vercel.app/",
        title: "Amrit - Programming now in हिन्दी",
        description:
            "Why not code in your mother tongue हिन्दी, make it easy for everyone to learn programming.",
        siteName: "Amrit Playground",
    },
    twitter: {
        card: "summary_large_image",
        title: "Amrit - Programming now in हिन्दी",
        description:
            "Why not code in your mother tongue हिन्दी, make it easy for everyone to learn programming.",
        creator: "@SuriPuri23",
        creatorId: "947709391750307840",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem>
                    {children}
                    <Toaster />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}

