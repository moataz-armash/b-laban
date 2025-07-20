import heroImage from "@/public/hero-img.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-full bg-white">
      <Image
        src={heroImage}
        alt="Hero Background"
        className="object-contain md:object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 mb-8">
        <button className="bg-white text-secondary px-3 py-1 font-arabic font-semibold shadow-md cursor-pointer rounded-lg text-md md:text-2xl md:px-6 md:py-3">
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
