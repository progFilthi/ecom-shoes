import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-34 z-50 backdrop-blur-lg">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center space-x-6 text-sm">
          <Link href="/all-products">
            <li>Our Collections</li>
          </Link>
          <Link href="/about-us">
            <li>About Us</li>
          </Link>
        </ul>
        <Image src="/nike.png" alt="nike logo" width={50} height={50} />
        <Link href="/cart">
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-blue-200 w-32 h-8 rounded-lg cursor-pointer"
          >
            <ShoppingBagIcon className="h-4" />
            <p className="text-sm">Cart</p>
          </button>
        </Link>
      </nav>
    </header>
  );
}
