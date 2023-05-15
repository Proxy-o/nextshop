import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Products from "~/features/products/pages";
import { Button } from "~/layouts/components/ui/button";
import { Header } from "~/layouts/header";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
      <Products/>
  );
};

export default Home;
