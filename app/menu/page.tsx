"use client";

import FeaturedMenu from "../components/FeaturedMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-secondary">
      <Navbar />
      <FeaturedMenu />
      <Footer />
    </div>
  );
}
