import type { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import React, { use } from "react";
import { api } from "~/utils/api";
import type { Product } from "../types";

export default function SingleProduct({ product }: ProductPageProps) {
  const router = useRouter();
  return <div>{JSON.stringify(product)}</div>;
}

interface ProductPageProps {
  product: Product;
}

export function getStaticProps(context: GetStaticPropsContext<ParsedUrlQuery>) {
  const { params } = context;
  console.log("fooo", params);

  //   const { data: product } = api.products.getProductById.useQuery({
  //     slug: productId,
  //   });

  //   // By returning { props: { posts } }, the Blog component
  //   // will receive `posts` as a prop at build time
  return {
    props: {},
  };
}
