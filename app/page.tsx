import Cards from "@/components/Cards";
import JoggersCards from "@/components/JoggersCards";
import MemberCard from "@/components/MemberCard";
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
      <div className="px-20 text-gray-300 py-12">
        <hr />
        <div className="text-sm underline flex items-center gap-1 cursor-pointer justify-center py-4 text-black">
          <h1>DISCOVER ALL PRODUCTS</h1>
          <ArrowRightIcon className="h-4" />
        </div>
        <hr />
      </div>
      <div className="flex items-center justify-between px-20 py-4">
        <h1 className="text-2xl font-semibold py-2">Shoowrooms</h1>
        <p className="text-[10px] font-light">
          There is always <br />
          a run no matter <br />
          if you finish or not!
        </p>
      </div>
      <JoggersCards />
      <MemberCard />
    </div>
  );
}
