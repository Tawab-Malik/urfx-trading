import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const creatoDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/CreatoDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Medium.otf", 
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-creato-display",
});

const messinaSansMono = localFont({
  src: [
    {
      path: "../../public/fonts/MessinaSansMono/MessinaSansMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSansMono/MessinaSansMono-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSansMono/MessinaSansMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSansMono/MessinaSansMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSansMono/MessinaSansMono-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans-mono",
});

export const metadata: Metadata = {
  title: "Welcome to URFX Trading",
  description: "This is Trading Web3 APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${creatoDisplay.variable} ${messinaSansMono.variable} antialiased font-primary bg-[#070707]`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
