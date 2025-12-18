import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahzaib Aqeel – Full-Stack Web Developer",
  description:
    "Building modern, responsive, and high-performing web applications with clean UI and scalable backend architecture.",
    icons: {
      icon: '/Favicon.png',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden sm:overflow-visible">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden sm:oveflow-visible`}
      >
        <ThemeProvider>
        <div className="dark:bg-linear-to-r dark:from-[#01041F] dark:to-[#08222E] bg-[#001F3F] transition-colors duration-300 pt-8 overflow-visible"></div>
        <Navbar />
        {children}
        <div className="dark:bg-[#01060A] bg-[#001F3F] relative z-21 pt-20">
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
