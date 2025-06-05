import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 mx-14">{children}</main>
      <Footer />
    </div>
  );
}
