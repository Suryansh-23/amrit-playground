"use client";

import "@/app/globals.css";
import Hero from "@/components/hero";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Playground from "@/components/playground";
import highlight from "@/public/highlight.svg";
import { AnimatePresence, motion } from "framer-motion";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Script from "next/script";
import BentoGrid from "@/components/bento-grid";

export default function Home() {
  return (
    <>
      <Script
        src="/wasm_exec.js"
        onLoad={() => {
          if (!WebAssembly) {
            console.warn("WebAssembly is not supported in your browser");
          }
        }}
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Hero />
          <BentoGrid />
          <main id="playground" className="mt-20">
            <h1 className=" font-display font-display relative mb-10 text-center text-3xl font-bold tracking-[-0.02em] text-stone-700 drop-shadow-sm md:text-7xl md:leading-[6rem]">
              C&apos;mon
              <span className="relative mx-8">
                try
                <Image
                  width={100}
                  className="absolute left-1/2 top-1/2 z-10 w-40 origin-center select-none opacity-80"
                  style={{
                    transform: "translate(-50%, -40%) scale(1.75)",
                  }}
                  src={highlight}
                  alt={""}
                />
              </span>
              it out!
            </h1>
            <div
              className="py-20"
              style={{
                backgroundImage: "url('/playground-bg.jpg')",
              }}
            >
              <Playground />
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
