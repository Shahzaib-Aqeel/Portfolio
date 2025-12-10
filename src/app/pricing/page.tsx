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
    <main className="bg-[#030F18]">
      <div className="bg-linear-to-r from-[#00041F] to-[#0A2630] text-white sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
        <Stars />
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center">
          Pricing
        </h1>
      </div>
      <div className="min-h-screen w-full mt-24 text-white ">
        <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between px-10">
        {/* Left: Text */}
        <div className="space-y-2">
          <h1 className="text-[#43B7DA] tracking-widest text-xl -mt-10 sm:mt-0 text-center">
            Our Pricing
          </h1>
          <h1 className="sm:text-5xl text-3xl text-center">PRICING PACKAGES FOR</h1>
          <h1 className="sm:text-5xl text-3xl text-center">EVERY BUDGET</h1>
        </div>

        {/* Right: Button */}
        <Link href="/contact">
          <button
            className="sm:mt-20 mt-10 bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base px-12 py-3 rounded-4xl cursor-pointer
                       drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
                       hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
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
