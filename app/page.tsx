"use client";

import FeaturedMenu from "./components/FeaturedMenu";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  // const handleAdd = async () => {
  //   try {
  //     const res = await axios.post("/api/create-note", {
  //       title: "New Note",
  //       content: "This is a test from Next.js",
  //     });
  //     console.log("Created note:", res.data);
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       console.error(
  //         "Error creating note:",
  //         error.response?.data || error.message
  //       );
  //     } else {
  //       console.error("Unexpected error:", error);
  //     }
  //   }
  // };
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedMenu />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
