import Image from "next/image";
import React from "react";
import { ShoesData } from "@/data/Shoesdata";
import Button from "./Button";

export default function Cards() {
  return (
    <div className="flex items-center gap-10 mb-4 px-20">
      {ShoesData.map((shoe) => (
        <div key={shoe.id} className="bg-blue-100 w-80 h-72 rounded-sm">
          <div className="flex items-center justify-center flex-col space-y-4 p-2">
            <Button />
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
