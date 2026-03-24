"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? (
        <HugeiconsIcon icon={Sun} strokeWidth={2} />
      ) : (
        <HugeiconsIcon icon={Moon} strokeWidth={2} />
      )}
      <span className=" capitalize">{resolvedTheme}</span> theme
    </DropdownMenuItem>
  );
}
