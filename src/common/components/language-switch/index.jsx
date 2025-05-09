"use client";

import { useState } from "react";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("aze");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="text-sm font-medium text-black focus:outline-none p-1 rounded-md cursor-pointer"
    >
      <option className=" text-black " value="aze">
        Aze
      </option>
      <option className="text-black" value="eng">
        Eng
      </option>
      <option className="text-black" value="rus">
        Rus
      </option>
    </select>
  );
};
