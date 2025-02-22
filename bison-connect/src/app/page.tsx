import Image from "next/image";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full bg-gray-100 shadow-md flex flex-col items-center py-4">
        {/* Top Section: Logo & Title */}
        <div className="flex items-center justify-between w-full px-6">
          {/* Logo on the Left */}
          <Image
            src="/UM-logo-horizontal-CMYK.png"
            alt="University Logo"
            width={150}
            height={50}
          />

          {/* Title in the Center */}
          <h1 className="text-3xl font-bold text-blue-600 text-center flex-grow">
            BisonsConnect
          </h1>

          {/* Empty Div for spacing balance */}
          <div className="w-[150px]"></div>
        </div>

        {/* Navigation Menu (Placed Below) */}
        <nav className="w-full bg-gray-800 mt-4">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center space-x-10 p-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-white hover:underline">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/events" className="text-white hover:underline">
                    Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-white hover:underline">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      {/* Empty Body Section */}
      <main className="flex-1"></main>
    </div>
  );
}
