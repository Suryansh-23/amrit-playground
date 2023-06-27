"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { History, Play } from "lucide-react";

import "@/app/globals.css";
import { CodeViewer } from "@/components/code-viewer";
import { PresetActions } from "@/components/preset-actions";
import { PresetSave } from "@/components/preset-save";
import { PresetSelector } from "@/components/preset-selector";
import { PresetShare } from "@/components/preset-share";
import { presets } from "@/data/presets";

import CodeEditor from "@/components/code-editor";
import amrit, { builtins, keywords } from "@/data/amrit";
import clsx from "clsx";
import { Lexend } from "next/font/google";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState } from "react";
import Badges from "./badges";
import Tips from "./tips";

const lexend = Lexend({ subsets: ["latin"] });
const programmingTips = [
    "Keep your code DRY (Don't Repeat Yourself). ✂️",
    "Follow the KISS principle (Keep It Simple, Stupid). 💡",
    "Don't forget to use the Purn Viraam or '|' at the end. 🚦",
    "Write code for humans, not just for machines. 👥💻",
    "Document your code to make it easier for others (and yourself) to understand. 📚",
    "Take breaks and step away from your code when you're stuck. ☕️🌳",
    "Collaborate and communicate with your team members for better code quality. 🤝👩‍💻👨‍💻",
    "Refactor your code regularly to keep it clean and maintainable. 🧹",
    "Don't be afraid to ask for help when you're facing challenges. 🙋‍♂️🙋‍♀️",
    "Keep learning and stay curious about new programming concepts. 📚💡",
    "Understand the problem thoroughly before jumping into writing code. 🤔💭",
    "Use meaningful variable and function names for self-explanatory code. 📝",
    "Break complex problems into smaller, manageable tasks. 🔨",
    "Focus on writing code that is robust and handles edge cases gracefully. ⚡️",
    "Think about code efficiency and optimize when necessary. 🏎️",
    "Don't be afraid to make mistakes. It's part of the learning process. 🙌❌",
    "Don't forget to have fun while coding! 😄🎉",
];

export type playgroundData = {
    code: string;
    note: string;
    output: string;
};

Prism.languages.amrit = amrit;
export default function Playground() {
    const [data, setData] = useState<playgroundData>({
        code: "",
        note: "",
        output: "",
    });
    return (
        <div className="w-4/5 mx-auto rounded-[2rem]">
            <div className="glass p-6 rounded-2xl">
                <div className="hidden h-full flex-col md:flex rounded-2xl bg-white">
                    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                        <h2
                            className={clsx(
                                "text-xl font-semibold",
                                lexend.className
                            )}
                        >
                            Playground
                        </h2>
                        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                            <PresetSelector presets={presets} />
                            <PresetSave />
                            <div className="hidden space-x-2 md:flex">
                                <CodeViewer />
                                <PresetShare />
                            </div>
                            <PresetActions />
                        </div>
                    </div>
                    <Separator />
                    <Tabs defaultValue="complete" className="flex-1">
                        <div className="container h-full py-6">
                            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                                <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                    <div className="">
                                        <h1 className="text-lg mb-1">
                                            Keywords
                                        </h1>
                                        <Badges
                                            list={keywords}
                                            badgeClass="pt-[6px]"
                                        />
                                    </div>
                                    <Separator />
                                    <div className="">
                                        <h1 className="text-lg mb-1">
                                            Builtins
                                        </h1>
                                        <Badges list={builtins} />
                                    </div>
                                    <Separator />
                                    <div className="">
                                        <h1 className="text-lg mb-1">Tips</h1>
                                        <Tips tips={programmingTips} />
                                    </div>
                                </div>
                                <div className="mt-0 border-0 p-0">
                                    <div className="flex flex-col space-y-4">
                                        <div className="grid h-full gap-6 lg:grid-cols-2">
                                            <div className="flex flex-col space-y-4">
                                                {/* <Splitter
                                                    style={{ height: "300px" }}
                                                > */}
                                                {/* <SplitterPanel className="flex align-items-center justify-content-center"> */}
                                                <div className="flex flex-col space-y-2">
                                                    <label
                                                        className="text-lg"
                                                        htmlFor="input"
                                                    >
                                                        Program
                                                    </label>
                                                    <CodeEditor
                                                        data={data}
                                                        setData={setData}
                                                    />
                                                </div>
                                                {/* </SplitterPanel>
                                                    <SplitterPanel className="flex align-items-center justify-content-center"> */}
                                                <div className="flex flex-col space-y-2">
                                                    <Label
                                                        className="text-lg"
                                                        htmlFor="notes"
                                                    >
                                                        Notes
                                                    </Label>
                                                    <Textarea
                                                        id="notes"
                                                        placeholder="Some Notes for the program"
                                                    />
                                                </div>
                                                {/* </SplitterPanel> */}
                                                {/* </Splitter> */}
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <label
                                                    className="text-lg"
                                                    htmlFor="output"
                                                >
                                                    Output
                                                </label>
                                                <div
                                                    id="output"
                                                    className="mt-[21px] min-h-[300px] rounded-md border bg-muted lg:min-h-[550px] h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button className="text-lg">
                                                <Play className="h-5 w-5 text-white mx-1" />
                                                Run
                                            </Button>
                                            {/* <Button variant="secondary">
                                                <span className="sr-only">
                                                    Show history
                                                </span>
                                                <History className="h-4 w-4" />
                                            </Button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
