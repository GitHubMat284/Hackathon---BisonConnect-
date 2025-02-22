"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { EventCard } from "@/components/ui/event-card";

const events = [
  {
    title: "Bison Connect",
    subtitle: "A virtual event for the smelly comp sci kids",
    location: "Online",
    time: "March 12, 2022",
    badges: ["Virtual", "Free"],
  },
  {
    title: "Bison Connect",
    subtitle: "A virtual event for the smelly comp sci kids",
    location: "Online",
    time: "March 12, 2022",
  },
  {
    title: "Bison Connect",
    subtitle: "A virtual event for the smelly comp sci kids",
    location: "Online",
    time: "March 12, 2022",
  },
  {
    title: "Bison Connect",
    subtitle: "A virtual event for the smelly comp sci kids",
    location: "Online",
    time: "March 12, 2022",
  },
  {
    title: "Bison Connect",
    subtitle: "Magic",
    location: "Online",
    time: "March 12, 2022",
  },
];

const uniqueBadges = Array.from(
  new Set(events.flatMap((event) => event.badges || []))
);

export default function Events() {
  const [selectedBadge, setSelectedBadge] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesBadge =
      selectedBadge === "All" ||
      (event.badges && event.badges.includes(selectedBadge));
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBadge && matchesSearch;
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Select onValueChange={(value) => setSelectedBadge(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Badge" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {uniqueBadges.map((badge) => (
              <SelectItem key={badge} value={badge}>
                {badge}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
