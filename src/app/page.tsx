import Image from "next/image";
import Link from "next/link";
import Stars from "./components/Stars";
import Skills from "./components/Skills";

export const metadata = {
  title: "Shahzaib Aqeel – Full-Stack Web Developer",
  description:
    "I build modern, responsive, and high-performing full-stack web applications using Next.js, Tailwind CSS, MongoDB, and TypeScript.",
  keywords: [
    "Shahzaib Aqeel",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Portfolio",
    "Web Developer Pakistan",
  ],
  openGraph: {
    title: "Shahzaib Aqeel – Full-Stack Web Developer",
    description:
      "Building modern, responsive, and high-performing web applications with clean UI and scalable backend architecture.",
    url: "https://shahzaibaqeel.vercel.app/",
    siteName: "Shahzaib Aqeel Portfolio",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "Shahzaib Aqeel Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib Aqeel – Full-Stack Web Developer",
    description:
      "I build modern, responsive, and high-quality full-stack applications with Next.js, Tailwind, and MongoDB.",
    images: ["https://shahzaibaqeel.vercel.app/shabby.png"],
  },
};

export default function HomePage() {
  return (
    <div>
      <div className="dark:bg-linear-to-r dark:from-[#01041F] dark:to-[#08222E] bg-[#001F3F] pt-8 transition-colors duration-300">
        <div className="hidden dark:block"><Stars /></div>
        <div className="overflow-x-hidden">
          <main className="min-h-screen items-center">
            <div className="px-4 sm:px-6 md:px-10 max-w-full text-white">
              <p className="text-sm mt-16 sm:mt-24 sm:text-base text-center sm:text-left">
                CUSTOM DESIGNS, CUSTOM CODED
              </p>
              <h1 className="sm:text-6xl text-4xl font-bold sm:mt-4 mt-2 text-center sm:text-left">
                Hello, I'm <br /> Shahzaib Aqeel
              </h1>
              <p
                className="mt-4 text-base sm:text-lg sm:text-neutral-400 text-gray-100 relative z-20 text-center sm:text-left"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                I'm a full-stack web developer focused on building modern,{" "}
                <span className="hidden md:inline">
                  <br />
                </span>
                responsive, and high-quality web applications with clean code,{" "}
                <span className="hidden md:inline">
                  <br />
                </span>
                smooth performance, and real-world functionality.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
                <Link href="/projects" className="mt-8 inline-block">
                  <button
                    className="dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] sm:text-base sm:px-12 sm:py-3 rounded-4xl text-sm cursor-pointer px-6 py-3 sm:ml-0
        dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
        dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 z-20 relative hover:bg-[white] text-[#001F3F] bg-[#43B7FF]"
                  >
                    View My Work
                  </button>
                </Link>
                <Link href={"/about"}>
                  <button
                    className="
  sm:px-12 sm:py-3 rounded-4xl cursor-pointer px-6 py-3 sm:text-base text-sm
  dark:border-2 dark:border-white text-white mt-8 inline-block
  dark:bg-linear-to-r dark:from-[#030F18] dark:to-[#020F25] hover:bg-[#43B7FF] hover:text-[#001F3F]
  dark:hover:from-[#43B7FF] dark:hover:to-[#43B7FF] 
  transition-all duration-300 z-20 relative"
                  >
                    About Me
                  </button>
                </Link>
              </div>

              <Image
                src={"/shabby.png"}
                alt="Shahzaib"
                width={300}
                height={250}
                className="rounded-full lg:float-right lg:mr-10 lg:mt-[-350px] border border-[white] mx-auto mt-10 mb-10 xl:float-right xl:mr-[320px] xl:mt-[-350px] md:mr-[340px] max-w-full h-auto"
              />
            </div>

            <div className="overflow-hidden">
              <Image
                src="/hero-dark.svg"
                alt=""
                width={600}
                height={400}
                className="hidden dark:sm:block w-full h-auto absolute z-10 xl:-mt-[130px] lg:-mt-[27px] md:-mt-[200px] max-w-full transition-all duration-800"
              />
            </div>
            <div className="dark:bg-[#030F18] bg-white h-max sm:mt-65 mt-10 pt-10 md:mt-7 lg:mt-65">
              <Skills />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
