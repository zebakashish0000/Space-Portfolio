import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";  
import Navbar from "@/components/main/Navbar";  
import Footer from "@/components/main/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is a space portfolio created by me (Zayba)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={' ${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}
      >
       
        <StarsCanvas />
        <Navbar/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
