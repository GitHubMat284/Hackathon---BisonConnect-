"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { Badge } from "@/components/ui/badge";
import { useState } from "react";
  import { CiLocationOn, CiClock1 } from "react-icons/ci";
  import { FaCheck } from "react-icons/fa"; // Checkmark icon
  export interface Event {
    title: string;
    subtitle: string;
    location: string;
    time: string;
    badges?: string[];
    description?: string; 
  }
  
  interface EventCardProps extends React.ComponentPropsWithoutRef<"div"> {
    event: Event;
  }
  
  export function EventCard({ event, className, ...props }: EventCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false); // Tracks registration state
    return (
     <>

    <div onClick={() => setIsOpen(true)} className="cursor-pointer">
      <Card className={`w-[350px] ${className ?? ""}`} {...props}>
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>{event.subtitle}</CardDescription>
          <CardDescription>
            <span className="inline-flex items-center">
              <CiLocationOn /> {event.location}
            </span>
          </CardDescription>
          <CardDescription>
            <span className="inline-flex items-center">
              <CiClock1 /> {event.time}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mt-1 min-h-[40px]">
            {event.badges && event.badges.length > 0 && (
              <div className="flex gap-2 mt-1">
                {event.badges.map((badge, index) => (
                  <Badge key={index}>{badge}</Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      </div>
           {/* Modal (Only Shows When isOpen is true) */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[350px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-gray-600">{event.subtitle}</p>
            <p className="mt-2">
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
             {/* New Description (Visible Only in Modal) */}
             <p className = "mt-6"><strong>Description:</strong>  </p>
             {event.description && (
              <p className="mt-4 text-gray-700 text-sm">{event.description}</p>
            )}
               
               {/* Register Button */}
               <button
              onClick={() => setIsRegistered(!isRegistered)}
              className={`mt-4 px-6 py-2 text-white font-semibold rounded transition-all ${
                isRegistered ? "bg-green-600 cursor-default" : "bg-green-500 hover:bg-green-700"
              }`}
            >
              {isRegistered ? <FaCheck className="inline" /> : "Register"}
            </button>
            {/* Close Button */}
            <div className="flex justify-end mt-6">
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }
  