import localFont from "next/font/local";

export const fontSfDisplayPro = localFont({
  src: [
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYBOLD.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYHEAVYITALIC.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYLIGHTITALIC.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYTHINITALIC.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-pro-display/SFPRODISPLAYULTRALIGHTITALIC.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});