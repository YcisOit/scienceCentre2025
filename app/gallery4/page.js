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
  GalleryHorizontalEnd
} from 'lucide-react';

export default function FunSciencePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-50">
        <Image
          src="/images/4.jpg"
          alt="Fun Science Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Innovation Centre
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Innovation Centre</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">
          {/* Description */}
          <div className="space-y-5 text-lg leading-relaxed text-gray-700 text-justify">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">
              About the Innovation Centre
            </h2>
            <p className="flex gap-2 items-start">
              <Lightbulb className="text-orange-500 mt-1" />
              <span>
                The concept of the Fun Science Exhibition is based on the mantra: <strong>"I hear, I forget; I see, I remember; I do, I understand."</strong>
                This interactive gallery is specially designed to engage curious minds through hands-on experiences.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <BookOpen className="text-green-600 mt-1" />
              <span>
                The exhibits encourage visitors—especially students—to experiment, observe, and understand scientific principles through play.
                By touching and interacting with the displays, students develop a deeper understanding of science in their everyday lives.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <Atom className="text-indigo-600 mt-1" />
              <span>
                The gallery covers diverse topics such as <em>light and colour, optical illusions, mechanics, electricity, and magnetism</em>,
                presented in a lucid and enjoyable manner. It transforms traditional textbook learning into an immersive, memorable experience.
              </span>
            </p>
            <p>
              The Innovation Centre of SIAC provides facilities for young minds to nurture new ideas and helps develop inquisitive perspectives among students.
              This engages students in innovative and creative activities, serving as springboards for new ideas and innovations. These activities contribute to
              society and the economy by preparing students to face future challenges and meet the rising aspirations of a growing population.
            </p>
            <p>
              The exposure here encourages students to think outside the box and develop innovative solutions to both local and global problems.
              It is beyond doubt that embedding such creative and innovation-oriented pedagogies in science education through Innovation Centres
              is crucial for retaining talent in modern science.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-black mb-8 flex justify-center items-center gap-2">
              <GalleryHorizontalEnd className="text-teal-600" />
              Gallery Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'].map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal(img)}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Image
                    src={`/gallery/${img}`}
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

      {/* Image Modal */}
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
              src={`/gallery/${selectedImage}`}
              alt="Modal Exhibit"
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
