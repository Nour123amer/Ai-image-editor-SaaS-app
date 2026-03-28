"use client"
import { Calendar, ChevronDown, Grid3x2, LayoutGrid, List, Logs, Search } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { getUserProjects } from '~/actions/projects'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu"
import { Button } from '~/components/ui/button'

export default function projectsPage() {

  const [userProjects, setUserProjects] = useState<object[]>([]);
  const [active, setActive] = useState("newest");
  const [direction, setDirection] = useState("grid");



  useEffect(() => {
    const loadProjects = async () => {
      const result = await getUserProjects();

      if (result?.projects) {
        setUserProjects(result?.projects);
      }
    }

    loadProjects()
  }, [])

  const sortedProjects = useMemo(()=>{
    return [...userProjects].sort((a: any, b: any) => {
    if (active === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }

    if (active === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }

    if (active === "alphabetical") {
      return (a.name||"").localeCompare(b.name ||"")
    }

    return 0;
  })
},[userProjects, active])

  return (
    <>
      <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Your Projects
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Manage and continue editing your AI-powered creations.
            </p>
          </div>

          {/* View Switcher using Tabs for better UX */}
          <Tabs defaultValue={direction} onValueChange={(v) => setDirection(v)}>
            <TabsList className="grid w-full grid-cols-2 h-10 shadow-sm border">
              <TabsTrigger value="grid" onClick={() => setDirection("grid")}>
                <LayoutGrid className="w-4 h-4 mr-2" /> Grid
              </TabsTrigger>
              <TabsTrigger value="list" onClick={() => setDirection("list")}>
                <List className="w-4 h-4 mr-2" /> List
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Toolbar: Search & Filter */}
        <Card className="max-w-7xl mx-auto mb-8 border-none shadow-sm bg-white/50 backdrop-blur-md">
          <CardContent className="p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-white border-slate-200 focus-visible:ring-blue-500 h-11"
              />
            </div>

            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-11 border-slate-200 gap-2 bg-white">
                    Sort by: <span className="font-bold text-blue-600">{active}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => setActive("newest")}>Newest First</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActive("oldest")}>Oldest First</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActive("alphabetical")}>Alphabetical</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Projects Display */}
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
            <div className={`grid gap-6 ${direction === "list"
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}>
              {sortedProjects.map((project: any) => (
                <div
                  key={project.id}
                  className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex ${direction === "list" ? "flex-row h-40" : "flex-col"
                    }`}
                >
                  {/* Thumbnail Container */}
                  <div className={`relative overflow-hidden bg-slate-100 ${direction === "list" ? "w-64 shrink-0" : "aspect-[16/10]"
                    }`}>
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Info Container */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {project.name || "Untitled Project"}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">
                          {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>

                    {direction === "list" && (
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="secondary" className="rounded-lg">Edit</Button>
                        <Button size="sm" variant="ghost" className="rounded-lg text-slate-400">View</Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
