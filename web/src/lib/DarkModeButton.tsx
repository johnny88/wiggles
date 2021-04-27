import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useDarkMode } from "@/hooks";

export function DarkModeButton() {
  const [isDark, setDarkMode] = useDarkMode();
  return (
    <button
      className="h-8 w-8"
      onClick={() => {
        setDarkMode();
      }}
    >
      {isDark && <SunIcon />}
      {!isDark && <MoonIcon />}
    </button>
  );
}
