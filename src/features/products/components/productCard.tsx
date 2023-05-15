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
    <Card className="shadow-lg">
      <CardHeader>
        <Image
          src={product.image || "https://via.placeholder.com/150"}
          alt="iphone"
          width={900}
          className="w-full"
          height={900}
        />
        <CardTitle className="text-center">{product.name}</CardTitle>
        <CardDescription className="text-center">
          {product.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.quantity}</p>
      </CardContent>
    </Card>
  );
};
