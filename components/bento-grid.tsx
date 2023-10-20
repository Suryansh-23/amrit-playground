import React from "react";
import Image from "next/image";
import { Lexend } from "next/font/google";
import clsx from "clsx";
import { Github, GithubIcon, MoveUpRight } from "lucide-react";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });

const BentoGrid = () => (
  <div className="bento mx-20 my-20 grid auto-cols-max grid-cols-1 gap-4 md:mx-40 md:my-40 md:grid-cols-5">
    <div className="relative rounded-[1rem] bg-gray-100 text-center md:col-span-4">
      <div
        className={clsx(
          "md: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold md:text-2xl lg:text-3xl",
          lexend.className,
        )}
      >
        <h1>For the ❤️ of Programming.</h1>
        <Link
          href="https://github.com/Suryansh-23/amrit"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h2 className="md: inline pt-3 text-base font-normal underline decoration-dotted underline-offset-2 md:text-lg lg:text-xl">
            Go Show Some Love &#8599;
          </h2>
        </Link>
      </div>
    </div>
    <div className="relative rounded-[1rem] bg-black text-center text-white">
      <div
        className={clsx(
          "md: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold md:text-xl lg:text-2xl",
          lexend.className,
        )}
      >
        <h1>100% Offline!</h1>
      </div>
    </div>
    <div
      className="relative rounded-[1rem] text-center md:col-span-3"
      style={{ background: "#69d7e2" }}
    >
      <div
        className={clsx(
          "md: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold md:text-2xl lg:text-3xl",
          lexend.className,
        )}
      >
        <h1>Written in Go</h1>
        <Link
          href="https://github.com/Suryansh-23/amrit"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h2 className="inline pt-3 text-base font-normal underline decoration-dotted underline-offset-2 md:text-lg lg:text-xl">
            GoLang &#8599;
          </h2>
        </Link>
      </div>
      <div className="h-full w-[11rem] overflow-hidden p-3">
        <Image
          src="/gopher.svg"
          alt=""
          fill={true}
          className="bento-image -ml-[40%] md:-ml-[55%]"
        />
      </div>
    </div>
    <div className="relative rounded-[1rem] border-8 border-gray-100 bg-gray-100 text-center md:col-span-2">
      <h1
        className={clsx(
          "md: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold md:text-2xl lg:text-3xl",
          lexend.className,
        )}
      >
        4500+ Lines of Code!
      </h1>
    </div>
  </div>
);

export default BentoGrid;
