import Image from "next/image";
import Link from "next/link";
import Stars from "../components/Stars";

export const metadata = {
  title: "About Me – Shahzaib Aqeel",
  description:
    "Learn more about full-stack developer Shahzaib Aqeel — my skills, background, experience, and passion for building modern web applications.",
  openGraph: {
    title: "About Me – Shahzaib Aqeel",
    description:
      "Learn more about full-stack developer Shahzaib Aqeel and my journey in web development.",
    url: "https://shahzaibaqeel.vercel.app/about",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "About Page – Shahzaib Aqeel Portfolio",
      },
    ],
  },
};

const skills = [
  {
    name: "Frontend Development",
    icon: "🌐",
    description: "React, Next.js, Tailwind CSS, Responsive UI",
  },
  {
    name: "Next.js Backend",
    icon: "🧩",
    description: "API Routes, Server Actions, Middleware, Authentication",
  },
  {
    name: "Backend Development",
    icon: "🛠️",
    description: "Node.js, Express, REST APIs",
  },
  {
    name: "Full-Stack Integration",
    icon: "🔗",
    description: "Frontend ↔ Backend, API routes, data flow",
  },
  {
    name: "JavaScript / TypeScript",
    icon: "💻",
    description: "Modern ES6+, TS for safer code",
  },
  {
    name: "Database & Data Management",
    icon: "🗄️",
    description: "MongoDB, Mongoose schemas, validation",
  },
  {
    name: "UI/UX & Design Thinking",
    icon: "🎨",
    description: "Layouts, spacing, colors, user experience",
  },
  {
    name: "Version Control",
    icon: "📦",
    description: "Git, GitHub, project workflow",
  },
  {
    name: "Animations",
    icon: "⚡",
    description: "Framer Motion transitions, micro-interactions",
  },
  {
    name: "Deployment & Hosting",
    icon: "🚀",
    description: "Web hosting, environment variables, app optimization",
  },
  {
    name: "Authentication & Security",
    icon: "🔒",
    description: "JWT, NextAuth, password hashing, protected routes",
  },
  {
    name: "Performance & SEO",
    icon: "⚡",
    description:
      "Optimizing page load, SEO best practices, meta tags, responsive performance",
  },
];

export default function About() {
  return (
    <main className="bg-[#030F18]">
      <div className="bg-linear-to-r from-[#00041F] to-[#0A2630] text-white sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
        <Stars />
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center">
          ABOUT ME
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col w-full sm:space-x-8 lg:space-x-12 space-y-10 mt-15 sm:mx-auto sm:max-w-6xl px-4 sm:px-6 md:px-10">
        <div className="flex-shrink-0">
          <Image
            src={"/shabby.png"}
            alt="Shahzaib Aqeel"
            width={380}
            height={380}
            className="rounded-2xl shadow-lg border border-gray-300 w-full max-w-sm mx-auto sm:mx-0 h-auto"
          />
        </div>
        <div className="space-y-5 text-neutral-300 font-light text-center"
        style={{ fontFamily: "Arial, sans-serif" }}>
          <p>
            I began my development journey experimenting with frontend
            technologies, <br /> gradually exploring backend systems, APIs, and
            full-stack workflows. <br /> Over time, I’ve grown into a full-stack
            developer capable of building powerful, <br /> responsive
            applications that combine clean, maintainable code with a strong{" "}
            <br /> focus on user experience.
          </p>

          <p>
            My work is driven by passion and impact — I strive to create
            applications <br /> that not only look great but also solve
            real-world problems with scalability, <br /> performance, and modern
            architecture. I embrace challenges as opportunities <br /> to
            innovate and continuously refine my skills, ensuring that every
            project <br /> I work on delivers tangible value.
          </p>

          <p>
            Beyond coding, I’m a lifelong learner who enjoys exploring new
            technologies, <br /> enhancing my abilities, and contributing to
            meaningful digital <br /> products. As a young, ambitious developer,
            my goal is to inspire others <br /> while leaving a positive mark on
            the tech world through thoughtful, <br /> high-quality software.
          </p>

          <Link href={"/projects"}>
            <button
              className="mt-6 bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base px-12 py-3 mb-20 rounded-4xl cursor-pointer
               drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
               hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300 z-20 relative"
            >
              View My Work
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="relative z-20 flex flex-col items-center ">
          <h1 className="text-6xl font-bold text-[#3EABEF]">Tech Skills</h1>
          <p className="text-gray-600 mt-4 text-lg ">
            Tools & technologies I work with
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] text-white rounded-2xl p-6 flex flex-col items-center justify-center 
                        shadow-md hover:shadow-[#0ff] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {skill.name}
              </h3>
              <p className="text-sm text-center" style={{ fontFamily: "Arial, sans-serif" }}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#030F18] p-12  text-center">
  <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-white">
    Let’s Build Something Great
  </h2>

  <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed mb-8 text-lg" style={{ fontFamily: "Arial, sans-serif" }}>
    Have a project in mind or want to collaborate? I'm always open to meaningful
    ideas, creative challenges, and forward-thinking opportunities. Your vision
    deserves a powerful digital experience—let’s bring it to life.
  </p>

  <Link
    href="/contact"
    className="inline-block bg-[#4CC9FF] text-black font-semibold px-12 py-3.5 rounded-full text-lg shadow-md hover:shadow-xl hover:bg-[#7FDBFF] transition-all duration-300 active:scale-95"
  >
    Contact Me
  </Link>
</div>

    </main>
  );
}
