import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {manrope} from './font'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${manrope.className} bg-[#0A0A0A]`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
