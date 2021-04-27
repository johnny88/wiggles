import { useEffect, useState, useCallback } from "react";

export function useDarkMode() {
  const [isDark, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("darkMode", isDark.toString());
    const className = "dark";
    const element = window.document.body;
    if (isDark) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [isDark]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!isDark);
  }, [setDarkMode, isDark]);

  return [isDark, toggleDarkMode] as const;
}
