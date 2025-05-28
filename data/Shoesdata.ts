interface ShoeType {
  id: number;
  brand: string;
  price: number;
  image: string;
}

export const ShoesData: ShoeType[] = [
  {
    id: 1,
    brand: "Nike Air Max 270",
    price: 280.0,
    image: "/nikeairmax.png",
  },
  {
    id: 2,
    brand: "Nike Air Force 1",
    price: 170.0,
    image: "/nikeshoe2.png",
  },
  {
    id: 3,
    brand: "New Balance 9060",
    price: 230.0,
    image: "/newbalance.png",
  },
];
