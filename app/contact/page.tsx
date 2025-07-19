"use client";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}
