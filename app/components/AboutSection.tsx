import Image from "next/image";
import logo from "@/public/blaban-logo.png";
export default function AboutSection() {
  return (
    <div className="flex flex-col bg-white mx-auto rounded-2xl p-8 md:p-16 shadow-lg my-8 max-w-[80%] md:max-w-[80%] md:my-8 lg:max-w-[50%] md:flex-row">
      <div className="flex-1 flex justify-center items-center mb-6 md:justify-start">
        <Image
          src={logo}
          alt="About Us"
          className="rounded-lg shadow-lg object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-secondary font-arabic text-center md:text-right">
          من نحن
        </h2>
        <p className="text-md text-center text-gray-700 md:text-right">
          بلبن هو المكان الذي يجمع بين عبق التراث المصري وأصالة الطعم المنزلي
          نُقدم أشهى الحلويات الشرقية والمصرية التقليدية مثل رز بلبن، مهلبية،
          وأم علي. نستخدم مكونات طبيعية طازجة لنضمن لك جودة لا تُضاهى في كل
          ملعقة. في بلبن، نسعى لتجربة فريدة تُشعرك بدفء البيت وذكريات الطفولة.
          هدفنا هو أن نكون وجهتك الأولى عندما تبحث عن طعم أصيل ونكهة لا تُنسى
        </p>
      </div>
    </div>
  );
}
