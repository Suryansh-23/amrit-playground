"use client";

import { PopoverProps } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useToast } from "@/components/ui/use-toast";
import { Programs } from "@/data/presets";

interface ProgramSelectorProps extends PopoverProps {
  presets: Programs;
  loadProgram: (arg0: keyof typeof Programs) => void;
  selectedPreset: string;
  setSelectedPreset: (arg0: string) => void;
}

export function ProgramSelector({
  presets,
  loadProgram,
  selectedPreset,
  setSelectedPreset,
  ...props
}: ProgramSelectorProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Load a program..."
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
        >
          {selectedPreset ? selectedPreset : "Load a program..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search programs..." />
          <CommandEmpty>No presets found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {Object.keys(presets).map((name: string) => (
              <CommandItem
                key={name}
                onSelect={() => {
                  setSelectedPreset(name);
                  setOpen(false);
                  loadProgram(name as keyof typeof Programs);
                }}
              >
                {name}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedPreset === name ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup className="pt-0">
            <CommandItem
              onSelect={() => {
                toast({
                  title: "Add some Sample Programs!",
                  description:
                    "Go add some more sample programs for other to see. Go over to the Github Repo and submit a PR",
                });
              }}
            >
              And many more...
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
