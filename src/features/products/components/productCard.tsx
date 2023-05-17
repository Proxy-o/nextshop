import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/layouts/components/ui/card";
import { type Product } from "../types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="max-w-[20rem] pb-2 shadow-lg hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={product.image || "https://via.placeholder.com/150"}
          alt="iphone"
          width={900}
          className="max-h-[20rem] rounded-md transition-all hover:scale-[1.02]"
          height={900}
        />
        <CardTitle className="text-center">{product.name}</CardTitle>
        <CardDescription className="text-center">
          {product.price} $
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
