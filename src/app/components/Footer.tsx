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
    <footer className="w-full pt-50 sm:pb-10 pb-40 text-gray-400 mt-20">
      <Link href="/">
        <div className="relative cursor-pointer">
          <Image
            className="ml-8 sm:-mt-60 -mt-80"
            src="/tree.png"
            alt="Logo"
            width={400}
            height={500}
          />

          <h1
            className={`absolute top-8 left-34 sm:text-5xl text-3xl font-extrabold text-[white]`}
          >
            Shahzaib Aqeel
          </h1>

          <h1
            className={`${yellowtail.className} absolute top-20 left-58 font-extrabold text-3xl text-[#C1DEF2]
            drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_10px_#0ff] drop-shadow-[0_0_20px_#0ff] animate-blink`}
          >
            Silent Code
          </h1>
        </div>
      </Link>

      <div>
        <p className={`${roboto.className} sm:ml-8 mt-10 text-sm text-[#fbfdde] text-center sm:text-left`}>
          Whether you’re a growing business or an established company, <br />{" "}
          your website should make an impact. I build modern, <br /> responsive,
          and high-performing websites that help you attract <br /> customers
          and grow your brand.
        </p>
      </div>
      <Link href={"/contact"} className="flex sm:justify-start justify-center">
        <button
          className="mt-10 ml-10 bg-gradient-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base px-12 py-3 mb-20 rounded-4xl cursor-pointer
               drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
               hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 z-20 relative"
        >
          Contact Me
        </button>
      </Link>

      <div
        className={`${roboto.className} sm:absolute sm:right-120 sm:top-35 flex flex-col justify-center items-center`}
      >
        <h1 className="text-2xl font-bold text-white">Quick Links</h1>
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
        className={`${roboto.className} sm:absolute sm:right-50 sm:top-35 flex-col flex justify-center items-center`}
      >
        <h1 className="text-2xl font-bold text-white">Social Meida</h1>
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
