"use client";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[700px] relative">
          <Image
            src="/homepage-background.jpg"
            alt="University Community Banner"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Overlay & Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to BisonsConnect
            </h1>
            <p className="text-lg font-bold leading-relaxed mt-2 max-w-[80%] lg:max-w-[60%]">
              Welcome to BisonsConnect! The home for all events at the
              University of Manitoba.
            </p>
            <p className="text-lg font-semibold leading-relaxed mt-2 max-w-[80%] lg:max-w-[60%]">
              Feeling lonely? No problem. We have all kinds of events for you.
            </p>

            <Button onClick={openModal} className="mt-6">
              View Possible Events
            </Button>
          </div>
        </div>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </div>
  );
}
