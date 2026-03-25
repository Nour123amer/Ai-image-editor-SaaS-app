// "use client"
// import { Card } from '@nextui-org/react'
// import { Scissors } from 'lucide-react'
// import React from 'react'

// export default function Tools() {
//   return (
//    <>
//    <div className='w-full lg:max-w-[1400px] mx-auto'>
//      <h2 className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
//          Powerful AI Tools at Your
//            <span>Fingertips</span>
//      </h2>
//      <p>Everything you need to create stunning images with the power of artificial intelligence</p>

//      {/* ai tool cards */}
//      <div className='flex flex-col lg:flex-row justify-between'>
//         <Card className='p-4'>
//             <Scissors />
//             <h3>AI Background Removal</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                  Velit autem impedit aliquid facere excepturi provident.</p>
//         </Card>
//         <Card className='p-4'>
//             <Scissors />
//             <h3>AI Background Removal</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                  Velit autem impedit aliquid facere excepturi provident.</p>
//         </Card>
//         <Card className='p-4'>
//             <Scissors />
//             <h3>AI Background Removal</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                  Velit autem impedit aliquid facere excepturi provident.</p>
//         </Card>
//         <Card className='p-4'>
//             <Scissors />
//             <h3>AI Background Removal</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                  Velit autem impedit aliquid facere excepturi provident.</p>
//         </Card>
//      </div>
//    </div>
//    </>
//   )
// }

"use client";

import { Card } from "@nextui-org/react";
import { Scissors, Wand2, ImagePlus, Crop } from "lucide-react";
import React from "react";

export default function Tools() {
  const tools = [
    {
      icon: <Scissors />,
      title: "Background Removal",
      desc: "Remove backgrounds instantly with AI precision and clean edges.",
    },
    {
      icon: <Wand2 />,
      title: "AI Enhancement",
      desc: "Enhance image quality, colors, and details in seconds.",
    },
    {
      icon: <ImagePlus />,
      title: "Image Upscale",
      desc: "Increase resolution without losing quality using AI.",
    },
    {
      icon: <Crop />,
      title: "Smart Cropping",
      desc: "Automatically crop images to focus on important areas.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-24">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold ">
          Powerful AI Tools at Your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Fingertips</span>
        </h2>

        <p className="text-gray-700 text-lg mt-4 max-w-xl mx-auto">
          Everything you need to create stunning images with the power of artificial intelligence
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10
            border-blue-500/40 transition duration-300 hover:shadow-lg
              hover:shadow-blue-500/10 hover:-translate-y-1 rounded-xl"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 shadow-md">
              {tool.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              {tool.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {tool.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}