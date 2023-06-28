"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Eraser, Play } from "lucide-react";

import "@/app/globals.css";
import { PresetActions } from "@/components/preset-actions";
import { PresetSave } from "@/components/preset-save";
import { PresetShare } from "@/components/preset-share";
import { ProgramSelector } from "@/components/program-selector";
import { Programs } from "@/data/presets";

import Badges from "@/components/badges";
import CodeEditor from "@/components/code-editor";
import Tips from "@/components/tips";
import { useToast } from "@/components/ui/use-toast";
import amrit, { builtins, keywords } from "@/data/amrit";
import clsx from "clsx";
import { decompressFromEncodedURIComponent } from "lz-string";
import { Lexend } from "next/font/google";
import { useSearchParams } from "next/navigation";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import useClipboard from "react-use-clipboard";

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
const Playground = () => {
    const searchParams = useSearchParams();
    const play = searchParams.get("play");

    let tmp = {
        code: Object.values(Programs)[0],
        note: "",
        output: "",
    };
    if (localStorage.getItem("playground")) {
        tmp = JSON.parse(localStorage.getItem("playground") as string);
    }
    if (play) {
        tmp = JSON.parse(decompressFromEncodedURIComponent(play as string));
    }

    let localProgramPresets: Programs = Programs;
    if (localStorage.getItem("playground-programs")) {
        localProgramPresets = JSON.parse(
            localStorage.getItem("playground-programs") as string
        ) as Programs;
    }

    const [data, setData] = useState<playgroundData>(tmp);
    const [programPresets, setProgramPresets] =
        useState<Programs>(localProgramPresets);
    const [selectedPreset, setSelectedPreset] = useState<string>("");
    const [, copyCode] = useClipboard(data.code);
    const [, copyOutput] = useClipboard(data.output);
    const { toast } = useToast();

    const deletePreset = (name: string) => {
        const { [name]: _, ...rest } = programPresets;
        setProgramPresets(rest);
        localStorage.setItem("playground-programs", JSON.stringify(rest));

        const tmp = Object.keys(rest)[0] as keyof typeof Programs;
        loadProgram(tmp);
        setSelectedPreset(tmp);
    };

    const saveProgramPreset = (name: string) => {
        console.log(name, data.code);
        const tmp = structuredClone(programPresets);
        tmp[name] = data.code;
        setProgramPresets(tmp);
        localStorage.setItem(
            "playground-programs",
            JSON.stringify(programPresets)
        );
    };
    const loadProgram = (programName: keyof typeof Programs) => {
        setData({
            ...data,
            code: programPresets[programName],
        });
        localStorage.setItem("playground", JSON.stringify(data));
    };
    const runScriptModeCode = (keyboardEvent: KeyboardEvent | undefined) => {
        keyboardEvent?.preventDefault();
        console.log("generating output");

        try {
            setData({
                ...data,
                // @ts-ignore-next-line
                output: ScriptMode(data.code),
            });
            localStorage.setItem("playground", JSON.stringify(data));
            toast({
                title: "Code Executed",
                description: "The code has been executed",
            });
        } catch {
            toast({
                title: "Error",
                description: "There was an error executing the code",
                variant: "destructive",
            });
        }
    };

    useHotkeys("ctrl+enter", runScriptModeCode);

    useEffect(() => {
        const loadWasm = async () => {
            try {
                const response = await fetch("/main.wasm");
                const buffer = await response.arrayBuffer();

                const go = new Go();
                const mod = await WebAssembly.instantiate(
                    buffer,
                    go.importObject
                );

                go.run(mod.instance);
            } catch (error) {
                console.error("Failed to load Wasm file:", error);
            }
        };

        loadWasm();
    }, []);

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
                            <ProgramSelector
                                presets={programPresets}
                                loadProgram={loadProgram}
                                selectedPreset={selectedPreset}
                                setSelectedPreset={setSelectedPreset}
                            />
                            <PresetSave saveProgramPreset={saveProgramPreset} />
                            <div className="hidden space-x-2 md:flex">
                                <PresetShare data={data} />
                            </div>
                            <PresetActions
                                currentPreset={selectedPreset}
                                deletePreset={deletePreset}
                            />
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
                                                    <div className="flex felx-row justify-between">
                                                        <label
                                                            className="text-lg"
                                                            htmlFor="input"
                                                        >
                                                            Program
                                                        </label>
                                                        <Button
                                                            onClick={() => {
                                                                copyCode();
                                                                toast({
                                                                    title: "Copied to clipboard",
                                                                    description:
                                                                        "The code has been copied to your clipboard",
                                                                });
                                                            }}
                                                        >
                                                            <Copy className="h-4 w-4 mx-1" />
                                                            Copy
                                                        </Button>
                                                    </div>
                                                    <CodeEditor
                                                        data={data}
                                                        setData={setData}
                                                        autofocus
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
                                                        value={data.note}
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                note: e.target
                                                                    .value,
                                                            });
                                                            localStorage.setItem(
                                                                "playground",
                                                                JSON.stringify(
                                                                    data
                                                                )
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                {/* </SplitterPanel> */}
                                                {/* </Splitter> */}
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex felx-row justify-between">
                                                    <label
                                                        className="text-lg"
                                                        htmlFor="input"
                                                    >
                                                        Output
                                                    </label>
                                                    <Button
                                                        onClick={() => {
                                                            copyOutput();
                                                            toast({
                                                                title: "Copied to clipboard",
                                                                description:
                                                                    "The output has been copied to your clipboard",
                                                            });
                                                        }}
                                                    >
                                                        <Copy className="h-4 w-4 mx-1" />
                                                        Copy
                                                    </Button>
                                                </div>
                                                <div
                                                    id="output"
                                                    className="mt-[21px] min-h-[300px] rounded-md border bg-muted lg:min-h-[550px] h-full font-mono p-2"
                                                >
                                                    {data.output}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                className="text-lg"
                                                onClick={() => {
                                                    runScriptModeCode(
                                                        undefined
                                                    );
                                                }}
                                            >
                                                <Play className="h-5 w-5 text-white mx-1" />
                                                Run
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => {
                                                    setData({
                                                        ...data,
                                                        output: "",
                                                    });
                                                    toast({
                                                        title: "Console Cleared",
                                                        description:
                                                            "The console has been cleared",
                                                    });
                                                }}
                                            >
                                                <Eraser className="h-4 w-4 mx-1" />
                                                Clear Console
                                            </Button>
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
};

export default Playground;
