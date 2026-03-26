"use client"

import { Card } from '@nextui-org/react'
import { Activity, Calendar, Camera, ChevronLeft, Image, MoveRight, PictureInPicture, Sparkle, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome back, <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Nour</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Here's an overview of your AI image editing workspace
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>Total Projects</span>
            <Image  size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">2</h3>
          <p className="text-sm text-gray-400 mt-1">All your creations</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>This Month</span>
            <Calendar className='text-blue-700' size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">2</h3>
          <p className="text-sm text-gray-400 mt-1">Projects created</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>This Week</span>
            <Activity className='text-green-500' size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">2</h3>
          <p className="text-sm text-gray-400 mt-1">Recent activity</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>Member Since</span>
            <Star className='text-yellow-400' size={20} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Mar 2026</h3>
          <p className="text-sm text-gray-400 mt-1">Account created</p>
        </Card>

      </div>

      <Card className="p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Sparkle className="text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-800">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card className="p-3 bg-black text-white rounded-md flex flex-col items-center text-center gap-3 hover:scale-105 transition cursor-pointer">
            <Camera size={28} />
            <h3 className="text-lg font-semibold">Create New Project</h3>
            <p className="text-sm opacity-90">
              Upload and edit images with AI
            </p>
          </Card>

          {/* Secondary */}
          <Card className="p-3 rounded-md flex flex-col items-center text-center gap-3 border hover:shadow-md transition cursor-pointer">
            <Image size={28} className="text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">My Projects</h3>
            <p className="text-sm text-gray-500">
              View and manage your work
            </p>
          </Card>

          <Card className="p-3 rounded-md flex flex-col items-center text-center gap-3 border hover:shadow-md transition cursor-pointer">
            <Activity size={28} className="text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-800">Analytics</h3>
            <p className="text-sm text-gray-500">
              Track your usage & stats
            </p>
          </Card>

        </div>
      </Card>

      <Card className="p-6 rounded-2xl shadow-md">
        <div className='flex items-center justify-between mb-6'>
          <h2 className='flex items-center gap-2'>
          <Image />
          <span>
            Recent Projects
          </span>
        </h2>
        
        <Link href="/" className='flex items-center gap-1'>View All <MoveRight /> </Link>
        </div>
      </Card>

    </div>
  )
}