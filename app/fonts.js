import localFont from 'next/font/local';

export const sora = localFont({
    src: [
    {
      path: "../public/fonts/Sora-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const trajan = localFont({
      src: [
    {
      path: "../public/fonts/TrajanPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/TrajanPro-Regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-trajanpro",
  display: "swap",

})