'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';

const sliderImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/slide4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="">
      {/* Slider */}
      <div className="w-full">
        <div className="relative w-full">
          <Image
  src={sliderImages[currentIndex]}
  alt={`Slide ${currentIndex + 1}`}
  width={1920}
  height={900}
  className="w-full h-[650px] object-cover transition-all duration-1000 ease-in-out"
/>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full text-2xl hover:bg-opacity-60"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full text-2xl hover:bg-opacity-60"
          >
            ›
          </button>
          <div className="flex justify-center gap-2 mt-4 absolute bottom-4 left-0 right-0">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentIndex === index
                    ? "bg-purple-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 px-4 md:px-10 py-16 items-center gap-4 max-w-5xl mx-auto w-full">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-blue-950 font-semibold text-lg">
            <svg width="20" height="20" fill="currentColor" className="inline-block">
              <rect width="20" height="20" rx="4" />
            </svg>
            ABOUT US
          </div>

          <h1 className="text-4xl md:text-4xl font-extrabold text-[#000000] leading-tight">
            Welcome To <span className="block md:inline font-bold">Rayat Science And Innovation Activity Centre</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="bg-blue-950 text-white rounded shadow-lg flex flex-col items-center justify-center px-8 py-6 text-center min-w-[120px]">
              <span className="text-4xl font-bold">4+</span>
              <span className="text-lg font-semibold mt-1">Years<br/>Experience</span>
            </div>
            <div className="text-gray-600 text-base max-w-md">
              Rayat Science and Innovation Activity Centre is a unique non-formal learning centre in Satara. It aims to inculcate scientific temper and popularize science in rural Satara. The center is supported by RGSTC and NSCM, and has facilities including innovation halls, fun science exhibits, exhibitions, Nobel Prize showcase, mental health awareness and an outdoor science park.
            </div>
          </div>

          <Link href="/about">
            <button className="bg-blue-950 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-md transition">
              LEARN MORE →
            </button>
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full flex justify-center">
            <Image src="/images/ils_13.svg" alt="Main" width={400} height={300} className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-[250px]" />
          </div>
          <div className="flex gap-4 w-full justify-center">
            <Image src="/images/slide3.jpg" alt="Small1" width={180} height={120} className="rounded-lg shadow object-cover w-[180px] h-[100px]" />
            <Image src="/images/slide4.jpg" alt="Small2" width={180} height={120} className="rounded-lg shadow object-cover w-[180px] h-[100px]" />
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="backdrop-blur-md bg-white/40 max-w-3xl p-6 rounded-lg shadow-2xl border border-gray-300 relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-xl"
              onClick={() => setShowAboutModal(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#1a0f91] mb-4">About the Centre</h2>
            <p className="text-gray-800 leading-relaxed max-h-[60vh] overflow-y-auto">
              Rayat Science and Innovation Activity Center, inaugurated on February 14, 2020
              in presence of renowned scientist Dr. Anil Kakodkar and Rayat President Sharadraoji
              Pawar, is a unique non-formal learning centre in Satara. It aims to inculcate
              scientific temper and popularize science in rural Satara. The center is supported
              by RGSTC and NSCM, and has facilities including innovation halls, fun science
              exhibits, exhibitions, Nobel Prize showcase, mental health awareness and an
              outdoor science park.
            </p>
          </div>
        </div>
      )}

      {/* Name Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-xl p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-xl"
              onClick={() => setShowNameModal(false)}
            >
              ×
            </button>
            <h2 className="text-3xl font-extrabold text-[#1a0f91]">
              Rayat Science and Innovation Activity Centre
            </h2>
            <p className="mt-2 text-gray-600">
              A non-formal science learning initiative by Rayat Shikshan Sanstha.
              Inaugurated in 2020 to nurture innovation and scientific curiosity among rural youth.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
