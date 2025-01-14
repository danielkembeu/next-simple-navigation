import { ButtonLink } from "@/components/ButtonLink";
import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-10">Nextjs Demo</h1>
      <h1 className="text-4xl font-medium">Home Landing page</h1>
      
      <div className="flex items-center justify-center gap-6">
        <ButtonLink href="/" customText="Try me wooky 😍" />
        <ButtonLink href="/products" customText="Go to products" />
      </div>
    </div>
  );
}
