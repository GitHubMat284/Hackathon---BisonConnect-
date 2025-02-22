import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { Badge } from "@/components/ui/badge";
  
  import { CiLocationOn, CiClock1 } from "react-icons/ci";
  
  export interface Event {
    title: string;
    subtitle: string;
    location: string;
    time: string;
    badges?: string[];
  }
  
  interface EventCardProps extends React.ComponentPropsWithoutRef<"div"> {
    event: Event;
  }
  
  export function EventCard({ event, className, ...props }: EventCardProps) {
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
    );
  }
  