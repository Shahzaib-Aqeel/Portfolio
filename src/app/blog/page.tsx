import Stars from "../components/Stars";
import Image from "next/image";
import Link from "next/link";

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
  
export default function BlogPage(){
    return(
        <main className="bg-[#030F18]">
              <div className="bg-linear-to-r from-[#00041F] to-[#0A2630] text-white sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
                <Stars />
                <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center">
                  BLOG
                </h1>
              </div>
              <div className="sm:min-h-screen h-60 w-full mt-24 text-white">
                <h1 className="text-center sm:text-5xl text-3xl text-[#43B7FF] mb-5">Blogs are coming soon...</h1>
                <Image src={"/trees-dark.svg"} alt="trees" width={1920} height={1080} className="w-full hidden sm:block"/>
              </div>
            
        </main>
    )
}