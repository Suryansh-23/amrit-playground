import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { compressToEncodedURIComponent } from "lz-string";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import useClipboard from "react-use-clipboard";
import { playgroundData } from "./playground";

interface PresetShareProps {
    data: playgroundData;
}

export function PresetShare({ data }: PresetShareProps) {
    const [shareURL, setShareURL] = useState<string>("");
    const [, copyShareURL] = useClipboard(shareURL);
    const { toast } = useToast();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShareURL(
                            `${
                                window.location.href
                            }?play=${compressToEncodedURIComponent(
                                JSON.stringify(data)
                            )}`
                        );
                    }}>
                    Share
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[420px]">
                <div className="flex flex-col space-y-2 text-center align-middle sm:text-left">
                    <h3 className="text-lg font-semibold self-center">
                        Share Playground
                    </h3>
                    <div className="flex flex-col items-center pb-4">
                        <h1 className="text-base font-medium mb-3">
                            Scan QR Code
                        </h1>
                        <div
                            id="svg-container"
                            className="ring-8 ring-gray-200 rounded">
                            <QRCodeSVG
                                value={shareURL}
                                size={128}
                                bgColor={"#ffffff"}
                                fgColor={"#000000"}
                                level="L"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Separator className="w-[45%]" />
                        <div className="text-center">Or</div>
                        <Separator className="w-[45%]" />
                    </div>
                    <h1 className="text-base font-medium self-center">
                        Share a Link
                    </h1>
                    <p className="text-sm text-muted-foreground self-center">
                        Anyone with this link can open the playground.
                    </p>
                </div>
                <div className="flex items-center space-x-2 pt-2">
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
                        onClick={() => {
                            copyShareURL();
                            toast({
                                title: "Link Copied!",
                                description: "You can now share the link.",
                            });
                        }}>
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
