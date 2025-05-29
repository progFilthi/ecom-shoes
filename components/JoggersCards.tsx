import Image from "next/image";
import React from "react";

interface ShoeType {
  id: number;
  brand: string;
  image: string;
}

export const ShoesData: ShoeType[] = [
  {
    id: 1,
    brand: "Joggers",
    image: "/joggers1.png",
  },
  {
    id: 2,
    brand: "Runners",
    image: "/joggers3.png",
  },
  {
    id: 3,
    brand: "Climbers",
    image: "/joggers2.png",
  },
];

export default function JoggersCards() {
  return (
    <div className="flex items-center gap-10 mb-4 px-20">
      {ShoesData.map((shoe) => (
        <div
          key={shoe.id}
          className="bg-blue-100 w-80 h-80 relative rounded-sm"
        >
          <div className="flex items-center justify-center flex-col space-y-4 p-2">
            <Image
              src={shoe.image}
              alt={shoe.brand}
              width={230}
              height={230}
              className="pb-4 absolute top-0 bottom-0"
            />
            <div className="flex items-center justify-between space-x-24 text-sm font-semibold mt-70">
              <h1>{shoe.brand}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
