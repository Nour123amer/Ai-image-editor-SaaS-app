"use client"
import React, { useEffect, useState } from 'react'
import { getUserProjects } from '~/actions/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

import { type Project } from '../../../(dashboard)/dashboard/create/page'


export default function Orders() {
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
   <div className='w-3/4 mx-auto flex flex-col gap-6'>

      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Order History
        </h2>
        <p className="text-sm text-slate-500">
          Track your orders, analytics, and reports easily.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview">

        {/* Tabs Header */}
        <TabsList className='w-full bg-slate-100 p-1 rounded-xl flex gap-1'>

          <TabsTrigger
            value="overview"
            className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
          >
            Analytics
          </TabsTrigger>

          <TabsTrigger
            value="reports"
            className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
          >
            Reports
          </TabsTrigger>

          <TabsTrigger
            value="settings"
            className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
          >
            Settings
          </TabsTrigger>

        </TabsList>

        {/* Content Card */}
        <TabsContent value="overview">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Overview
              </CardTitle>
              <CardDescription className="text-slate-500">
                View your recent project activity. Track progress across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              You have {userProjects.length? userProjects.length : 0} active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Analytics
              </CardTitle>
              <CardDescription className="text-slate-500">
                Track performance and user engagement metrics. Monitor trends and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Reports
              </CardTitle>
              <CardDescription className="text-slate-500">
                Generate and download your detailed reports. Export data in multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Settings
              </CardTitle>
              <CardDescription className="text-slate-500">
                Manage your account preferences and options. Customize your experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
    </>
  )
}
