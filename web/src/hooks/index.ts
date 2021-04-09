import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseDarkModeTuple = readonly [boolean, Dispatch<SetStateAction<boolean>>];

export function useDarkMode(): UseDarkModeTuple {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  return [darkMode, setDarkMode];
}
