"use client"
import { Infinity } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getUserProjects } from '~/actions/projects'
import { type Project } from '../../../(dashboard)/dashboard/create/page'

export default function Overview() {
  const [userProjects, setUserProjects] = useState<Project[]> ([]);

  useEffect(() => {
    const userProjects = async ()=> {
      const projects =await getUserProjects();
      if(projects?.projects){
        setUserProjects(projects?.projects);
      }
     }
 
     void userProjects();
    },[])

  return (
    <>
    <div className='w-3/4 border  border-gray-200 flex flex-col items-center justify-center rounded-xl p-6 gap-4'>
        <Infinity />
        <h2>
          {userProjects.length > 0 ? "Your Active Subscriptions" : "No Active Subscriptions"}</h2>
        <p className='text-gray-400'>
          {userProjects.length > 0 ? "Remove Background, ai upscale and more." : "no details"} </p>
    </div>
    </>
  )
}
