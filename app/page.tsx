"use client";

import "@/app/globals.css";
import Hero from "@/components/hero";

import Playground from "@/components/playground";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function Home() {
    return (
        <>
            <Hero />
            <Playground />
        </>
    );
}

