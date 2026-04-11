"use client";
import { authClient } from "lib/auth-client";
import { Button } from "../ui/button";
import { Crown, Sparkles } from "lucide-react";

export default function Upgrade() {

  const upgrade = async () => {
    const session = await authClient.getSession();
    console.log("session =>", session);

    const products = process.env.NODE_ENV === "development" ? [
      "5d5772f0-fe96-42ff-8d9d-2bff6f1e7ffa", 
          "9f616e5c-8a36-448c-801a-c82a6ee07426",
          "bf914353-33dc-41fe-9b6b-6f10c7a6687a",
    ]:[
      "e70fef4c-942a-4098-8d26-f31b3307f0ed",
      "dca88f28-596a-4e22-89b6-1b0f6d0f9fc5",
      "a8ff4fa7-4d11-414d-a498-69eeaa5b1b74"
    ];

    if (!session?.data?.user) {
      console.log("User not logged in");
      return;
    }



    try {
      await authClient.checkout({
        products: products,
        //  [
        //   "6c84189e-1ce2-4214-ac43-b439bb1e544e", 
        //   "038b2068-adb4-4d8b-803c-640462f71ed4",
        //   "dd2f6988-aa65-476f-abec-f25c2ba0c58b",
        //  "5d5772f0-fe96-42ff-8d9d-2bff6f1e7ffa", // 100 credits
        //  "9f616e5c-8a36-448c-801a-c82a6ee07426", // 200 credits  local
        //  "bf914353-33dc-41fe-9b6b-6f10c7a6687a", // 50 credits
        // ],
      });
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="group relative ml-2 overflow-hidden border-orange-400/50 bg-gradient-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
      onClick={upgrade}
    >
      <div className="flex items-center gap-2">
        <Crown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-medium">Upgrade</span>
        <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
}