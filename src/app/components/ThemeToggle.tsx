"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ThemeToggle(){
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return(
        <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1 rounded-md transition-colors duration-300"
    >
      <Image
        src={theme === "dark" ? "/sun.svg" : "/moon.svg"} 
        alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
        width={24}
        height={24}
        aria-label="Toggle theme"
        className="cursor-pointer"
      />
    </button>
  );
}