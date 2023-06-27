"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Script
                src="/wasm_exec.js"
                onLoad={() => {
                    if (!WebAssembly) {
                        console.warn(
                            "WebAssembly is not supported in your browser"
                        );
                    }
                }}
            />
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                >
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {children}
                            <Toaster />
                        </motion.div>
                    </AnimatePresence>
                </ThemeProvider>
            </body>
        </html>
    );
}

