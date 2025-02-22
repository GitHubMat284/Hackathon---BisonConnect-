"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CiLocationOn, CiClock1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  registerForEvent, // use the new wrapper function
  getRegistrationCountByTitle,
} from "@/app/actions";

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
  const [registrationCount, setRegistrationCount] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchRegistrationCount = async () => {
      try {
        const count = await getRegistrationCountByTitle(event.title);
        setRegistrationCount(count);
      } catch (error) {
        console.error("Failed to fetch registration count:", error);
      }
    };

    fetchRegistrationCount();
  }, [event.title]);

  return (
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
        {registrationCount !== null && (
          <CardDescription>
            <span className="inline-flex items-center">
              <FaCheck /> {registrationCount} registered
            </span>
          </CardDescription>
        )}
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
      <div className="p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="w-full">
              Register
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form action={registerForEvent} className="space-y-4 py-2">
              <DialogHeader>
                <DialogTitle>Register for {event.title}</DialogTitle>
                <DialogDescription>
                  Please fill in your details and confirm your registration.
                </DialogDescription>
              </DialogHeader>
              <input type="hidden" name="eventTitle" value={event.title} />
              <input
                type="text"
                name="registrantName"
                placeholder="Your Name"
                className="input w-full"
              />
              <input
                type="email"
                name="registrantEmail"
                placeholder="Your Email"
                className="input w-full"
              />
              <DialogFooter>
                <Button type="submit">Submit Registration</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}
