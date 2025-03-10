import coffee from "../image/coffee.jpeg";
import tea from "../image/tea.jpg";
// src/menuData.ts
export const menuData = {
  categories: [
    {
      id: "coffee",
      name: "Coffee",
      description: "A variety of freshly brewed coffees to kickstart your day.",
      image: coffee,
    },
    {
      id: "tea",
      name: "Tea",
      description: "Relaxing and aromatic teas for a soothing experience.",
      image: tea,
    },
  ],
  items: [
    {
      id: "1",
      name: "Espresso",
      description: "Strong and bold shot of freshly brewed espresso.",
      price: 100,
      image: coffee,
      categoryId: "coffee",
      dietary: ["Caffeine"],
    },
    {
      id: "2",
      name: "Americano",
      description:
        "Espresso diluted with hot water, giving it a smooth and rich flavor.",
      price: 120,
      image: coffee,
      categoryId: "coffee",
      dietary: ["Caffeine"],
    },
    {
      id: "3",
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam.",
      price: 160,
      image: coffee,
      categoryId: "coffee",
      dietary: ["Caffeine", "Dairy"],
    },
    {
      id: "4",
      name: "Cappuccino",
      description: "Espresso with steamed milk and a thick layer of foam.",
      price: 160,
      image: coffee,
      categoryId: "coffee",
      dietary: ["Caffeine", "Dairy"],
    },
    {
      id: "5",
      name: "Black Tea",
      description:
        "Strong and flavorful black tea leaves brewed to perfection.",
      price: 30,
      image: tea,
      categoryId: "tea",
    },
    {
      id: "6",
      name: "Green Tea",
      description: "Light and refreshing green tea with subtle earthy flavors.",
      price: 30,
      image: tea,
      categoryId: "tea",
    },
    {
      id: "7",
      name: "Chamomile Tea",
      description: "A calming herbal tea with delicate floral notes.",
      price: 80,
      image: tea,
      categoryId: "tea",
    },
    {
      id: "8",
      name: "Milk Tea",
      description: "A classic black tea infused with aromatic bergamot.",
      price: 40,
      image: tea,
      categoryId: "tea",
    },
  ],
};
