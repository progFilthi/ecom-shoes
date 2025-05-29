import React from "react";
import Image from "next/image";
export default function MemberCard() {
  return (
    <div className="px-20 my-24  mx-20 bg-black py-8 flex items-center justify-between text-white rounded-sm">
      <div>
        <h1 className="text-3xl">Become</h1>
        <h2 className="text-4xl">A member</h2>
        <p className="text-[11px] pb-4 pt-2 text-blue-100/40">
          And enjoy free high quality shoes <br />
          New designs on your feet on a regular basis <br />
          Grab your copy now by joining below!
          <br />
        </p>
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-blue-300 w-32 h-8 rounded-lg cursor-pointer mt-4"
        >
          <p className="text-md text-black">JOIN NOW</p>
        </button>
      </div>
      <Image src={"/nikelogo.png"} alt="nike logo" width={330} height={330} />
    </div>
  );
}
