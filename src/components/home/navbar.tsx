"use client";

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

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <Link className="text-gray-900" href="#">Features</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-gray-900" href="#">Pricing</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-gray-900" href="#">Reviews</Link>
                </NavbarMenuItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button 
                    className="cursor-pointer hover:bg-purple-500 hover:text-white font-bold"
                    variant="light">Sign In</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold">Try Free</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
