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
      <div className="bg-linear-to-r from-[#01041F] to-[#08222E] pt-8">
        <Stars />
        <div className="overflow-x-hidden">
          <main className="min-h-screen items-center">
            <div className="px-4 sm:px-6 md:px-10 max-w-full">
              <p className="text-sm mt-16 sm:mt-24 sm:text-base text-center sm:text-left">
                CUSTOM DESIGNED, CUSTOM CODED
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
                    className="bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] sm:text-base sm:px-12 sm:py-3 rounded-4xl text-sm cursor-pointer px-6 py-3 sm:ml-0
        drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
        hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 z-20 relative"
                  >
                    View My Work
                  </button>
                </Link>
                <Link href={"/about"}>
                  <button
                    className="
  sm:px-12 sm:py-3 rounded-4xl cursor-pointer px-6 py-3 sm:text-base text-sm
  border-2 border-white text-white mt-8 inline-block
  bg-linear-to-r from-[#030F18] to-[#020F25]
  hover:from-[#43B7FF] hover:to-[#43B7FF]
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
                className="hidden sm:block w-full h-auto absolute z-10 xl:-mt-[130px] lg:-mt-[27px] md:-mt-[200px] max-w-full"
              />
            </div>
            <div className="bg-[#030F18] h-max sm:mt-65 mt-10 pt-10 md:mt-7 lg:mt-65">
              <Skills />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
