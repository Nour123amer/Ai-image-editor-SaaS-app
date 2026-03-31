// import { Providers } from "~/app/providers"
// import { CustomerPortalSidebar } from "~/components/CustomerPortalSidebar"
// import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar"

// export default function customerPortalLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (

//       <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
//   <Providers>
//     <SidebarProvider>
//       <div className="flex flex-col lg:flex-row min-h-screen w-full">

//         {/* Sidebar */}
//         <div className="hidden lg:block">
//           <CustomerPortalSidebar />
//         </div>

//         {/* Mobile Top Bar*/}
//         <div className="lg:hidden flex items-center justify-between p-4 border-b">
//           <span className="font-semibold">Dashboard</span>
//         </div>

//         {/* Content */}
//         <SidebarInset className="flex flex-col flex-1">
//           <main className="flex-1 p-4 md:p-6 flex items-center justify-center lg:w-full ">
//             {children}
//           </main>
//         </SidebarInset>

//       </div>
//     </SidebarProvider>
//   </Providers>
// </div>

//   )
// }

import { Providers } from "~/app/providers";
import { CustomerPortalSidebar } from "~/components/CustomerPortalSidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
 
export default function CustomerPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <SidebarProvider>
        {/*
         * Outer wrapper: full-width on mobile, capped at 1400 px on large screens.
         * `relative` so the sticky sidebar + fixed bottom-nav work correctly.
         */}
        <div className="relative flex  min-h-screen w-full max-w-[1400px] mx-auto">
 
          {/* Sidebar — renders desktop aside + mobile top-bar + mobile drawer + bottom-tabs */}
          <CustomerPortalSidebar />
 
          {/* Main content area */}
          <SidebarInset className="flex flex-col flex-1 min-w-0">
            <main
              className={[
                "flex-1 p-4 sm:p-6 lg:p-8 justify-center items-center flex",
          
                // Push content above the mobile bottom tab bar (64 px tall)
                "pb-20 lg:pb-8",
              ].join(" ")}
            >
              {children}
            </main>
          </SidebarInset>
 
        </div>
      </SidebarProvider>
    </Providers>
  );
}
 