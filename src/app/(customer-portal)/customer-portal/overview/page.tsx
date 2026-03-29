import { Infinity } from 'lucide-react'
import React from 'react'

export default function overview() {
  return (
    <>
    <div className=' w-3/4 border  border-gray-200 flex flex-col items-center justify-center rounded-xl p-6 gap-4'>
        <Infinity />
        <h2>No Active Subscriptions</h2>
        <p className='text-gray-400'>You don't have any active subscriptions at the moment.</p>
    </div>
    </>
  )
}
