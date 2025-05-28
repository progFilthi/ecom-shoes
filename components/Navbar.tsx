import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-16">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center space-x-2 text-sm tracking-tighter">
          <li>Our Collections</li>
          <li>About Us</li>
        </ul>
        <Image src={"/nike.png"} alt="nike logo" width={40} height={40} />
        <Bars3Icon className="h-4" />
      </nav>
    </header>
  );
}
