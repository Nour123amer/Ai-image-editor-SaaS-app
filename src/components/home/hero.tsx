"use client"
import { Button } from '@nextui-org/react'
import { Sparkles } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <section className="h-[100vh] pt-12 flex items-center justify-center px-4 ">
      <div className="max-w-4xl text-center flex flex-col items-center gap-6">

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm">
          <Sparkles size={16} />
          <span>Powered by Advanced AI</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Transform Images with{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI Magic
          </span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl">
          Professional image editing powered by artificial intelligence.
          Remove backgrounds, upscale images, and crop with precision — all in seconds.
        </p>

        <div className="flex gap-4 mt-2">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6"
          >
            Try it free now
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="border-gray-300 text-gray-700 px-6"
          >
            View Demo
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Trusted by thousands of creators worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 w-full max-w-3xl">
          {[
            { value: "10K+", label: "Images processed" },
            { value: "2.5K+", label: "Active users" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "AI Processing" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {item.value}
              </h3>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}