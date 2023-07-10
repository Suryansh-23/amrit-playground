import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Code2, Github, Twitter } from "lucide-react";
import { Lexend } from "next/font/google";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
const lexend = Lexend({ subsets: ["latin"] });

const Hero = () => {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 dots-bg">
            <motion.div
                className="z-10 max-w-2xl px-5 xl:px-0 hero-content"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}>
                <motion.a
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    href="https://twitter.com/SuriPuri23"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200">
                    <Twitter className="h-5 w-5 text-[#1d9bf0]" />
                    <p className="text-sm font-semibold text-[#1d9bf0]">
                        Introducing Amrit
                    </p>
                </motion.a>
                <motion.h1
                    className={clsx(
                        "bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[6rem]",
                        lexend.className
                    )}
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    <Balancer ratio={0.1} autoFocus>
                        Programming now in{" "}
                        {/* <span className="line-through decoration-slate-600"> */}
                        <span className="line-through decoration-gray-700">
                            English
                        </span>{" "}
                        <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 bg-clip-text">
                            हिन्दी
                        </span>{" "}
                    </Balancer>
                </motion.h1>
                <motion.p
                    className="mt-6 text-center font-medium text-gray-700 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    <Balancer ratio={0.6}>
                        Programming is best understood when it is in your own
                        language.{" "}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className="hidden cursor-default underline decoration-dotted underline-offset-2 transition-colors hover:text-gray-800 sm:block">
                                        Wanna see under the hood?
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="flex flex-col items-center justify-center space-y-3 p-10 text-center sm:max-w-xs">
                                        <p className="text-sm text-gray-700">
                                            Amrit is an Interpreted Language
                                            built on top of GoLang
                                        </p>
                                        <Link
                                            href="https://github.com/Suryansh-23/amrit"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="mt-4 group mx-auto flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black">
                                            <Github className="h-5 w-5 mr-2 text-white transition-all group-hover:text-black" />
                                            Github Repo
                                        </Link>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Balancer>
                </motion.p>
                <motion.div
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="-mb-4">
                    <a href="#playground">
                        <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black">
                            <Code2 className="h-5 w-5 text-white group-hover:text-black" />
                            <p>Start Coding</p>
                        </button>
                    </a>
                </motion.div>
            </motion.div>
            <div className="absolute w-full h-full top-0 left-0 z-0 mask" />
        </main>
    );
};

export default Hero;
