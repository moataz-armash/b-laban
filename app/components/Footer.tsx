import Image from "next/image";
import logo from "@/public/blaban-logo.png";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="flex max-w-7xl mx-auto justify-between items-center p-4 ">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-arabic text-lg font-semibold text-accent-secondary">
            BLABAN
          </h1>
          <div className="flex flex-shrink-0 items-center">
            <Image src={logo} alt="Blaban logo" width={36} height={36} />
          </div>
        </div>
        <p className="font-arabic text-sm text-black">
          © {new Date().getFullYear()} BLABAN. جميع الحقوق محفوظة
        </p>
        <button className="font-arabic text-sm text-white bg-accent-secondary hover:bg-accent cursor-pointer px-4 py-2 rounded-2xl">
          انضم إلينا
        </button>
      </div>
    </div>
  );
}
