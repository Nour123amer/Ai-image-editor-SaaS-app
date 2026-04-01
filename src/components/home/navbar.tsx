// "use client";
// import {
//     Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarMenuToggle,
//     NavbarMenuItem,
//     Link,
//     NavbarItem,
//     Button,
// } from "@nextui-org/react";
// import { Menu } from "lucide-react";
// import { useRouter } from "next/navigation";

// import { useState } from "react";

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);
//     const router = useRouter()

//     return (
//         <Navbar
//             isMenuOpen={isMenuOpen}
//             onMenuOpenChange={setIsMenuOpen}
//             className="z-50 bg-white bg-gray-100 h-20 top-0 fixed text-gray-700" 
//             position="sticky">
//             <NavbarContent>
//                 <NavbarMenuToggle />
//               <div className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
//                 <Button onPress={()=>{setIsMenuOpen(!isMenuOpen)}} className="cursor-pointer">
//                     {!isMenuOpen ?  <Menu /> :""}
//                 </Button>
//              </div>
//                 <NavbarBrand
//                     className="bg-linear-to-r text-xl from-blue-500 to-purple-500 bg-clip-text text-transparent"
//                 >AI Editor</NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className={` ${isMenuOpen ? "flex" : "hidden"} `} >
//                 <NavbarMenuItem>
//                     <Link className="text-gray-900" href="#features">Features</Link>
//                 </NavbarMenuItem>
//                 <NavbarMenuItem>
//                     <Link className="text-gray-900" href="#pricing">Pricing</Link>
//                 </NavbarMenuItem>
//                 <NavbarMenuItem>
//                     <Link className="text-gray-900" href="#reviews">Reviews</Link>
//                 </NavbarMenuItem>
//             </NavbarContent>

//             <NavbarContent justify="end">
//                 <NavbarItem>
//                     <Button onPress={() => { router.push("/auth/sign-in") }}
//                         className="cursor-pointer hover:bg-purple-500 hover:text-white font-bold"
//                         variant="light">Sign In</Button>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Button
//                         onPress={() => { router.push("/auth/sign-in") }}
//                         className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold">Try Free</Button>
//                 </NavbarItem>
//             </NavbarContent>
//         </Navbar>
//     );
// }


"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          AI Editor
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-black font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => router.push("/auth/sign-in")}
          >
            Sign In
          </Button>

          <Button
            className="bg-blue-600 text-white hover:bg-blue-500"
            onClick={() => router.push("/auth/sign-in")}
          >
            Try Free
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                {open ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>

            {/* ✅ Full Screen */}
            <SheetContent side="left" className="w-full h-full p-6">

              <div className="flex flex-col h-full">

                {/* Top (Logo + Close) */}
                <div className="flex items-center justify-between mb-10">
                  <h1 className="text-xl font-bold">AI Editor</h1>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X />
                  </Button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-lg">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Bottom Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setOpen(false);
                      router.push("/auth/sign-in");
                    }}
                  >
                    Sign In
                  </Button>

                  <Button
                    className="bg-linear-to-r text-xl from-blue-500 to-purple-500 text-white"
                    onClick={() => {
                      setOpen(false);
                      router.push("/auth/sign-up");
                    }}
                  >
                    Try Free
                  </Button>
                </div>

              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}