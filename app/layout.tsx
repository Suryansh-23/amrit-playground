"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Script from "next/script";

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
                        </motion.div>
                    </AnimatePresence>
                </ThemeProvider>
            </body>
        </html>
    );
}

