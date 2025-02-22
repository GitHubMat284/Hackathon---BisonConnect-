"use client";
import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { createEvent } from "@/app/actions";

export default function NewEventDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>New Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details for the new event.
          </DialogDescription>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            const eventData = {
              title: formData.get("title") as string,
              subtitle: formData.get("subtitle") as string,
              location: formData.get("location") as string,
              time: formData.get("time") as string,
              description: formData.get("description") as string,
              badges: (formData.get("badges") as string)
                ?.split(",")
                .map((b) => b.trim()),
            };
            await createEvent(eventData);
            window.location.reload(); // Refresh the page after successful submission
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <Input id="title" name="title" required />
          </div>
          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle
            </label>
            <Input id="subtitle" name="subtitle" required />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <Input id="location" name="location" required />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <Input id="time" name="time" required />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Input id="description" name="description" />
          </div>
          <div>
            <label
              htmlFor="badges"
              className="block text-sm font-medium text-gray-700"
            >
              Badges (comma separated)
            </label>
            <Input id="badges" name="badges" />
          </div>
          <DialogFooter>
            <Button type="submit">Create Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
