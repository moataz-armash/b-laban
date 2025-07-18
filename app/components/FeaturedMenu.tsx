import axios from "axios";
import { useEffect, useState } from "react";

export default function FeaturedMenu() {
  const [menuItems, setMenuItems] = useState([]);

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
    <div>
      {menuItems?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
