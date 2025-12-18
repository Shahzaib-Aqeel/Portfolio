"use client";

import { Yellowtail } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";


const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const [isopen, Setisopen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <nav
      className={`
      sticky top-0
      dark:shadow-[0_0_20px_rgba(255,255,255,0.5)]
      py-3 flex justify-between items-center
      dark:bg-[#030F18] bg-[#FFFFFF] dark:text-white text-[#001F3F] font-bold overflow-x-hidden transition-colors duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.5)]
      px-4 sm:px-6 md:px-10  z-[999]
      ${scrolled ? "w-full rounded-none px-5" : "w-full "}
    `}
    >
      {/* Left side */}
      <Link href="/">
        <div className="relative cursor-pointer">
          <Image
            className="ml-2 sm:ml-4 md:ml-6 max-w-full h-auto hidden dark:block transition-all duration-300"
            src="/tree.png"
            alt="Logo"
            width={200}
            height={200}
          />

<Image
            className="ml-2 sm:ml-4 md:ml-6 max-w-full h-auto dark:hidden block transition-all duration-300"
            src="/blue-tree.png"
            alt="Logo"
            width={200}
            height={200}
          />

          <h1
            className={`absolute top-2 dark:text-white text-[#001F3F] left-16 sm:left-20 md:left-22 sm:text-xl md:text-base lg:text-xl text-base font-extrabold`}
          >
            Shahzaib Aqeel
          </h1>

          <h1
            className={`${yellowtail.className} hidden dark:block absolute top-9 left-20 sm:left-24 md:left-28 xl:text-2xl text-base sm:text-lg font-extrabold text-[#C1DEF2]
            drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_10px_#0ff] drop-shadow-[0_0_20px_#0ff] animate-blink`}
          >
            Silent Code
          </h1>

          <h1
            className={`${yellowtail.className} dark:hidden block absolute top-9 left-20 sm:left-24 md:left-28 xl:text-2xl text-base sm:text-lg font-extrabold text-[#011E40] animate-blink`}
          >
            Code & Light
          </h1>
        </div>
      </Link>
      {/* Middle links */}
      <ul className="hidden md:flex xl:space-x-12 lg:space-x-6 space-x-3 p-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`hover:text-[#43B7FF] transition-colors duration-300 ${
                pathname === item.href ? "text-[#43B7FF]" : "dark:text-white text-[#001F3F]"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </ul>
      {/* Right side: button + icon */}
      <div className="flex items-center space-x-7">
        
        <Link
          href={"/contact"}
          className="hidden lg:block bg-[#001F3F] dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-white xl:text-base lg:text-sm xl:px-12 text-sm  lg:px-10 py-3 rounded-4xl cursor-pointer
        dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
        dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 hover:bg-[#43B7FF] hover:text-[#001F3F]
"
        >
          Get Started
        </Link>
        <ThemeToggle />
        <button className="md:hidden bg-amber-50 rounded-xl p-2 drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]" onClick={() => Setisopen(!isopen)}>
          <Image src={isopen ? "/close.svg" : "/menu.svg"}
    alt={isopen ? "close menu" : "menu"} width={35} height={35} />
        </button>
      </div>
    </nav>
    {/* Mobile Dropdown */}
    <div
  className={`
    md:hidden absoulte top-[72px] left-0 right-0 w-full
    bg-[#030F18] text-white text-center
    overflow-hidden z-[998] 
    transition-all duration-300
    ${isopen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
  `}
>
<ul className="flex flex-col space-y-4 px-6 mt-6">
    {navItems.map((item) => (
      <Link key={item.href} href={item.href} onClick={() => Setisopen(false)}>
        <span className="text-lg" style={{ fontFamily: "Arial, sans-serif" }}>{item.name}</span>
      </Link>
    ))}
  </ul>
</div>
</>
  );
}
