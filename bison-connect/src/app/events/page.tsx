import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/ui/event-card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <EventCard
            event={{
              title: "Bison Connect",
              subtitle: "A virtual event for the smelly comp sci kids",
              location: "Online",
              time: "March 12, 2022",
              badges: ["Virtual", "Free"],
               description: "This is an exclusive networking event for only the coolest kids around. Watch out, you might make a friend or two..."
              
            }}
          />
          <EventCard
            event={{
              title: "Bison Connect",
              subtitle: "A virtual event for the smelly comp sci kids",
              location: "Online",
              time: "March 12, 2022",
               description: "This is an exclusive networking event"
            }}
          />
          <EventCard
            event={{
              title: "Bison Connect",
              subtitle: "A virtual event for the smelly comp sci kids",
              location: "Online",
              time: "March 12, 2022",
               description: "This is an exclusive networking event"
            }}
          />
          <EventCard
            event={{
              title: "Bison Connect",
              subtitle: "A virtual event for the smelly comp sci kids",
              location: "Online",
              time: "March 12, 2022",
               description: "This is an exclusive networking event"
            }}
          />
        </div>
      </div>
    </div>
  );
}

