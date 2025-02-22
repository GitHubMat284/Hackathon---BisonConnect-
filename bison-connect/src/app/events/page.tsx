import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/ui/event-card";

export default function Home() {
  return (
    <div className="flex justify-center">
      {/* Back to Home Button */}
      <Link href="/">
        <button style={{position: 'absolute',
            top: '20px', // Adjust this value as needed
            left: '20px', // Adjust this value as needed
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer', }} className=" mt-6 px-6 py-3 font-bold bg-blue-500 text-white rounded hover:bg-blue-600">
          
          Back to Home
        </button>
      </Link>
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
