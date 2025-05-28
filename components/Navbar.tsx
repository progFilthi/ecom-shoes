import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-34">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center space-x-6 text-sm">
          <li>Our Collections</li>
          <li>About Us</li>
        </ul>
        <Image src={"/nike.png"} alt="nike logo" width={50} height={50} />
        <Bars3Icon className="h-4" />
      </nav>
    </header>
  );
}
