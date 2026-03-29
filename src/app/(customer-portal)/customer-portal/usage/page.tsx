import { Search } from 'lucide-react'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from '~/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

export default function usage() {
  return (
    <div className='w-3/4 mx-auto flex flex-col gap-6'>
    
          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
             Usage
            </h2>
            <div className="relative w-full  group">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <Input
                            placeholder="Search projects..."
                            className="pl-10 bg-white border-slate-200 focus-visible:ring-blue-500 h-9 rounded-full"
                          />
                        </div>
            
          </div>
    
          {/* Tabs */}
          <Tabs defaultValue="overview">
    
            {/* Tabs Header */}
            <TabsList className='w-full bg-slate-100 p-1 rounded-xl flex gap-1'>
    
              <TabsTrigger
                value="overview"
                className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
              >
                Name
              </TabsTrigger>
    
              <TabsTrigger
                value="analytics"
                className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
              >
                Consumed
              </TabsTrigger>
    
              <TabsTrigger
                value="reports"
                className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
              >
                Credited
              </TabsTrigger>
    
              <TabsTrigger
                value="settings"
                className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all"
              >
                Balance
              </TabsTrigger>
    
            </TabsList>
    
            {/* Content Card */}
            <TabsContent value="overview">
              <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    Name
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    View your key metrics and recent project activity. Track progress across all your active projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  You have 12 active projects and 3 pending tasks.
                </CardContent>
              </Card>
            </TabsContent>
    
            <TabsContent value="analytics">
              <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    Consumed
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
                    Credited
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
                    Balance
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
  )
}
