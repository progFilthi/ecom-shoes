import Cards from "@/components/Cards";
import TrendingCards from "@/components/TrendingCards";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2 space-x-64">
        <div className="px-10 space-y-4">
          <div className="font-semibold tracking-tighter">
            <h1 className="text-4xl">We Make </h1>
            <h2 className="text-5xl">Your Dreams</h2>
            <h3 className="text-6xl">Come True</h3>
          </div>
          <p className="text-sm text-gray-600">
            The shoes That Make Your Feet Feel Premium <br />
            Be careful, they are addictive! <br />
            Do not drain your bank account, buy them now!
          </p>
        </div>
        <Image src={"/j4s.png"} alt="nike shoe1" width={400} height={400} />
      </div>
      <div>
        <div className="flex items-center justify-between px-20">
          <h1 className="text-2xl font-semibold py-2">Popular Collections</h1>
          <div className="text-sm underline flex items-center gap-1 cursor-pointer">
            <h1>DISCOVER ALL PRODUCTS</h1>
            <ArrowRightIcon className="h-4" />
          </div>
        </div>
        <Cards />
        <div className="flex items-center justify-between px-20">
          <h1 className="text-2xl font-semibold py-2">Trending Now</h1>
          <div className="text-sm underline flex items-center gap-1 cursor-pointer">
            <h1>DISCOVER ALL PRODUCTS</h1>
            <ArrowRightIcon className="h-4" />
          </div>
        </div>
        <TrendingCards />
      </div>
    </div>
  );
}
