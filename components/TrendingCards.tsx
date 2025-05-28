import Image from "next/image";
import React from "react";

interface ShoeType {
  id: number;
  brand: string;
  price: number;
  image: string;
}

export const ShoesData: ShoeType[] = [
  {
    id: 1,
    brand: "adidas Originals",
    price: 150.0,
    image: "/j1s.png",
  },
  {
    id: 2,
    brand: "Jordan Air 1 Low",
    price: 160.0,
    image: "/j1.png",
  },
  {
    id: 3,
    brand: "Jordan Air 1 Mid",
    price: 180.0,
    image: "/adidas.png",
  },
];

export default function TrendingCards() {
  return (
    <div className="flex items-center gap-10 mb-4 px-20">
      {ShoesData.map((shoe) => (
        <div key={shoe.id} className="bg-red-100 w-80 h-72 rounded-sm">
          <div className="flex items-center justify-center flex-col space-y-4 p-2">
            <Image src={shoe.image} alt={shoe.brand} width={250} height={250} />
            <div className="flex items-center justify-between space-x-24 text-sm font-semibold mt-12">
              <h1>{shoe.brand}</h1>
              <h1>${shoe.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
