import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ModifiedChildren from "@/components/modifiedChildren";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashGrotesk = localFont({
  variable: "--font-clashGrotesk",
  src: "./fonts/ClashGrotesk_Complete/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Variable.woff2",
});

const generalSans = localFont({
  variable: "--font-generalSans",
  src: "./fonts/GeneralSans_Complete/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
});

export const metadata: Metadata = {
  title: "Mona Dashboard",
  description: "Mona Dashboard Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clashGrotesk.variable} ${generalSans.variable} antialiased`}
      >
        <ModifiedChildren>{children}</ModifiedChildren>
      </body>
    </html>
  );
}
