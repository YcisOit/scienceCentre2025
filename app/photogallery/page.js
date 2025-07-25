'use client';
import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { Home as HomeIcon, GalleryHorizontalEnd, X, UsersRound } from 'lucide-react';

export default function PhotoGalleryPage() {
  const photoGalleryImages = [
    '55.jpg', '1000238540.jpg', '1.3.jpg', '1.4.jpg',
    '1.5.jpg', '1.6.jpg', '1.7.jpg', '1.jpg',
    '2.jpg', '30.jpg', '40.jpg', '50.jpg',
  ];

  const resourcePersonImages = [
    { src: 'r1.jfif', name: 'South Korea Scientist Chang yu kung' },
    { src: 'r2.jfif', name: 'South Korea Scientist Chang yu kung' },
    { src: 'r3.jfif', name: 'South Korea Scientist Chang yu kung' },
    { src: 'r4.jpg', name: 'Honble Dr.Sharadchndraji Pawar & Honble Pratibha Pawar ' },
    { src: 'r6.jpg', name: 'Honble Mr. Chandrakant Dalavi ' },
    { src: 'r7.jpg', name: 'Honble Mr. Vikas Deshmukh ' },
    { src: 'r8.jpg', name: 'Honble Mr. Chandrakant Dalavi' },
    { src: '1.1.jpg', name: '' },
  ];

  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'resource'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const currentImages =
    activeTab === 'gallery' ? photoGalleryImages : resourcePersonImages.map(img => img.src);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const handleKeyDown = (e) => {
    if (!isModalOpen) return;

    if (e.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1));
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1));
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImages]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full h-40 md:h-52">
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

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white border border-gray-400 rounded-xl shadow-lg p-6 md:p-10">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-full font-semibold border ${
                activeTab === 'gallery'
                  ? 'bg-[#012D50] text-white border-white'
                  : 'bg-[#384047] text-white border-white'
              } transition`}
            >
              <GalleryHorizontalEnd className="inline mr-2" /> Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('resource')}
              className={`px-6 py-2 rounded-full font-semibold border ${
                activeTab === 'resource'
                  ? 'bg-[#012D50] text-white border-white'
                  : 'bg-[#384047] text-white border-white'
              } transition`}
            >
              <UsersRound className="inline mr-2" /> Resource Person
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {(activeTab === 'gallery' ? photoGalleryImages : resourcePersonImages).map((img, idx) => {
    const imageSrc = activeTab === 'gallery' ? img : img.src;
    const name = activeTab === 'gallery' ? '' : img.name;

    return (
      <div
        key={idx}
        onClick={() => openModal(idx)}
        className="relative group cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={`/images/${imageSrc}`}
          alt={`Image ${idx + 1}`}
          width={500}
          height={300}
          className="object-cover w-full h-52"
        />

        {activeTab === 'resource' && (
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-sm text-center py-2">
            {name}
          </div>
        )}
      </div>
    );
  })}
</div>

        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 transition"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <Image
              src={`/images/${currentImages[currentIndex]}`}
              alt="Full View"
              width={1000}
              height={700}
              className="rounded-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
