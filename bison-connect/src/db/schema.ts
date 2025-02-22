import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const eventsTable = sqliteTable("events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  location: text("location").notNull(),
  time: text("time").notNull(),
  description: text("description"),
});

export const badgesTable = sqliteTable("badges", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => eventsTable.id, { onDelete: "cascade" }), // Foreign key to events
  name: text("name").notNull(),
});

export const registrationsTable = sqliteTable("registrations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => eventsTable.id, { onDelete: "cascade" }),
  registrantName: text("registrant_name").notNull(),
  registrantEmail: text("registrant_email").notNull()
});
