"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function CTA() {
  const router = useRouter();
  return (
    <section className="py-20 px-6 w-full bg-gradient-to-r from-blue-100 to-purple-100 text-center">
      <h2 className="text-3xl font-bold mb-3">
        Ready to Transform Your Images?
      </h2>

      <p className="text-gray-600 mb-6">
        Join thousands of creators using AI to enhance their visual content
      </p>

      <div className="flex justify-center gap-4">
        <Button
        onClick={()=>{router.push("/auth/sign-in")}}
        className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6">
          Try It Free Now
        </Button>

        <Button className="cursor-pointer" variant="bordered">View Examples</Button>
      </div>
    </section>
  );
}