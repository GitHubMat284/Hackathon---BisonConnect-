import Image from "next/image";
import { EventCard } from "./components/event-card";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <EventCard
          event={{
            title: "Bison Connect",
            subtitle: "A virtual event for the smelly comp sci kids",
            location: "Online",
            time: "March 12, 2022",
            badges: ["Virtual", "Free"],
          }}
        />
        <EventCard
          event={{
            title: "Bison Connect",
            subtitle: "A virtual event for the smelly comp sci kids",
            location: "Online",
            time: "March 12, 2022",
          }}
        />
        <EventCard
          event={{
            title: "Bison Connect",
            subtitle: "A virtual event for the smelly comp sci kids",
            location: "Online",
            time: "March 12, 2022",
          }}
        />
        <EventCard
          event={{
            title: "Bison Connect",
            subtitle: "A virtual event for the smelly comp sci kids",
            location: "Online",
            time: "March 12, 2022",
          }}
        />
      </div>
    </div>
  );
}
