'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { Home as HomeIcon, GalleryHorizontalEnd } from 'lucide-react';

export default function PhotoGalleryPage() {
  const galleryImages = [
    '1.1.jpg',
    '1.2.jpg',
    '1.3.jpg',
    '1.4.jpg',
    '1.5.jpg',
    '1.6.jpg',
    '1.7.jpg',
    '1.jpg',
    '2.jpg',
    '30.jpg',
    '40.jpg',
    '50.jpg',
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full h-40 md:h-50">
        <Image
          src="/images/bg1.jpg"
          alt="Photo Gallery Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Photo Gallery
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Photo Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white border border-gray-400 rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10 flex justify-center items-center gap-2">
            <GalleryHorizontalEnd className="text-teal-600" />
            Photo Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Gallery Image ${idx + 1}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-52"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
