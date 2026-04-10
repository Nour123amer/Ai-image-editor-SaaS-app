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
 