"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div>
          <h3 className="font-bold text-lg mb-2">AI Image Editor</h3>
          <p className="text-gray-500 text-sm">
            Professional image editing powered by artificial intelligence.
            Transform your images with cutting-edge AI technology.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li> <Link href="#fearures">Features</Link> </li>
            <li> <Link href="#pricing">Pricing</Link> </li>
            <li> <Link href="/dashboard">Dashboard</Link> </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li> <Link href="/">Help Center</Link> </li>
            <li> <Link href="/">Contact</Link> </li>
            <li> <Link href="/">Privacy</Link> </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-10">
        © 2026 AI Image Editor. All rights reserved.
      </div>
    </footer>
  );
}