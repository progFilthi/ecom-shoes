"use client";

import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

interface Product {
  id: number;
  brand: string;
  price: number;
  imageUrl: string;
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  const filtered = products.filter((product) =>
    product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-20 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">All Products</h1>
        <Link href="/" className="text-blue-500  text-md font-semibold">
          ← Go Back Home
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded-md mb-8"
      />

      <div className="flex items-center flex-wrap gap-10">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div key={product.id} className="bg-blue-100 w-80 h-72 rounded-sm">
              <div className="flex items-center justify-center flex-col space-y-4 p-2">
                <Button />
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
          ))
        ) : (
          <p className="text-gray-500 text-sm">No products found.</p>
        )}
      </div>
    </div>
  );
}
