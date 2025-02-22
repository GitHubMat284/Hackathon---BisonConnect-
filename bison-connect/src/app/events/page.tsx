import EventsClient from "@/components/ui/EventsClient";
import { getAllEvents } from "../actions";

export default async function EventsPage() {
  const events = await getAllEvents();

  return <EventsClient events={events} />;
}
