"use client";

import { RedirectToSignIn } from "@daveyplate/better-auth-ui";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    NavbarItem,
    Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    return (
        <Navbar className="z-50 bg-white bg-gray-100 h-20 top-0 fixed text-gray-700" position="sticky" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle />
                <NavbarBrand
                className="bg-gradient-to-r text-xl from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >AI Editor</NavbarBrand>
            </NavbarContent>

            <NavbarContent >
                <NavbarMenuItem>
                    <Link className="text-gray-900" href="#features">Features</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-gray-900" href="#pricing">Pricing</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-gray-900" href="#reviews">Reviews</Link>
                </NavbarMenuItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                           <Button onClick={()=>{router.push("/auth/sign-in")}}
                    className="cursor-pointer hover:bg-purple-500 hover:text-white font-bold"
                    variant="light">Sign In</Button>                 
                </NavbarItem>
                <NavbarItem>
                    <Button 
                    onClick={()=>{router.push("/auth/sign-in")}}
                    className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold">Try Free</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
