"use client";

import { Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pricing() {
  const router = useRouter()
  return (
    <section id="pricing" className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">
        Start Creating <span className="text-blue-600">For Free</span>
      </h2>

      <p className="text-gray-500 mb-12">
        No credit card required. Begin transforming your images instantly.
      </p>

      <div className="flex justify-center">
        <Card className="p-8 w-full max-w-md border border-gray-200 shadow-lg relative">

          <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-bl-xl">
            Free to Start
          </span>

          <h3 className="text-xl font-semibold mb-2">Free Plan</h3>

          <p className="text-4xl font-bold mb-4">$0</p>

          <ul className="text-gray-600 text-sm space-y-2 mb-6 text-left">
            <li>✔ AI Background Removal</li>
            <li>✔ Smart Image Upscaling</li>
            <li>✔ Object-Focused Cropping</li>
            <li>✔ High-Quality Downloads</li>
            <li>✔ Fast Processing</li>
            <li>✔ Cloud Storage</li>
          </ul>

          <Button
          onClick={()=>{router.push("/auth/sign-in")}}
          className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Try It Free Now
          </Button>

          <p className="text-xs text-gray-400 mt-3">
            Includes 10 free credits. No credit card required.
          </p>
        </Card>
      </div>
    </section>
  );
}