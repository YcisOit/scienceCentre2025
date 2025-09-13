'use client';
import { useState } from 'react';
import Image from 'next/image';

const upcomingEvents = [
  {
    id: 1,
    name: 'Sunday Funday Science School',
    image: '/images/event1.jpg',
    message: 'Join us for science learning experience!',
    link: 'https://forms.gle/qzPxMtJ58XzTgzgc8',
  },
  {
    id: 2,
    name: 'Arduino Coding',
    image: '/images/even2.jpg',
    message: 'Join us Our Workshop learning scince and Coding!',
    link: 'https://example.com/sunday-funday',
  },
  {
    id: 3,
    name: 'Astronomy Night',
    image: '/images/1.jpg',
    message: 'Explore the stars and planets with our experts!',
    link: 'https://example.com/astronomy-night',
  },
  {
    id: 4,
    name: 'Innovation Workshop',
    image: '/images/slide4.jpg',
    message: 'Unleash your creativity and learn innovative skills!',
    link: 'https://example.com/innovation-workshop',
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

      {/* Events in one line */}
      <div className="max-w-7xl mx-auto flex gap-8 justify-center">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="w-72 bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200"
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
              <p className="text-sm text-gray-500 mt-2">{event.message}</p>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#1a1a2e] text-white rounded-lg shadow hover:bg-[#16213e] transition-all duration-300"
              >
                registration Form
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
