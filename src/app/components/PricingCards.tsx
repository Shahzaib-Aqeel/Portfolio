import Link from "next/link";

const pricingPlans = [
  {
    name: "Business Website",
    price: "15,000 – 30,000",
    features: [
      "Planning & Structure: Page flow & brand alignment",
      "Frontend Development: 4–6 pages with clean UI",
      "Contact Forms: Client inquiry form + email setup",
      "Responsive Design: Mobile / Tablet friendly",
      "Revisions: 2–3 revisions included",
    ],
  },
  {
    name: "E-commerce Store",
    price: "35,000 – 60,000",
    features: [
      "Product Structure: Categories, product setup",
      "Frontend UI/UX: Homepage, shop, product pages",
      "Product System: Filters, search, sorting",
      "Cart & Checkout: Add to cart + order flow",
      "Integrations: Payment gateway / COD",
      "Responsive Design: Fully optimized",
      "Revisions: 2–4 revisions included",
    ],
  },
  {
    name: "Advanced E-commerce ",
    price: "60,000 – 100,000",
    features: [
      "Architecture Planning: Feature flow & planning",
      "Advanced Frontend: Custom animations, UI components",
      "Backend / API: Auth, user system, backend logic",
      "Advanced Product System: Variants, inventory, reviews",
      "Payments: Stripe / PayPal / JazzCash",
      "Admin Dashboard: Full management panel",
      "Support: Revisions & updates",
    ],
  },
];

export default function PricingCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 xl:p-2 p-5 pt-15 pb-20 xl:mt-5 xl:pb-10">
      {pricingPlans.map((plan, idx) => (
        <div
          key={idx}
          className="dark:bg-[#0a0a0a] bg-[#001F3F] border border-gray-700 rounded-3xl p-15 flex flex-col justify-between shadow-lg hover:shadow-[#0ff]/50 transform hover:scale-105 transition-all duration-300 hover:border-2
          hover:border-[#4CC9FF] shadow-[#0ff]/100"
        >
          {/* Plan Name */}
          <h2 className="sm:text-3xl text-2xl font-bold text-[white] mb-4">{plan.name}</h2>

          {/* Features */}
          <ul className="flex-1 space-y-2 mb-6 text-gray-300 text-sm font-thin"
          style={{ fontFamily: "Arial, sans-serif" }}
>
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#4CC9FF] mr-2 mt-1">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="sm:text-2xl text-xl font-extrabold text-white mb-4">Rs. {plan.price}</div>

          {/* Button */}
          <Link href="/contact">
            <button
            className="bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base sm:px-23 sm:py-3 w-full py-3 rounded-4xl cursor-pointer
                       drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
                       hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
          >
            Get Started
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
}