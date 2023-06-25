"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { History } from "lucide-react";

import "@/app/globals.css";
import { CodeViewer } from "@/components/code-viewer";
import { PresetActions } from "@/components/preset-actions";
import { PresetSave } from "@/components/preset-save";
import { PresetSelector } from "@/components/preset-selector";
import { PresetShare } from "@/components/preset-share";
import { presets } from "@/data/presets";
import Image from "next/image";

import CodeEditor from "@/components/code-editor";
import amrit from "@/data/amrit";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState } from "react";

export type playgroundData = {
    code: string;
    note: string;
    output: string;
};

Prism.languages.amrit = amrit;
export default function Playground() {
    const [code, setCode] = useState<string>("");
    const [data, setData] = useState<playgroundData>({
        code: "",
        note: "",
        output: "",
    });
    return (
        <div className="w-11/12 mx-auto rounded-xl border ring-8 ring-slate-600">
            <div className="md:hidden">
                <Image
                    src="/examples/playground-light.png"
                    width={1280}
                    height={916}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/playground-dark.png"
                    width={1280}
                    height={916}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-col md:flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg font-semibold">Playground</h2>
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
                        <div className="grid h-full items-stretch gap-6">
                            <div className="mt-0 border-0 p-0">
                                <div className="flex flex-col space-y-4">
                                    <div className="grid h-full gap-6 lg:grid-cols-2">
                                        <div className="flex flex-col space-y-4">
                                            {/* <Splitter
                                                    style={{ height: "300px" }}
                                                > */}
                                            {/* <SplitterPanel className="flex align-items-center justify-content-center"> */}
                                            <div className="flex flex-1 flex-col space-y-2">
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
                                                <Label htmlFor="instructions">
                                                    Note
                                                </Label>
                                                <Textarea
                                                    id="instructions"
                                                    placeholder="Some Notes for the program"
                                                />
                                            </div>
                                            {/* </SplitterPanel> */}
                                            {/* </Splitter> */}
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <label
                                                className="text-lg"
                                                htmlFor="div"
                                            >
                                                Output
                                            </label>
                                            <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px] h-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button>Submit</Button>
                                        <Button variant="secondary">
                                            <span className="sr-only">
                                                Show history
                                            </span>
                                            <History className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
