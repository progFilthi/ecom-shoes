import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-20 py-10 mt-24 flex items-center justify-center flex-col space-y-6">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 text-base mb-6 max-w-2xl">
        Welcome to our store! We are passionate about creating high-quality,
        stylish footwear that combines comfort, performance, and design. Whether
        you are chasing dreams or just walking through life, our products are
        made to support every step of your journey.
      </p>
      <p className="text-gray-700 text-base mb-6 max-w-2xl">
        Our mission is simple — make your feet feel premium without draining
        your wallet. Designed with care and built to last, our collections aim
        to bring you confidence, comfort, and coolness.
      </p>
      <Link
        href="/"
        className="inline-flex items-center text-blue-500 font-semibold mt-4"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
