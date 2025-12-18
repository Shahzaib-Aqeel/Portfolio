import Stars from "../components/Stars";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs} from "../../lib/getBlogs";

export const metadata = {
  title: "Blog – Shahzaib Aqeel",
  description:
    "Read insights, tutorials, and tips from Shahzaib Aqeel on full-stack web development, Next.js, React, Node.js, and MongoDB.",
  openGraph: {
    title: "Blog – Shahzaib Aqeel",
    description:
      "Stay updated with Shahzaib Aqeel's latest articles on web development, programming tutorials, and practical coding tips.",
    url: "https://shahzaibaqeel.vercel.app/blog",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "Blog Page – Shahzaib Aqeel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Shahzaib Aqeel",
    description:
      "Explore articles and tutorials on web development, React, Next.js, Node.js, and MongoDB by Shahzaib Aqeel.",
    images: ["https://your-domain.com/og-blog.png"],
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  return (
    <main className="dark:bg-[#030F18] bg-white transition-colors duration-300">
      <div className="dark:bg-linear-to-r dark:from-[#00041F] dark:to-[#0A2630] dark:text-white bg-[#001F3F]  sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
        <div className="hidden dark:block"><Stars /></div>
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center text-white">
          BLOGS
        </h1>
      </div>
      <div className="min-h-screen w-full sm:mt-24 mt-10 dark:text-white text-black pb-20">
        {blogs.map((blog) => (
            <div key={blog.slug}  className="xl:mx-50 lg:mx-10 mx-5 md:mx-10 border rounded-2xl shadow-[0_0_10px_#0ff]">
              {blog.image && (
                
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={200}
                    className="object-cover w-full h-auto rounded-t-2xl"
                    unoptimized
                  />
                
              )}
              <div className="p-10 ">
                <div className="flex flex-row sm:gap-5 gap-2 items-center"  style={{ fontFamily: "Arial, sans-serif" }}>
                  
              <h1 className="text-sm sm:font-medium font-normal">
                Shahazaib Aqeel
              </h1>
              <div className="bg-green-500 rounded-full w-1 h-1"></div>
              <h1>{blog.date}</h1>
              </div>
              <h2 className="sm:text-4xl text-2xl font-semibold mt-5">{blog.title}</h2>
              <p
                className="text-sm opacity-70 mt-5"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {blog.description}
              </p>
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="mt-5 inline-block">
            <button
            className="dark:bg-linear-to-r dark:from-gray-300 px-10 dark:to-gray-100 dark:text-[#001F3F] text-base sm:px-23 sm:py-3 py-3 rounded-4xl cursor-pointer bg-[#001F3F] text-white hover:bg-[#43B7FF] hover:text-[#001F3F]
                       dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
                       dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
          >
            Continue Reading
          </button>
          </Link>
              </div>
            </div>
        ))}
      </div>
    </main>
  );
}
