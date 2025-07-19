import heroImage from "@/public/hero-img.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <Image src={heroImage} alt="Hero Image" fill />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <button className="bg-white text-secondary px-6 py-3 font-arabic font-semibold shadow-md cursor-pointer rounded-lg text-2xl">
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
