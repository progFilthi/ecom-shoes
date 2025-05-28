import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Button() {
  return (
    <div className="flex space-x-1 shadow-sm rounded-lg w-20 h-6 items-center justify-center bg-white ml-46 mt-2 cursor-pointer">
      <ShoppingBagIcon className="h-3" />
      <h1 className="text-[10px] tracking-tighter">Add To Cart</h1>
    </div>
  );
}
