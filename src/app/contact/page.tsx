import ContactForm from "../components/ContactForm";
import Stars from "../components/Stars";
import Image from "next/image";

export const metadata = {
  title: "Contact – Shahzaib Aqeel",
  description:
    "Get in touch with full-stack developer Shahzaib Aqeel. Whether you have a project, collaboration idea, or just want to say hello, I’m always happy to connect.",
  openGraph: {
    title: "Contact – Shahzaib Aqeel",
    description:
      "Reach out to Shahzaib Aqeel for web development projects, collaborations, or inquiries. Let’s build something amazing together.",
    url: "https://shahzaibaqeel.vercel.app/contact",
    images: [
      {
        url: "https://shahzaibaqeel.vercel.app/shabby.png",
        width: 1200,
        height: 630,
        alt: "Contact Page – Shahzaib Aqeel Portfolio",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="dark:bg-[#030F18] bg-white transition-colors duration-300">
          <div className="dark:bg-linear-to-r dark:from-[#00041F] dark:to-[#0A2630] dark:text-white bg-[#001F3F]  sm:h-[350px] h-[180px] pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
            <div className="hidden dark:block"><Stars /></div>
            <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center text-white">
          CONTACT
        </h1>
      </div>
      <div className="min-h-screen w-full mt-24 text-white px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-10">
          {/* Left: Text */}
          <div className="space-y-2 w-full xl:max-w-md">
            <h1 className="dark:text-[#43B7DA] text-[#707070] tracking-widest text-xl">
              CONTACT US
            </h1>
            <h1 className="text-4xl sm:text-6xl text-[#1A1A1A] dark:text-white">GET IN TOUCH</h1>
            <div className="text-[#1A1A1A] dark:text-white" style={{ fontFamily: "Arial, sans-serif" }}>
            <p className="-mb-0.5">
              Send us an email and let us know everything you want out of a new
              site. We respond to everyone within 24 hours of contacting us. Or give us a
              call and reach us immediately for a chat. If we are unavailable we will call back
              same day.
            </p>
            </div>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#788a94] dark:shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5 flex-shrink-0"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                  className="invert dark:invert-0"
                />
              </div>
              <div className="flex flex-col space-y-1 text-[#1A1A1A] dark:text-white">
                <span>Whatsapp</span>
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  +92 0320 5886722
                </span>
              </div>
            </div>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#788a94] dark:shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5 flex-shrink-0"
              >
                <Image
                  src="/mail-76.svg"
                  alt="Email Icon"
                  width={30}
                  height={30}
                  className="invert dark:invert-0"
                />
              </div>
              <div className="flex flex-col space-y-1 text-[#1A1A1A] dark:text-white">
                <span>Email</span>
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  shabbych366@gmail.com
                </span>
              </div>
            </div>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#788a94] dark:shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5 flex-shrink-0"
              >
                <Image
                  src="/pin-76.svg"
                  alt="Location Icon"
                  width={30}
                  height={30}
                  className="invert dark:invert-0"
                />
              </div>
              <div className="flex flex-col space-y-1 text-[#1A1A1A] dark:text-white">
                <span>Location</span>
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  Pakistan
                </span>
              </div>
            </div>
          </div>
          {/* Right: Form  */}
          <ContactForm />
        </div>
      </div>
      <div className="mb-10 dark:mb-0">
        <Image
          src="/trees-dark.svg"
          alt="trees"
          width={700}
          height={700}
          className="hidden dark:block xl:-mt-80 max-w-full h-auto" 
        />
      </div>
    </main>
  );
}
