import React from "react";
import { ProductCard } from "../components/productCard";
import { api } from "~/utils/api";

export default function Products() {
  const { data: products } = api.products.getAll.useQuery();
  return (
    <div className="container  gap-2 md:flex md:justify-center">
      {products?.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
