import React from "react";
import logoFooter from "../assets/67afb0bfd0ba8efd62f9f2b5_Unity Moves Logo Remake.png";

export default function Footer() {
  return (
    <footer className="bg-[#f3e9f7] py-6 border-t border-purple-200 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        <img src={logoFooter} alt="Unity Moves Logo" className="w-14 h-auto mb-2" />
        <nav className="flex gap-6 text-purple-800 font-bold text-lg">
          <a href="/" className="hover:text-purple-600">Home</a>
          <a href="/services" className="hover:text-purple-600">Services</a>
          <a href="/about" className="hover:text-purple-600">About</a>
          <a href="/shop" className="hover:text-purple-600">Book Now</a>
        </nav>
        <p className="text-sm text-blue-500 font-semibold mt-2">
          Copyright 2025 Unity Moves Play & Event Center For Kids
        </p>
      </div>
    </footer>
  );
}
