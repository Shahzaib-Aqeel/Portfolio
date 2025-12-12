"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  interface EmailJSResponse {
    status: number;
    text: string;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result: EmailJSResponse) => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error: EmailJSResponse) => {
          console.error(error.text);
          alert("Failed to send message. Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <div
      className="sm:w-full xl:w-[600px] w-full bg-[#01060A] rounded-2xl mt-10 sm:mt-0 mb-10 sm:mb-0 md:mb-10 lg:mb-0 max-w-full"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center p-6 sm:p-10 space-y-6"
      >
        <h1 className="sm:text-5xl text-3xl font-bold mb-4">Make Appointment</h1>

        <h1 className="sm:text-xl font-semibold mb-2">Name</h1>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full h-12 sm:h-14 bg-[#0E1316] rounded-lg px-4 text-white focus:outline-none"
        />

        <h1 className="sm:text-xl font-semibold mb-2">Email</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full h-12 sm:h-14 bg-[#0E1316] rounded-lg px-4 text-white focus:outline-none"
        />

        <h1 className="sm:text-xl font-semibold mb-2">Phone</h1>
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          className="w-full h-12 sm:h-14 bg-[#0E1316] rounded-lg px-4 text-white focus:outline-none"
        />

        <h1 className="sm:text-xl font-semibold mb-2">Message</h1>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message..."
          className="w-full h-32 sm:h-36 bg-[#0E1316] rounded-lg px-4 pt-6 text-white focus:outline-none peer"
        ></textarea>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={loading}
          className="bg-linear-to-r from-gray-300 to-gray-100 text-[#001F3F] text-base sm:px-12 w-full sm:py-4 py-3 rounded-4xl cursor-pointer
                       drop-shadow-[0_0_5px_#fff] drop-shadow-[0_0_1px_#0ff] drop-shadow-[0_0_5px_#0ff]
                       hover:from-white hover:to-gray-100 hover:drop-shadow-[0_0_10px_#0ff] transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
