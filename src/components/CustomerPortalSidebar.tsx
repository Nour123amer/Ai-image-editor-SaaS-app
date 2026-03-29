"use client";
import { useRouter } from "next/navigation";

export function CustomerPortalSidebar() {
    const router = useRouter();
  return (
   <div className="w-64 h-screen  p-6 flex flex-col justify-center ">
  
  {/* User Info */}
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-gray-900">Nour</h2>
    <p className="text-sm text-gray-500 mt-1">
      nouramer295@gmail.com
    </p>
  </div>

  {/* Menu */}
  <div className="flex flex-col gap-2">
    
  
    <button 
    onClick={()=>{router.push("/customer-portal/overview")}}
    className=" cursor-pointer text-left px-4 py-2 rounded-xl bg-gray-200 text-gray-900 font-medium">
      Overview
    </button>

    <button 
    onClick={()=>{router.push("/customer-portal/orders")}}
    className=" cursor-pointer text-left px-4 py-2 rounded-xl bg-gray-200 text-gray-900 font-medium">
      Orders
    </button>

    <button 
    onClick={()=>{router.push("/customer-portal/usage")}} 
    className="cursor-pointer text-left px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 transition">
      Usage
    </button>

    <button 
    onClick={()=>{router.push("/customer-portal/billing")}}
     className="cursor-pointer text-left px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 transition">
      Billing
    </button>

  </div>
</div>
  );
}