"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted! (Demo, not actually sending)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white shadow-lg p-8 rounded-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-blue-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-blue-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-blue-400 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold resize-none transition"
              rows={6}
              required
            />
            <button
              type="submit"
              className="
    bg-gold text-black font-bold py-3 px-6 rounded-xl
    hover:scale-105 hover:bg-blue-900
    active:scale-95 transition-all duration-300
    border-2 border-blue-400 rounded-xl px-6 py-3
  "
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8 text-black">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Phone
              </h3>
              <p>+251912241972</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Email
              </h3>
              <p>contact@haridigital.com</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1EzUb7FfT2/"
                  className="hover:text-gold transition"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@%E1%88%93%E1%88%AA%E1%8B%B2%E1%8C%82%E1%89%B3%E1%88%8D"
                  className="hover:text-gold transition"
                >
                  You tube
                </a>
                <a
                  href="https://www.tiktok.com/@hari2024tiktok"
                  className="hover:text-gold transition"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
