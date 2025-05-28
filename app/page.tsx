import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-8 space-x-64 mt-8">
        <div>
          <div className="leading-20 space-y-1">
            <h1 className="text-4xl">We Make </h1>
            <h2 className="text-5xl">Your Dreams</h2>
            <h3 className="text-6xl">Come True</h3>
          </div>
          <p className="text-sm text-gray-500 leading-4 mt-4">
            The shoes That Make Your Feet Feel Premium <br />
            Be careful, they are addictive! <br />
            Do not drain your bank account, buy them now!
          </p>
        </div>
        <Image
          src={"/nikeshoe1.png"}
          alt="nike shoe1"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
