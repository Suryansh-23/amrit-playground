import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function PresetSave({
    saveProgramPreset,
}: {
    saveProgramPreset: (arg0: string, arg1: string) => void;
}) {
    const [presetData, setPresetData] = useState<{
        name: string;
        description: string;
    }>({ name: "", description: "" });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Save</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Save preset</DialogTitle>
                    <DialogDescription>
                        This will save the current playground state as a preset
                        which you can access later or share with others.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={presetData.name}
                            onChange={(e) => {
                                setPresetData({
                                    ...presetData,
                                    name: e.target.value,
                                });
                            }}
                            autoFocus
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            value={presetData.description}
                            onChange={(e) => {
                                setPresetData({
                                    ...presetData,
                                    description: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={() => {
                            saveProgramPreset(
                                presetData.name,
                                presetData.description
                            );
                        }}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
