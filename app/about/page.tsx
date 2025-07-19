"use client";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-secondary">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}
