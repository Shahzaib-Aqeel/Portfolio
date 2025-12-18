"use client";

import Link from "next/link";

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

export default function Skills() {
  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-6 lg:px-10">
      {/* Title */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3EABEF]">
          Tech Skills
        </h1>
        <p className="text-gray-600 mt-2 sm:mt-4 text-base sm:text-lg">
          Tools & technologies I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#001F3F] text-white rounded-2xl p-6 flex flex-col items-center justify-center
                       shadow-md hover:shadow-[#0ff] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center">
              {skill.name}
            </h3>
            <p className="text-sm sm:text-base text-center" style={{ fontFamily: "Arial, sans-serif" }}>{skill.description}</p>
          </div>
        ))}
      </div>

      {/* View Work Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <Link href={"/projects"}>
          <button
            className="dark:bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-sm sm:text-base px-8 sm:px-12 py-2 sm:py-3 mb-12 sm:mb-20 rounded-3xl sm:rounded-4xl
                       dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff] bg-[#001F3F] hover:bg-[#43B7FF] hover:text-[#001F3F] text-white
                       dark:hover:from-white hdark:over:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300" 
          >
            View My Work
          </button>
        </Link>
      </div>
    </div>
  );
}