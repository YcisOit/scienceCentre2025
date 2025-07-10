'use client';

import { useState } from 'react';
import Image from 'next/image';

const upcomingEvents = [
  {
    id: 1,
    name: 'Science Fair 2025',
    image: '/images/slide4.jpg',
  },
  {
    id: 2,
    name: 'Astronomy Night',
    image: '/images/1.jpg',
  },
  {
    id: 3,
    name: 'Innovation Workshop',
    image: '/images/slide3.jpg',
  },
];

export default function UpcomingEvents() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8 border-t bg-gray-100"
      style={{
        backgroundImage: `url('/images/texture.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-10 tracking-wide">
        ✨ Upcoming Events
      </h2>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-lg border border-white"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200"
          >
            {/* Image Section */}
            <div
              className="relative h-52 w-full cursor-pointer"
              onClick={() => setSelectedImage(event.image)}
            >
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Don't miss this exciting event!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
