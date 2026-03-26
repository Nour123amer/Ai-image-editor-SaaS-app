import React from 'react'

export default function Steps() {
  const steps = [
    {
      title: "Upload Your Image",
      desc: "Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."
    },
    {
      title: "Upload Your Image",
      desc: "Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."
    },
    {
      title: "Upload Your Image",
      desc: "Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."
    }]

  return (
    <>
      <div className='h-screen w-full  mx-auto bg-gray-50 flex flex-col items-center justify-center'>
        <h2 className='font-bold text-3xl mb-2'>Simple. Fast. Professional.</h2>
        <p className='text-xl text-gray-700 mb-8'>Get professional results in three simple steps</p>


        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto gap-10">

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col  flex-1">

              <div className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold z-10">
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-12 w-4/5 h-[2px] 
          bg-gradient-to-r from-blue-500 to-purple-500 z-0"></div>
              )}

              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-500 max-w-[250px] mt-2">
                {step.desc}
              </p>

            </div>
          ))}

        </div>


      </div>
    </>
  )
}
