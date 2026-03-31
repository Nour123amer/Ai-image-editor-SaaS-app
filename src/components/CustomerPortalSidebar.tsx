// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export function CustomerPortalSidebar() {
//   const [active, setActive] = useState("overview");
//     const router = useRouter();
//   return (
//    <div className="w-64 h-screen  p-6 flex flex-col justify-center ">
  
//   {/* User Info */}
//   <div className="mb-8">
//     <h2 className="text-lg font-semibold text-gray-900">Nour</h2>
//     <p className="text-sm text-gray-500 mt-1">
//       nouramer295@gmail.com
//     </p>
//   </div>

//   {/* Menu */}
//   <div className="flex flex-col gap-2">
    
  
//     <button 
//     onClick={()=>{
//       setActive("overview")
//       router.push("/customer-portal/overview")}}
//     className={`${active === "overview" ?"rounded-xl bg-gray-200 text-gray-900":""}  cursor-pointer text-left px-4 py-2  font-medium`}>
//       Overview
//     </button>

//     <button 
//     onClick={()=>{
//       setActive("ordrs")
//       router.push("/customer-portal/orders")}}
//     className={`${active === "ordrs" ?"rounded-xl bg-gray-200 text-gray-900":""}  cursor-pointer text-left px-4 py-2  font-medium`}>
//       Orders
//     </button>

//     <button 
//     onClick={()=>{
//       setActive("usage")
//       router.push("/customer-portal/usage")}} 
//     className={`${active === "usage" ?"rounded-xl bg-gray-200 text-gray-900":""} cursor-pointer text-left px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 transition`}>
//       Usage
//     </button>

//     <button 
//     onClick={()=>{
//       setActive("billing")
//       router.push("/customer-portal/billing")}}
//      className={`${active === "billing" ?"rounded-xl bg-gray-200 text-gray-900":""} cursor-pointer text-left px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 transition`}>
//       Billing
//     </button>

//   </div>
// </div>
//   );
// }

"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, ShoppingBag, BarChart2, CreditCard, Menu, X } from "lucide-react";
 
const navItems = [
  { id: "overview", label: "Overview",   icon: LayoutDashboard, path: "/customer-portal/overview"  },
  { id: "orders",   label: "Orders",     icon: ShoppingBag,     path: "/customer-portal/orders"    },
  { id: "usage",    label: "Usage",      icon: BarChart2,       path: "/customer-portal/usage"     },
  { id: "billing",  label: "Billing",    icon: CreditCard,      path: "/customer-portal/billing"   },
];
 
export function CustomerPortalSidebar() {
  const router   = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
 
  const active = navItems.find((n) => pathname?.startsWith(n.path))?.id ?? "overview";
 
  const navigate = (item: typeof navItems[0]) => {
    router.push(item.path);
    setMobileOpen(false);
  };
 
  /* ── shared button styles ── */
  const btnBase =
    "flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all duration-150";
  const btnActive   = "bg-gray-100 text-gray-900";
  const btnInactive = "text-gray-500 hover:bg-gray-100 hover:text-gray-800";
 
  /* ── sidebar content (reused in both desktop + mobile drawer) ── */
  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6">
      {/* User info */}
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm mb-3">
          N
        </div>
        <h2 className="text-base font-semibold text-gray-900 leading-tight">Nour</h2>
        <p className="text-xs text-gray-400 mt-0.5 truncate">nouramer295@gmail.com</p>
      </div>
 
      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item)}
            className={`${btnBase} ${active === item.id ? btnActive : btnInactive}`}
          >
            <item.icon size={17} strokeWidth={1.8} className="shrink-0" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
 
  return (
    <>
      {/* ── Desktop sidebar (lg+) ── */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 border-r border-gray-100 bg-white">
        <SidebarContent />
      </aside>
 
    
 
      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="relative w-72 max-w-[85vw] bg-white h-full shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
 
      {/* ── Mobile bottom tab bar (xs–md) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 flex items-center justify-around px-2 py-1 safe-area-bottom">
                  {/* ── Mobile top bar (< lg) ── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-40">
        <span className="font-semibold text-gray-900 text-sm">
          {navItems.find((n) => n.id === active)?.label ?? "Dashboard"}
        </span>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
      
        {navItems.map((item) => (
       <button
            key={item.id}
            onClick={() => navigate(item)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all text-xs font-medium
              ${active === item.id ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
          >
            <item.icon
              size={20}
              strokeWidth={active === item.id ? 2.2 : 1.6}
              className={active === item.id ? "text-gray-900" : "text-gray-400"}
            />
            {item.label}
          </button>

         
        ))}
      </nav>
    </>
  );
}