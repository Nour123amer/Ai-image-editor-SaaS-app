"use client";

import { Card } from "@nextui-org/react";
import React from "react";

export default function Reviews() {
  const reviews = [
    {
      text: "This tool has revolutionized my workflow. Background removal used to take hours now takes seconds!",
      name: "Sarah Chen",
      role: "Graphic Designer",
    },
    {
      text: "Perfect for product photography. The AI upscaling feature makes my images look professional.",
      name: "Marcus Johnson",
      role: "E-commerce Owner",
    },
    {
      text: "The object cropping feature is incredible. It knows exactly what I want to focus on.",
      name: "Emma Rodriguez",
      role: "Content Creator",
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-bold">
          Loved by <span className="text-blue-600">Creators</span>
        </h2>
        <p className="text-gray-500 mt-3">
          See what our users are saying about AI Image Editor
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <Card key={i} className="p-6 border border-gray-200 shadow-sm">
            <div className="flex gap-1 text-yellow-400 mb-3">
              {"★★★★★"}
            </div>

            <p className="text-gray-600 text-sm mb-4">"{review.text}"</p>

            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-xs text-gray-400">{review.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}