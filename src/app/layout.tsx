import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "@next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Estudo NextJs com Redux",
  description: "Estudo, NEXT.js com Redux, Sea Tecnologia - Junho/2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
