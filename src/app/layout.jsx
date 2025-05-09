import { ThemeProvider } from "@/common/components";
import "./globals.css";
import { fontSfDisplayPro } from "../common/fonts/sf-pro-display/index";
import { Header } from "../common/layouts/index";

export const metadata = {
  title: "Baku Electronics",
  description: "Wemark - Task",
  icons: "/logos/be-logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSfDisplayPro.variable} antialiased`}>
        <ThemeProvider>
          <div className="md:w-[1240px] w-[88%] mx-auto">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
