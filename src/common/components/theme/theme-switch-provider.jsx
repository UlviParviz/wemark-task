"use client";

import { ThemeProvider as Provider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Provider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </Provider>
  );
}
