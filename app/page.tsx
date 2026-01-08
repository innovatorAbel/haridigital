"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Services from "../components/Services";
import FeaturedPodcast from "../components/FeaturedPodcast";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedPodcast />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      

      {/* Next: Featured News, Portfolio, Footer */}
    </main>
  );
}
