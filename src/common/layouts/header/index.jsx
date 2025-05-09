"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { LanguageSwitcher, ThemeSwitcher } from "@/common/components";
import { MENU_LINKS } from "@/common/constants/menu-links";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme(); // next-themes hook

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="flex items-center justify-between rounded-[25px] pl-7 pr-4 h-[45px] bg-neutral-900 text-white relative z-50">
      <div className="hidden md:flex gap-[35px] w-[481px] text-[14px]">
        {MENU_LINKS.map((link, index) => (
          <Link
            className="font-semibold flex items-center"
            key={index}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes size={24} color={theme === "dark" ? "white" : "black"} />
        ) : (
          <FaBars size={24} color={theme === "dark" ? "white" : "black"} />
        )}
      </button>

      <div className="flex items-center gap-[15px]">
        <span className="underline cursor-pointer text-[14px] font-normal hidden md:inline">
          Əvvəlki versiyaya keçid
        </span>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      {isMenuOpen && (
        <div className="head absolute top-[50px] left-0 w-full bg-neutral-800 text-white flex flex-col items-start px-6 py-4 gap-4 z-40 md:hidden">
          {MENU_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[14px] font-semibold"
            >
              {link.title}
            </Link>
          ))}
          <span className="underline cursor-pointer text-[14px] font-normal">
            Əvvəlki versiyaya keçid
          </span>
        </div>
      )}
    </header>
  );
};
