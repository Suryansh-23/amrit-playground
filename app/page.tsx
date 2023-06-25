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
import Playground from "@/components/playground";

Prism.languages.amrit = amrit;

export default function Home() {
    return (
        <>
            <Playground />
        </>
    );
}

