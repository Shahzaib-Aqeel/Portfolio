import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Blog = {
  slug: string;
  title: string;
  image?: string; 
  description: string;
  date: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

// for blog list page

export function getAllBlogs(): Blog[] {
  return fs.readdirSync(BLOG_DIR).map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
    };
  });
}

// for slug page

export function getBlogBySlug(slug: string): Blog | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
  };
}
