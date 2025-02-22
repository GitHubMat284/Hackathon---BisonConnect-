"use server";

import { drizzle } from "drizzle-orm/libsql";
import { eventsTable, badgesTable } from "../db/schema";

// Define an interface for the event creation payload.
export interface CreateEventData {
  title: string;
  subtitle: string;
  location: string;
  time: string;
  description?: string;
  badges?: string[];
}

export async function createEvent(eventData: CreateEventData) {
  const db = drizzle(process.env.DB_FILE_NAME!);

  // Insert the new event
  const [insertedEvent] = await db
    .insert(eventsTable)
    .values({
      title: eventData.title,
      subtitle: eventData.subtitle,
      location: eventData.location,
      time: eventData.time,
      description: eventData.description,
    })
    .returning({ id: eventsTable.id });

  if (insertedEvent && eventData.badges && eventData.badges.length > 0) {
    const badgeRecords = eventData.badges.map((badge) => ({
      eventId: insertedEvent.id,
      name: badge,
    }));
    await db.insert(badgesTable).values(badgeRecords);
  }

  return insertedEvent;
}

export async function getAllEvents() {
  const db = drizzle(process.env.DB_FILE_NAME!);

  // Retrieve events and badges.
  const allEvents = await db.select().from(eventsTable);
  const allBadges = await db.select().from(badgesTable);

  // Map badge names to their corresponding events.
  const eventsWithBadges = allEvents.map((event) => ({
    ...event,
    badges: allBadges
      .filter((badge) => badge.eventId === event.id)
      .map((b) => b.name),
  }));

  return eventsWithBadges;
}

