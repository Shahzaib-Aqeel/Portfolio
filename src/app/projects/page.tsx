import Stars from "../components/Stars";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects – Shahzaib Aqeel",
  description:
    "Explore the portfolio of Shahzaib Aqeel, showcasing full-stack web development projects built with modern technologies like Next.js, Tailwind CSS, and MongoDB.",
  openGraph: {
    title: "Projects – Shahzaib Aqeel",
    description:
      "Discover Shahzaib Aqeel's web development projects, from responsive frontends to full-stack applications, highlighting skills in React, Next.js, Node.js, and MongoDB.",
    url: "https://shahzaibaqeel.vercel.app/projects",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "Projects Page – Shahzaib Aqeel Portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main className="dark:bg-[#030F18] bg-white transition-colors duration-300">
      <div className="dark:bg-linear-to-r dark:from-[#00041F] dark:to-[#0A2630] dark:text-white bg-[#001F3F] sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
        <div className="hidden dark:block"><Stars /></div>
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center text-white">
          PROJECTS
        </h1>
      </div>
      <div className="min-h-screen w-full mt-24 text-white px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:items-start sm:justify-between gap-8">
          {/* Left: Title */}
          <div className="space-y-2 text-left">
            <h1 className="dark:text-[#43B7DA] text-[#707070] tracking-widest text-xl">PROJECTS</h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1A1A1A] dark:text-white">
              MY RECENT PROJECTS
            </h1>
          </div>

          {/* Right: Description */}
          <p
            style={{ fontFamily: "Arial, sans-serif" }}
            className="dark:text-gray-300 text-[#1A1A1A]  text-base sm:text-lg text-center sm:text-left max-w-md"
          >
            I build modern, responsive, and high-performing websites tailored{" "}
            <br className="hidden sm:block" />
            to your needs. Each project I work on focuses on clean design,
            smooth <br className="hidden sm:block" />
            functionality, and fast performance. Here are some of the projects{" "}
            <br className="hidden sm:block" />
            I've created so far, showcasing my skills in web development and{" "}
            <br className="hidden sm:block" />
            real-world problem solving.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:justify-center lg:justify-between sm:mt-20 pb-20 gap-10 max-w-full">
          <Link
            className="flex flex-col gap-4 max-w-sm w-full"
            href={"https://rastore.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/RA-Store.png"
              alt="RA Store"
              width={400}
              height={400}
              className="hover:scale-105 transition-transform duration-300 w-full h-auto"
            />
            <h1 className="text-2xl text-center dark:text-white text-black">RA STORE</h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="dark:text-gray-300 text-[#1A1A1A]"
            >
              For RA STORE, we built a full-featured e-commerce platform with
              product browsing, cart management, and secure order placement, all
              powered by a Next.js and MongoDB stack.
            </p>
            <button
              className="dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-base w-fit px-12 py-3 rounded-4xl cursor-pointer text-center
        dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
        dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 bg-[#001F3F] hover:bg-[#43B7FF] text-white hover:text-[#001F3F]
"
            >
              VISIT WEBSITE
            </button>
          </Link>
          <Link
            className="flex flex-col gap-4 max-w-sm w-full"
            href={"https://devnotess.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/devnotes.png"
              alt="Devnotes"
              width={400}
              height={400}
              className="hover:scale-105 transition-transform duration-300 w-full h-auto"
            />
            <h1 className="text-2xl text-center dark:text-white text-black">DEVNOTES</h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="dark:text-gray-300 text-[#1A1A1A]"
            >
              For DevNotes, we built a full-featured note-taking platform with
              user authentication, category-based organization, and real-time
              updates, all powered by a Next.js frontend and MongoDB backend.
            </p>
            <button
              className="dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-base w-fit px-12 py-3 rounded-4xl cursor-pointer text-center
              dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
              dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 bg-[#001F3F] hover:bg-[#43B7FF] text-white hover:text-[#001F3F]
      "
            >
              VISIT WEBSITE
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
