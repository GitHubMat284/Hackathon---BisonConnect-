"use client"; // Add this line
import Image from "next/image";
import * as React from "react";

import { useState } from 'react';
import Modal from './Modal';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link"; 


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Specify state type

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full bg-blue-900 shadow-md flex flex-col items-center py-1">
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
          <h1 className="text-3xl font-bold text-yellow-400 text-center flex-grow font-uofm">
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
      <main className="flex-1">
  {/* Container for centering content */}
  <div className="flex flex-col items-center justify-center h-screen">
    {/* Paragraph moved higher */}
    <p className="text-center text-lg text-gray-700 mb-8">
      Welcome to BisonsConnect! The home page for all things events at the University of Manitoba! 
      Feeling lonely? No problem. We got all kinds of events for you.
    </p>

    {/* Centered button underneath the paragraph */}
    <button 
      onClick={openModal} 
      className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      View Possible Events
    </button>

    {/* Modal component */}
    <Modal isOpen={isModalOpen} onClose={closeModal} />
  </div>
</main>


    </div>
  );
}
