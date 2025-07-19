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
  Sparkles,
  FlaskConical
} from 'lucide-react';

export default function NationalScienceDayPage() {
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

  const images = [
    'student activity-5.jpg',
    'student project.jpg',
    'student visit-1.jpg',
    'student visit-3.jpg',
    'student visit.jpg',
    'student electronic workshop-1.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-50">
        <Image
          src="/images/science.jpeg"
          alt="National Science Day Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            National Science Day
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>National Science Day</span>
          </div>
        </div>
      </section>

      {/* Bordered Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 flex justify-center items-center gap-2">
            <Sparkles className="text-blue-600" />
            Celebration of Science & Discovery
          </h2>

          {/* Description Section */}
          <div className="text-lg leading-relaxed text-gray-700 text-justify space-y-5">
            <p className="flex gap-2 items-start">
              <Lightbulb className="text-yellow-500 mt-1" />
              <span>
                National Science Day is celebrated every year on <strong>28th February</strong> to commemorate the discovery of the <strong>Raman Effect</strong> by Sir C.V. Raman, who was awarded the Nobel Prize in Physics in 1930 for this contribution.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <BookOpen className="text-red-600 mt-1" />
              <span>
                The aim is to spread awareness about the importance of science in our daily lives and to encourage students to pursue careers in scientific research, innovation, and technology.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <Atom className="text-purple-600 mt-1" />
              <span>
                Various events like exhibitions, quizzes, seminars, and hands-on science activities are organized to inspire scientific curiosity among students and the community.
              </span>
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-8 flex justify-center items-center gap-2">
              <FlaskConical className="text-teal-600" />
              National Science Day
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal(img)}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`National Science Day ${idx + 1}`}
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
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white/90 p-4 rounded-xl shadow-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-700 hover:text-red-600 text-3xl font-bold"
            >
              &times;
            </button>
            <Image
              src={`/images/${selectedImage}`}
              alt="Enlarged view"
              width={1000}
              height={600}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
