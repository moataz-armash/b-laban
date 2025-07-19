import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type MenuItem = {
  id: string;
  title: string;
  price: number;
  img: string;
};

export default function FeaturedMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const res = await axios.get("/api/get-menu");
        setMenuItems(res.data.documents);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }
    fetchMenuItems();
  }, []);
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary font-arabic">
        منتجاتنا الأكثر مبيعا
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 bg-white max-w-7xl mx-auto">
        {menuItems?.map((item) => (
          <div
            key={item.title}
            className="shadow-xl/20 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl">
            <Image
              src={item.img}
              alt={item.title}
              className="border-8 border-secondary rounded-full"
              width={128}
              height={128}
            />
            <h3 className="text-lg font-semibold text-right text-accent-secondary">
              {item.title}
            </h3>
            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-row-reverse text-accent text-left gap-1">
                <span className="font-bold">{item.price.toFixed(2)}</span>{" "}
                <span className="font-arabic">ج.م</span>
              </div>
              <button className="font-arabic bg-accent-secondary text-white px-3 py-1 rounded-2xl cursor-pointer hover:bg-accent">
                أضف إلى السلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
