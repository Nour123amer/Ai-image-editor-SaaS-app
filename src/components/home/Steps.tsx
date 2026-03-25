import React from 'react'

export default function Steps() {
    const steps=[  
        { title:"Upload Your Image",
            desc:"Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."},
            { title:"Upload Your Image",
            desc:"Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."},
            { title:"Upload Your Image",
            desc:"Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP."}]

  return (
    <>
    <div className='h-screen w-full  mx-auto bg-gray-50 flex flex-col items-center justify-center'>
        <h2 className='font-bold text-3xl mb-2'>Simple. Fast. Professional.</h2>
        <p className='text-xl text-gray-700 mb-8'>Get professional results in three simple steps</p>

         <div className='flex flex-col w-full max-w-6xl md:flex-row justify-between'>
            {steps.map((step,index)=>{
                return <div className='p-4 '>
                         <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
                         <p className='text-lg text-gray-500 max-w-[300px]'>{step.desc}</p>
                    </div>
            })}
            
                     </div>


    </div>
    </>
  )
}
