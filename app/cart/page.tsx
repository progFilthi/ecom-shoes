"use client";

import React from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-20 py-28">
      <div className="mb-6 text-end">
        <Link
          href="/"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Go Back to Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-blue-100 p-4 rounded"
            >
              <Image
                src={`/${item.imageUrl}`}
                alt={item.brand}
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-semibold">{item.brand}</h2>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="text-right mt-6 font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
