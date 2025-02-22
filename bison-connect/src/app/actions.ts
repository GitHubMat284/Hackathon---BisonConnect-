"use server";

import { drizzle } from "drizzle-orm/libsql";
import { eq, sql } from "drizzle-orm";
import { eventsTable, badgesTable, registrationsTable } from "../db/schema";

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
  const allEvents = await db.select().from(eventsTable);
  const allBadges = await db.select().from(badgesTable);

  const eventsWithBadges = allEvents.map((event) => ({
    ...event,
    badges: allBadges
      .filter((badge) => badge.eventId === event.id)
      .map((b) => b.name),
  }));

  return eventsWithBadges;
}

export interface EventRegistrationByTitle {
  eventTitle: string;
  registrantName: string;
  registrantEmail: string;
}

export async function registerForEventByTitle(
  registration: EventRegistrationByTitle
) {
  const db = drizzle(process.env.DB_FILE_NAME!);

  const eventsFound = await db
    .select()
    .from(eventsTable)
    .where(eq(eventsTable.title, registration.eventTitle));

  if (eventsFound.length === 0) {
    throw new Error(`Event with title "${registration.eventTitle}" not found.`);
  }

  const event = eventsFound[0];

  const [insertedRegistration] = await db
    .insert(registrationsTable)
    .values({
      eventId: event.id,
      registrantName: registration.registrantName,
      registrantEmail: registration.registrantEmail,
    })
    .returning({ id: registrationsTable.id });

  return insertedRegistration;
}

export async function getRegistrationCountByTitle(
  eventTitle: string
): Promise<number> {
  const db = drizzle(process.env.DB_FILE_NAME!);

  const eventsFound = await db
    .select()
    .from(eventsTable)
    .where(eq(eventsTable.title, eventTitle));

  if (eventsFound.length === 0) {
    throw new Error(`Event with title "${eventTitle}" not found.`);
  }

  const event = eventsFound[0];

  const result = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(registrationsTable)
    .where(eq(registrationsTable.eventId, event.id));

  return Number(result[0].count);
}

// Updated wrapper that returns Promise<void>
export async function registerForEvent(formData: FormData): Promise<void> {
  const eventTitle = formData.get("eventTitle") as string;
  const registrantName = formData.get("registrantName") as string;
  const registrantEmail = formData.get("registrantEmail") as string;

  await registerForEventByTitle({
    eventTitle,
    registrantName,
    registrantEmail,
  });
}
