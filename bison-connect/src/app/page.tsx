"use client"; // Add this line
import Image from "next/image";
import * as React from "react";
import { useState } from 'react';
import Modal from './Modal';
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Specify state type

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full bg-gray-100 shadow-md py-4 px-6 flex items-center justify-between">
        {/* Logo on the Left */}
        <Image
          src="/UM-logo-horizontal-CMYK.png"
          alt="University Logo"
          width={150}
          height={50}
        />

        {/* Title in the Center */}
        <h1 className="text-3xl font-bold text-blue-600 flex-grow text-center">
          BisonsConnect
        </h1>

        {/* Placeholder for balancing layout */}
        <div className="w-[150px]"></div>
      </header>

      {/* Empty Body Section */}
      <main className="flex-1">
      <div className="flex items-center justify-center h-screen">
      <p className="text-center text-lg text-gray-700">
        Welcome to BisonsConnect! The home page for all things events at the University of Manitoba! Feeling lonely? No problem. We got all kinds of events for you.
      </p>
      <div className="flex flex-col items-center justify-center h-screen">
      <button 
        onClick={openModal} 
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
      </div>

      </main>
    </div>
  );
}
