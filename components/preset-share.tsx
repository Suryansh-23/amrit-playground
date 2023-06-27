import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { compressToEncodedURIComponent } from "lz-string";
import { playgroundData } from "./playground";
import { useState } from "react";
import useClipboard from "react-use-clipboard";

interface PresetShareProps {
    data: playgroundData;
}

export function PresetShare({ data }: PresetShareProps) {
    const [shareURL, setShareURL] = useState<string>("");
    const [, copyShareURL] = useClipboard(shareURL);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShareURL(
                            `http://localhost:3000/?play=${compressToEncodedURIComponent(
                                JSON.stringify(data)
                            )}`
                        );
                    }}
                >
                    Share
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[520px]">
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-semibold">Share preset</h3>
                    <p className="text-sm text-mut                                                                                                             ed-foreground">
                        Anyone who has this link and an OpenAI account will be
                        able to view this.
                    </p>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue={shareURL}
                            readOnly
                            className="h-9"
                        />
                    </div>
                    <Button
                        type="submit"
                        size="sm"
                        className="px-3"
                        onClick={copyShareURL}
                    >
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
