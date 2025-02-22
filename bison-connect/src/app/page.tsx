import Image from "next/image";
import * as React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        {/* Make sure this stretches the full width */}
        <div className="relative w-screen h-screen">
          <Image
            src="/UM-logo-horizontal-CMYK.png"
            alt="Example PNG"
            width={200}
            height={200}
            className="absolute top-0 left-0"
          />
        </div>
        <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-blue-600">
          BisonsConnect
        </h1> 
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 bg-gray-800 p-4 w-full justify-between">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-white hover:underline">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="text-white hover:underline">Events</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="relative w-screen h-screen bg-gray-100">
        </div>

        

        <p>HELLO WORLD</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Links */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer Links */}
      </footer>
    </div>
  );
}
