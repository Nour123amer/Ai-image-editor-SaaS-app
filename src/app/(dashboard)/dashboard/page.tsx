"use client"
import { Card } from '@nextui-org/react'
import { Activity, Calendar, Camera, Image, LayoutGrid, MoveRight, Sparkle, Star } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getUserProjects } from '~/actions/projects'
import { Button } from '~/components/ui/button'
import { type Project } from './create/page'

export default function Page() {
  const router = useRouter();
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [thisMonthProjects, setThisMonthProjects] = useState<Project[]>([]);
  const [thisweekProjects, setThisWeekProjects] = useState<Project[]>([]);
  const [joinDate, setJoinDate] = useState<number | null>(null);


  useEffect(() => {
    const loadProjects = async () => {
      const result = await getUserProjects();

      if (result?.projects) {
        setUserProjects(result?.projects);
      }
    }

   void loadProjects()
  }, []);

  useEffect(() => {
    const thisMonth = new Date().getMonth();
    const filtered = userProjects.filter(project => {
      const projectDate = new Date(project.createdAt);
      return projectDate.getMonth() === thisMonth;
    });
    setThisMonthProjects(filtered);
  }, [userProjects]);

 useEffect(() => {
    const join = userProjects[0]?.createdAt;
    if (join) {
      const date = new Date(join);
      setJoinDate(date.getTime());
    }

  },[userProjects]);

  useEffect(() => {
  const now = new Date();

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const filtered = userProjects.filter((project: Project) => {
    const projectDate = new Date(project.createdAt); 
    return projectDate >= startOfWeek && projectDate <= endOfWeek;
  });

  setThisWeekProjects(filtered);
}, [userProjects]);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome back, <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Nour</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Here is an overview of your AI image editing workspace
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>Total Projects</span>
            <Image size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{userProjects?.length}</h3>
          <p className="text-sm text-gray-400 mt-1">All your creations</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>This Month</span>
            <Calendar className='text-blue-700' size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{thisMonthProjects?.length}</h3>
          <p className="text-sm text-gray-400 mt-1">Projects created</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>This Week</span>
            <Activity className='text-green-500' size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{thisweekProjects?.length}</h3>
          <p className="text-sm text-gray-400 mt-1">Recent activity</p>
        </Card>

        <Card className="p-5 shadow-md rounded-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <span>Member Since</span>
            <Star className='text-yellow-400' size={20} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{joinDate ? new Date(joinDate).toLocaleDateString() : 'N/A'}</h3>
          <p className="text-sm text-gray-400 mt-1">Account created</p>
        </Card>

      </div>


      {/* quick actions */}
      <Card className="p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Sparkle className="text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-800">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card isPressable onPress={() => { router.push("/dashboard/create") }} className="p-3 bg-black text-white rounded-md flex flex-col items-center text-center gap-3 hover:scale-105 transition cursor-pointer">
            <Camera size={28} />
            <h3 className="text-lg font-semibold">Create New Project</h3>
            <p className="text-sm opacity-90">
              Upload and edit images with AI
            </p>
          </Card>

          {/* Secondary */}
          <Card isPressable onPress={() => { router.push("/dashboard/projects") }} className="p-3 rounded-md flex flex-col items-center text-center gap-3 border hover:shadow-md transition cursor-pointer">
            <Image size={28} className="text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">My Projects</h3>
            <p className="text-sm text-gray-500">
              View and manage your work
            </p>
          </Card>

          <Card isPressable className="p-3 rounded-md flex flex-col items-center text-center gap-3 border hover:shadow-md transition cursor-pointer">
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

          <Link
            href="/dashboard/projects" className='flex items-center gap-1'>View All <MoveRight /> </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {userProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <LayoutGrid className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-xl font-medium">No projects found</p>
              <Button variant="link" className="text-blue-600">Create your first project</Button>
            </div>
          ) : (
            <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                      `}>
              {userProjects.slice(0, 4).map((project: Project) => (
                <div
                  key={project.id}
                  className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col`}
                >
                  {/* Thumbnail Container */}
                  <div className={`relative overflow-hidden bg-slate-100 aspect-[16/10] `}>
                    <img
                      src={project.imageUrl}
                      alt={project.name ?? "project image"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Info Container */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {project.name ?? "Untitled Project"}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">
                          {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>


                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="secondary" className="rounded-lg">Edit</Button>
                      <Button size="sm" variant="ghost" className="rounded-lg text-slate-400">View</Button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

    </div>
  )
}