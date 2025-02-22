import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { eventsTable, badgesTable } from './schema';

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  // U of M Events
  const events = [
    {
      title: 'BisonsConnect Virtual Meeting',
      subtitle: 'A virtual event for networking with U of M students',
      location: 'Online',
      time: 'March 12, 2022',
      description: 'An event for U of M students to connect and network.',
      badges: ['Virtual', 'Networking'],
    },
    {
      title: 'U of M Career Fair',
      subtitle: 'Explore job and internship opportunities',
      location: 'University Centre, U of M',
      time: 'January 18, 2024',
      description: 'Meet recruiters and explore job opportunities.',
      badges: ['Career', 'In-Person'],
    },
    {
      title: 'Hack the North Info Session',
      subtitle: 'Learn about Canada’s biggest hackathon',
      location: 'EITC Atrium, U of M',
      time: 'September 5, 2023',
      description: 'An information session about Hack the North and how to participate.',
      badges: ['Tech', 'Hackathon'],
    },
    {
      title: 'Engineering Networking Night',
      subtitle: 'Connect with industry professionals',
      location: 'Engineering Lounge, U of M',
      time: 'October 10, 2023',
      description: 'A networking night for U of M engineering students.',
      badges: ['Networking', 'Engineering'],
    },
    {
      title: 'Computer Science Student Panel',
      subtitle: 'Hear from upper-year students about CS at U of M',
      location: 'EITC Room E2-110, U of M',
      time: 'November 15, 2023',
      description: 'An event where CS students share their experiences and advice.',
      badges: ['CS', 'Panel'],
    },
  ];

  for (const event of events) {
    // Insert event
    const [insertedEvent] = await db.insert(eventsTable).values({
      title: event.title,
      subtitle: event.subtitle,
      location: event.location,
      time: event.time,
      description: event.description,
    }).returning({ id: eventsTable.id }); // Get the inserted event ID

    // Insert related badges
    if (insertedEvent) {
      const badgeRecords = event.badges.map((badge) => ({
        eventId: insertedEvent.id,
        name: badge,
      }));
      await db.insert(badgesTable).values(badgeRecords);
    }
  }

  console.log('U of M events and badges seeded!');

  // Retrieve all events with badges
  const allEvents = await db.select().from(eventsTable);
  const allBadges = await db.select().from(badgesTable);

  const eventsWithBadges = allEvents.map((event) => ({
    ...event,
    badges: allBadges.filter((badge) => badge.eventId === event.id).map((b) => b.name),
  }));

  console.log('Getting all events from the database: ', eventsWithBadges);
}

main();
