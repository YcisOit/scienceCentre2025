'use client';
import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-50">
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 flex justify-center items-center gap-2">
            <Sparkles className="text-yellow-500" />
            Rolling Ball Sculpture
          </h2>

          {/* Description */}
          <div className="text-lg leading-relaxed text-gray-700 text-justify space-y-5">
            <p className="flex gap-2 items-start">
              <Lightbulb className="text-orange-500 mt-1" />
              <span>
                Rolling ball sculpture shows the acrobatics of colourful moving balls in the metallic tracks...
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <BookOpen className="text-green-600 mt-1" />
              <span>
                The entire rolling ball sculpture can be helpful to understand the basic principles of energy transformation...
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <Atom className="text-indigo-600 mt-1" />
              <span>
                Energy is defined as the capacity to do work...
              </span>
            </p>
          </div>

          {/* Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-8 flex justify-center items-center gap-2">
              <GalleryHorizontalEnd className="text-teal-600" />
              Gallery Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['e1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '1.jpg'].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(img)}
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

      {/* Modal */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
  >
    <div className="relative bg-white/80 rounded-xl overflow-hidden max-w-3xl w-full p-4 shadow-lg transition-transform duration-300 scale-100">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-3 text-gray-700 hover:text-red-600 text-3xl font-bold"
      >
        &times;
      </button>

      {/* Image */}
      <Image
        src={`/funscience/${selectedImage}`}
        alt="Selected Exhibit"
        width={1000}
        height={600}
        className="w-full h-auto object-contain rounded"
      />
    </div>
  </div>
)}


      <Footer />
    </div>
  );
}
