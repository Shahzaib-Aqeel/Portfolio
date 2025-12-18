import Link from "next/link";
import Stars from "../components/Stars";
import PricingCards from "../components/PricingCards";

export const metadata = {
  title: "Pricing – Shahzaib Aqeel",
  description:
    "Explore transparent and flexible pricing for website development, full-stack applications, UI/UX design, and digital solutions. Choose the plan that fits your project.",
  openGraph: {
    title: "Pricing – Shahzaib Aqeel",
    description:
      "Clear, transparent, and flexible pricing for modern websites, full-stack apps, and digital solutions. Find the perfect package for your needs.",
    url: "https://shahzaibaqeel.vercel.app/pricing",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "Pricing Page – Shahzaib Aqeel Portfolio",
      },
    ],
  },
};

export default function Pricing() {
  return (
    <main className="dark:bg-[#030F18] bg-white transition-colors duration-300">
              <div className="dark:bg-linear-to-r dark:from-[#00041F] dark:to-[#0A2630] dark:text-white bg-[#001F3F]  sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
                <div className="hidden dark:block"><Stars /></div>
                <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center text-white">
          PRICING
        </h1>
      </div>
      <div className="min-h-screen w-full mt-24 text-white px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between gap-6">
        {/* Left: Text */}
        <div className="space-y-2 w-full sm:w-auto">
          <h1 className="dark:text-[#43B7DA] text-[#707070] tracking-widest text-xl -mt-10 sm:mt-0 text-center sm:text-left">
            Our Pricing
          </h1>
          <h1 className="sm:text-5xl text-3xl text-center sm:text-left text-[#1A1A1A] dark:text-white">PRICING PACKAGES FOR</h1>
          <h1 className="sm:text-5xl text-3xl text-center sm:text-left text-[#1A1A1A] dark:text-white">EVERY BUDGET</h1>
        </div>

        {/* Right: Button */}
        <Link href="/contact">
          <button
            className="sm:mt-20 mt-10 dark:bg-linear-to-r dark:from-gray-300 dark:to-gray-100 dark:text-[#001F3F] text-base px-12 py-3 rounded-4xl cursor-pointer bg-[#001F3F] hover:bg-[#43B7FF] hover-text-[#001F3F]
                       dark:drop-shadow-[0_0_5px_#fff] dark:drop-shadow-[0_0_1px_#0ff] dark:drop-shadow-[0_0_5px_#0ff]
                       dark:hover:from-white dark:hover:to-gray-100 dark:hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
          >
            Get Started
          </button>
        </Link>
        </div>
        <PricingCards />
      </div>
      
    </main>
  );
}
