import Link from "next/link";
import { Yellowtail } from "next/font/google";
import { Roboto } from "next/font/google";
import { FaLinkedin, FaGithub, FaWhatsapp,  } from "react-icons/fa";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/shahzaib-aqeel-6168bb388/",
    color: "#0A66C2",
  },
  {
    name: "X (Twitter)",
    icon: (
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H0.316l5.733-6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" />
</svg>

  ),
    url: "https://x.com/ShabbyCodes",
    color: "#fff",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/Shahzaib-Aqeel",
    color: "#fff",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={24} />,
    url: "https://wa.me/923205886772",
    color: "#25D366",
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-50 sm:pb-10 pb-4 text-gray-400 sm:mt-20 overflow-x-hidden px-4 sm:px-6 md:px-8">
      <Link href="/">
        <div className="relative cursor-pointer max-w-full">
          <Image
            className="relative z-30 ml-4 sm:ml-8 sm:-mt-50 -mt-52 max-w-full h-auto"
            src="/tree.png"
            alt="Logo"
            width={400}
            height={500}
          />

          <h1
            className={`absolute top-8 left-28 sm:left-32 md:left-36 sm:text-5xl text-2xl md:text-3xl font-extrabold text-[white]`}
          >
            Shahzaib Aqeel
          </h1>

          <h1
            className={`${yellowtail.className} hidden dark:block absolute top-16 sm:top-20 left-45 sm:left-52 md:left-56 font-extrabold text-xl sm:text-2xl md:text-3xl text-[#C1DEF2]
            drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_10px_#0ff] drop-shadow-[0_0_20px_#0ff] animate-blink`}
          >
            Silent Code
          </h1>

          <h1
            className={`${yellowtail.className} dark:hidden block absolute top-16 sm:top-20 left-45 sm:left-52 md:left-56 font-extrabold text-xl sm:text-2xl md:text-3xl text-[white]
             animate-blink`}
          >
            Code & Light
          </h1>
        </div>
      </Link>

      <div>
        <p className={`${roboto.className} sm:ml-8 mt-10 px-2 text-sm text-[#fbfdde] text-center sm:text-left max-w-full`}>
          Whether you're a growing business or an established company, <br className="hidden sm:block" />
          your website should make an impact. I build modern, <br className="hidden sm:block" /> responsive,
          and high-performing websites that help you attract <br className="hidden sm:block" /> customers
          and grow your brand.
        </p>
      </div>
      <Link href={"/contact"} className="flex sm:justify-start justify-center">
        <button
          className="mt-10 sm:ml-10 dark:bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-base px-12 py-3 mb-20 rounded-4xl cursor-pointer
               dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
               dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 z-20 relative bg-[#1885f1] hover:bg-white text-white hover:text-[#001F3F]"
        >
          Contact Me
        </button>
      </Link>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 sm:gap-4 mt-8 sm:mt-0">
        <div
          className={`${roboto.className} sm:absolute xl:right-82 lg:right-60 md:right-42 sm:top-40 flex flex-col justify-center items-center sm:items-start`}
        >
          <h1 className="text-2xl font-bold text-white md:text-xl lg:text-2xl">Quick Links</h1>
          <Link href={"/"} className="mt-4 text-white hover:text-blue-300">
            Home
          </Link>
          <Link
            href={"/projects"}
            className="mt-4 text-white hover:text-blue-300"
          >
            Projects
          </Link>
          <Link href={"/about"} className="mt-4 text-white hover:text-blue-300">
            About
          </Link>
          <Link href={"/blog"} className="mt-4 text-white hover:text-blue-300">
            Blog
          </Link>
          <Link href={"/contact"} className="mt-4 text-white hover:text-blue-300">
            Contact
          </Link>
        </div>
        <div className="sm:hidden border-t border-2 border-gray-700 mx-8 rounded-2xl mt-5 mb-5"></div>
        <div
          className={`${roboto.className} sm:absolute xl:right-18 lg:right-10 md:right-2 sm:top-40 flex-col flex justify-center items-center sm:items-start`}
        >
          <h1 className="text-2xl font-bold text-white md:text-xl lg:text-2xl md:ml-2 lg:ml-0">Social Meida</h1>
          {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            className="flex items-center space-x-4 p-4"
          >
            <span style={{ color: social.color }}>{social.icon}</span>
            <span className="text-white font-medium">{social.name}</span>
          </Link>
        ))}
        </div>
      </div>
      <div className="border-t border-2 border-gray-700 mx-8 rounded-2xl"></div>
      <div>
        <p className={`${roboto.className} text-center mt-8 text-sm text-[#dfe6f0] opacity-70 tracking-wide`}>
          © 2024{" "}
          <span className="text-[#A7DAFF] font-medium">Shahzaib Aqeel</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
