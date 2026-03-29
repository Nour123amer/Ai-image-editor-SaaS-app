import { Providers } from "~/app/providers"
import { CustomerPortalSidebar } from "~/components/CustomerPortalSidebar"
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar"

export default function customerPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[1200px] mx-auto   ">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
         <Providers>
              <SidebarProvider>
                <CustomerPortalSidebar />
                <SidebarInset className="flex  flex-col ">
                 <main className="h-[500px] my-auto p-6 flex items-center justify-center">{children}</main>     
                </SidebarInset>
            </SidebarProvider>
         </Providers>
      </body>
    </html>
  )
}