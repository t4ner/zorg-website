"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Team />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
