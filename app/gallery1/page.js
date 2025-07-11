'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home as HomeIcon,
  Lightbulb,
  BookOpen,
  Atom,
  GalleryHorizontalEnd,
  Sparkles
} from 'lucide-react';

export default function FunSciencePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-60">
        <Image
          src="/images/5.jpg"
          alt="Fun Science Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Rolling Ball Gallery
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Rolling Ball Gallery</span>
          </div>
        </div>
      </section>

      {/* Bordered Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 flex justify-center items-center gap-2">
            <Sparkles className="text-yellow-500" />
                  Rolling Ball Sculpture          </h2>

          {/* Description Section */}
          <div className="text-lg leading-relaxed text-gray-700 text-justify space-y-5">
            <p className="flex gap-2 items-start">
              <Lightbulb className="text-orange-500 mt-1" />
              <span>
                Rolling ball sculpture shows the acrobatics of colourful moving balls in the metallic tracks. Each ball stores energy, while lifted up and the stored energy is released when the ball starts to roll down
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <BookOpen className="text-green-600 mt-1" />
              <span>
                The entire rolling ball sculpture can be helpful to understand the basic principles of energy transformation, laws of motion, concept of momentum and its transfer on collision etc.              </span>
            </p>
            <p className="flex gap-2 items-start">
              <Atom className="text-indigo-600 mt-1" />
              <span>
                Energy is defined as the capacity to do work. We know that energy exists in different forms in nature like sound, heat, electrical, chemical, gravitational etc.
              </span>
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-8 flex justify-center items-center gap-2">
              <GalleryHorizontalEnd className="text-teal-600" />
              Gallery Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((img, idx) => (
    <div
      key={idx}
      className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={`/funscience/${img}`}
        alt={`Science Exhibit ${idx + 1}`}
        width={500}
        height={300}
        className="object-cover w-full h-60"
      />
    </div>
  ))}
</div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}