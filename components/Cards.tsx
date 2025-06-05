"use client";

import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Image from "next/image";
import Button from "./Button";

interface Product {
  id: number;
  brand: string;
  price: number;
  imageUrl: string;
}

export default function Cards() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex items-center flex-wrap gap-10 mb-4 px-20">
      {products.map((product) => (
        <div key={product.id} className="bg-blue-100 w-80 h-72 rounded-sm">
          <div className="flex items-center justify-center flex-col space-y-4 p-2">
            <Button product={product} />
            <Image
              src={`/${product.imageUrl}`}
              alt={product.brand}
              width={250}
              height={250}
            />
            <div className="flex items-center justify-between w-full px-4 text-sm font-semibold">
              <h1>{product.brand}</h1>
              <h1>${product.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
