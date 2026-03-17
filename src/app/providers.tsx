"use client"
import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import { authClient } from "lib/auth-client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"


export function Providers({ children }: { children: ReactNode }) {
    const router = useRouter()

    return (
        <AuthUIProvider
            authClient={authClient}
            navigate={router.push}
            replace={router.replace}
            onSessionChange={ async () => {
                // Clear router cache (protected routes)
                router.refresh()

                // check if user is authenticated && redirect to dashboard
                try {
                    const session= await authClient.getSession();
                    if(session.data?.user && typeof window !== "undefined"){
                        const currentPath = window.location.pathname;
                        // only redirect if we are on an auth page
                        if(currentPath.startsWith("/auth/")){
                            router.push("/dashboard")
                        }
                    }
                }catch(err){
                    console.log(err)
                }
            }}
            Link={Link}
        >
            {children}
        </AuthUIProvider>
    )
}