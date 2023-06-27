"use client";

import { Dialog } from "@radix-ui/react-dialog";
import { Flag, Github, MoreHorizontal, Trash } from "lucide-react";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useState } from "react";

export function PresetActions({
    currentPreset,
    deletePreset,
}: {
    currentPreset: string;
    deletePreset: (arg0: string) => void;
}) {
    const [open, setIsOpen] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary">
                        <span className="sr-only">Actions</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setIsOpen(true)}>
                        <Flag className="mr-2 h-4 w-4" />
                        Report a Bug
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onSelect={() => setShowDeleteDialog(true)}
                        className="text-red-600"
                    >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete preset
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={open} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Report a Bug</DialogTitle>
                    </DialogHeader>
                    <div className="pt-2">
                        Did you see a bug in this playground, feel free to
                        report a issue over at the Github Repo. If you have a
                        fix, feel free to open a pull request.
                    </div>
                    <DialogFooter>
                        <Link
                            href="https://github.com/Suryansh-23/amrit-playground/issues/new"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Button>
                                <Github className="h-5 w-5 mr-2 text-white transition-all group-hover:text-black" />
                                Github Repo
                            </Button>
                        </Link>
                        <Button
                            variant="secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <AlertDialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This preset will no
                            longer be accessible by you or others you&apos;ve
                            shared it with.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button
                            variant="destructive"
                            onClick={() => {
                                setShowDeleteDialog(false);
                                deletePreset(currentPreset);
                                toast({
                                    description:
                                        "This preset has been deleted.",
                                });
                            }}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
