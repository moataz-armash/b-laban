import { usePathname } from "next/navigation";
import MenuItems from "./MenuItems";

export default function FeaturedMenu() {
  const path = usePathname();
  const isMenuPage = path !== "/menu" ? "الأكثر مبيعا" : "";
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary font-arabic">
        منتجاتنا {isMenuPage}
      </h2>
      <MenuItems />
    </div>
  );
}
