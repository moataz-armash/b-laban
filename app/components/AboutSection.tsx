import Image from "next/image";
import logo from "@/public/blaban-logo.png";
export default function AboutSection() {
  return (
    <div className="flex flex-col bg-white max-w-xl mx-auto rounded-2xl p-8 md:p-16 shadow-lg min-h-[50px] md:max-w-4xl md:min-h-[150px] md:flex-row">
      <div className="flex-1 flex justify-center items-center md:justify-start">
        <Image
          src={logo}
          alt="About Us"
          className="rounded-lg shadow-lg object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-secondary font-arabic text-right">
          من نحن
        </h2>
        <p className="text-md text-right text-gray-700">
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
