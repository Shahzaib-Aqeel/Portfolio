"use client";

import { Yellowtail } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      shadow-[0_0_20px_rgba(255,255,255,0.5)]
      py-3 flex justify-between items-center
      bg-[#030F18] text-white font-bold overflow-x-hidden
      px-4 sm:px-6 md:px-10  z-[999]
      ${scrolled ? "w-full rounded-none px-5" : "w-full "}
    `}
    >
      {/* Left side */}
      <Link href="/">
        <div className="relative cursor-pointer">
          <Image
            className="ml-6 max-w-full"
            src="/tree.png"
            alt="Logo"
            width={200}
            height={200}
          />

          <h1
            className={`absolute top-2 left-22 text-xl font-extrabold text-[white]`}
          >
            Shahzaib Aqeel
          </h1>

          <h1
            className={`${yellowtail.className} absolute top-9 left-30 text-2xl font-extrabold text-[#C1DEF2]
            drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_10px_#0ff] drop-shadow-[0_0_20px_#0ff] animate-blink`}
          >
            Silent Code
          </h1>
        </div>
      </Link>
      {/* Middle links */}
      <ul className="hidden md:flex space-x-12 p-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`hover:text-[#43B7FF] transition-colors duration-300 ${
                pathname === item.href ? "text-[#43B7FF]" : "text-white"
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
          className="hidden md:block bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base px-12 py-3 rounded-4xl cursor-pointer
        drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
        hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300
"
        >
          Get Started
        </Link>
        <Image
          className="mr-10 sm:mr-4 cursor-pointer"
          src="/sun.svg"
          alt="Sun"
          width={24}
          height={24}
        />
        <button className="md:hidden bg-amber-50 rounded-xl p-2 drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]" onClick={() => Setisopen(!isopen)}>
          <Image src={isopen ? "/close.svg" : "/menu.svg"}
    alt={isopen ? "close menu" : "menu"} width={35} height={35} />
        </button>
      </div>
    </nav>
    {/* Mobile Dropdown */}
    <div
  className={`
    md:hidden fixed top-[72px] left-0 right-0 w-full
    bg-[#030F18] text-white text-center
    overflow-hidden z-[998] 
    transition-all duration-300
    ${isopen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
  `}
>
<ul className="flex flex-col space-y-6 px-6 mt-2">
    {navItems.map((item) => (
      <Link key={item.href} href={item.href} onClick={() => Setisopen(false)}>
        <span className="text-lg">{item.name}</span>
      </Link>
    ))}
  </ul>
</div>
</>
  );
}
