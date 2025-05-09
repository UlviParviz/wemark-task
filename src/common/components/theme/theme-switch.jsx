"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative flex items-center w-[54px]">
      <Image
        src={theme === "dark" ? "/icons/moon.svg" : "/icons/sun.svg"}
        width={18}
        height={18}
        alt="Theme icon"
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 ${
          theme === "dark" ? "left-1" : "right-1"
        }`}
      />

      <button
        onClick={handleThemeToggle}
        className={`w-14 h-8 rounded-full p-1 flex items-center transition-all cursor-pointer bg-black ${
          theme === "dark" ? "justify-end" : "justify-start"
        } ml-auto mr-auto`}
      >
        <div className="w-6 h-6 rounded-full bg-white" />
      </button>
    </div>
  );
};
