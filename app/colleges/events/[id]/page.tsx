"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MOCK_STORIES } from "@/components/college/events/Constant";

const EventDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const story = MOCK_STORIES.find((s) => s.id === id);

  if (!story) {
    return <div className="p-8 text-center">Event not found.</div>;
  }

  // Find related events by category, excluding current event
  const relatedEvents = MOCK_STORIES.filter(
    (s) => s.category === story.category && s.id !== story.id
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="w-full h-64 relative mb-6">
        <Image
          src={story.imageUrl}
          alt={story.title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
      <div className="text-gray-500 mb-4">{story.date} | {story.academy} | {story.location}</div>
      <div className="mb-6 text-lg text-gray-700">{story.description}</div>
      {/* Additional details can be added here */}

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div className="w-full h-40 relative mb-3">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                <div className="text-gray-500 text-sm mb-2">{event.date} | {event.location}</div>
                <div className="text-gray-700 text-sm mb-2">{event.description.slice(0, 80)}...</div>
                {/* Link to event details (if routing is set up) */}
                {/* <Link href={`/colleges/events/${event.id}`} className="text-blue-600 hover:underline">View Details</Link> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
