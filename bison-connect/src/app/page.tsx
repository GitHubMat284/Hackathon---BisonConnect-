import Image from "next/image";
import * as React from "react";

export default function Home() {
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
      <main className="flex-1"></main>
    </div>
  );
}
