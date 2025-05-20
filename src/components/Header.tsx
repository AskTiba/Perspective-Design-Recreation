"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Cancel from "@/components/Cancel";
import { NavigationMenuDemo } from "./NavigationMenu";

const navLinks = [
  { label: "Products", href: "#", bgColor: "bg-green-100" },
  { label: "Templates", href: "#", bgColor: "bg-yellow-100" },
  { label: "Reviews", href: "#", bgColor: "bg-blue-100" },
  { label: "Pricing", href: "#", bgColor: "bg-red-100" },
  { label: "Partners", href: "#", bgColor: "bg-purple-100" },
  { label: "Careers", href: "#", bgColor: "bg-orange-100" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // 👇 Automatically close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Main Header always visible */}
      <header className=" z-50 sticky top-0 flxed flex items-center justify-between px-5 py-3  bg-white">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="size-8 p-1 rounded-sm bg-gradient-to-tr from-green-800 to-yellow-500 flex items-center justify-center cursor-pointer">
            <Logo />
          </div>
          <div className="hidden sm:block font-bold cursor-pointer">
            <h1>Perspective</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenuDemo />
        </div>

        {/* Auth buttons and Mobile toggle */}
        <div className="flex items-center gap-5">
          <Button variant="ghost" className="hidden lg:block">
            Login
          </Button>
          <Button variant="default">Try for free</Button>

          {/* Toggle: Menu or Cancel Icon */}
          <button onClick={toggleMenu} className="lg:hidden">
            {isOpen ? <Cancel /> : <Menu />}
          </button>
        </div>
      </header>

      {/* === Mobile Overlay (only links/buttons) === */}
      {isOpen && (
        <div className="fixed top-[60px] inset-x-0 bottom-0 bg-white z-40 overflow-y-auto max-h-[calc(100vh-60px)] px-6 py-6 space-y-6">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className={`w-full rounded-md ${link.bgColor} hover:bg-opacity-80 transition`}
            >
              <Link
                href={link.href}
                className="block text-md font-medium px-4 py-3 w-full"
              >
                {link.label}
              </Link>
            </div>
          ))}

          <div className="flex justify-between w-full">
            <Button variant="outline" className="w-full flex-1">
              Login
            </Button>
            <Button variant="default" className="w-full flex-2">
              Try for free
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
