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
    </div>
  );
}
