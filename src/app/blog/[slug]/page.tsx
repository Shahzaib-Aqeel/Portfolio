import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Stars from "@/app/components/Stars";
import { getBlogBySlug, type Blog } from "@/lib/getBlogs";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
  // Await if params is a promise
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const BLOG_DIR = path.join(process.cwd(), "content/blogs");
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="text-center py-20">
        Blog post not found. Check that <code>{slug}.mdx</code> exists.
      </div>
    );
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return (
    <main className="dark:bg-[#030F18] bg-white transition-colors duration-300">
      <div className="dark:bg-linear-to-r dark:from-[#00041F] dark:to-[#0A2630] dark:text-white bg-[#001F3F]  sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
            <div className="hidden dark:block"><Stars /></div>
            <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center text-white">
              BLOGS
            </h1>
          </div>
    <article className="prose dark:prose-invert max-w-3xl lg::mx-auto md:mx-10 mx-3 sm:py-20 py-5" style={{ fontFamily: "Arial, sans-serif" }}>
      {data.image && (
        <div className="my-6">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={400}
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>
      )}

<div className="flex flex-row gap-5 items-center mb-5"  style={{ fontFamily: "Arial, sans-serif" }}>
              <h1>
                Shahazaib Aqeel
              </h1>
              <div className="bg-green-500 rounded-full w-1 h-1"></div>
              <h1>{blog.date}</h1>
              </div>

              

      <h1 className="sm:text-4xl text-2xl mb-4 font-bold">{data.title}</h1>
      <div className="w-full mb-4 h-px bg-gray-700 rounded-full "  /> 
      <MDXRemote source={content}  />
      <Link href="/blog" className="mt-10">
            <button
            className="dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 px-10 dark:text-[#001F3F] text-base sm:px-23 sm:py-3 py-3 rounded-4xl cursor-pointer
                       dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff] bg-[#001F3F] text-white hover:bg-[#43B7FF] hover:text-[#001F3F]
                       dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
          >
            READ MORE
          </button>
          </Link>
    </article>
    </main>
  );
}
