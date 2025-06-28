import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { PagesStyles } from "./components/pagesstyles";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XscriptorCode",
  description: "Dev from X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${PagesStyles.background} antialiased`}>      
        <Navbar />
        {children}
        <Footer />
      </body>      
    </html>
  );
}
