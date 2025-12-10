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
    <main className="bg-[#030F18]">
      <div className="bg-linear-to-r from-[#00041F] to-[#0A2630] text-white sm:h-[350px] h-[180px]  pt-8 [clip-path:ellipse(80%_100%_at_50%_0%)]">
        <Stars />
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 sm:pt-42 pt-12 px-10 text-center">
          CONTACT
        </h1>
      </div>
      <div className="min-h-screen w-full mt-24 text-white">
        <div className="flex flex-col sm:flex-row items-start justify-between px-10">
          {/* Left: Text */}
          <div className="space-y-2">
            <h1 className="text-[#43B7DA] tracking-widest text-xl">
              CONTACT US
            </h1>
            <h1 className="text-6xl">GET IN TOUCH</h1>
            <p style={{ fontFamily: "Arial, sans-serif" }} className="-mb-0.5">
              Send us an email and let us know everything you want out of a new
              site. We
            </p>
            <p style={{ fontFamily: "Arial, sans-serif" }} className="-mb-0.5">
              respond to everyone within 24 hours of contacting us. Or give us a
              call and reach us
            </p>
            <p style={{ fontFamily: "Arial, sans-serif" }} className="-mb-0.5">
              immediately for a chat. If we are unavailable we will call back
              same day.
            </p>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-15 h-15 rounded-full border-2 border-[#788a94] shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
              <div className="flex flex-col space-y-1">
                <span>Whatsapp</span>
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  +92 0320 5886722
                </span>
              </div>
            </div>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-15 h-15 rounded-full border-2 border-[#788a94] shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5"
              >
                <Image
                  src="/mail-76.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
              <div className="flex flex-col space-y-1">
                <span>Email</span>
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  shabbych366@gmail.com
                </span>
              </div>
            </div>
            <div className="mt-6 text-lg flex items-center">
              <div
                className="w-15 h-15 rounded-full border-2 border-[#788a94] shadow-[0_0_35px_15px_rgba(17,54,77,0.9)]
 flex items-center justify-center mr-5"
              >
                <Image
                  src="/pin-76.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
              <div className="flex flex-col space-y-1">
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
      <Image
        src="/trees-dark.svg"
        alt="trees"
        width={700}
        height={700}
        className="-mt-80 hidden sm:block"
      />
    </main>
  );
}
