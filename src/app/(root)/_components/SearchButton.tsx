"use client";

import { Search } from "lucide-react";
import { CommandDialog } from "@/components/ui/command";
import { useEffect, useState } from "react";

export function SearchButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-800 hover:border-blue-500/50 bg-gray-900/50 hover:bg-gray-800/50 transition-all text-sm text-gray-400 hover:text-white"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="text-xs bg-gray-800/50 px-2 py-0.5 rounded border border-gray-700/50">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="p-4 text-center text-gray-400">
          Search functionality coming soon
        </div>
      </CommandDialog>
    </>
  );
}
