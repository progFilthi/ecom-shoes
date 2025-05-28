import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { ShoesData } from "@/data/Shoesdata";

export default function Cards() {
  return (
    <div className="flex items-center gap-10 mb-4 px-20">
      {ShoesData.map((shoe) => (
        <div key={shoe.id} className="bg-gray-200 w-80 h-72 rounded-sm">
          <div className="flex items-center justify-center flex-col space-y-4 p-2">
            <div className="flex space-x-1 shadow-sm rounded-lg w-20 h-6 items-center justify-center bg-white ml-46 mt-2">
              <ShoppingBagIcon className="h-3" />
              <h1 className="text-[10px] tracking-tighter">Add To Cart</h1>
            </div>
            <Image src={shoe.image} alt={shoe.brand} width={250} height={250} />
            <div className="flex items-center justify-between space-x-24 text-sm font-semibold">
              <h1>{shoe.brand}</h1>
              <h1>${shoe.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
