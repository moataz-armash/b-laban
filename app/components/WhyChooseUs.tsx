import {
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "جودة عالية",
    description: "نستخدم أفضل المكونات لضمان جودة منتجاتنا",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "أسعار تنافسية",
    description: "نقدم أسعارًا تنافسية دون المساس بالجودة",
    icon: CurrencyDollarIcon,
  },
  {
    name: "خدمة عملاء ممتازة",
    description: "فريقنا هنا لمساعدتك في أي استفسارات",
    icon: UsersIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-accent-secondary">
      <div className="flex flex-col items-center p-8 max-w-7xl mx-auto">
        <h1 className="font-arabic text-xl text-white font-semibold">
          لماذا نحن ؟
        </h1>
        <p className="font-arabic text-white">
          نحن نقدم أفضل المنتجات بأعلى جودة وبأسعار تنافسية
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-4 rounded-lg flex flex-col items-center gap-2 h-full">
              <feature.icon className="h-18 w-18 text-white" />
              <h2 className="font-arabic text-lg font-semibold text-white">
                {feature.name}
              </h2>
              <p className="font-arabic text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
