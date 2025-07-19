'use client';
import React from "react";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaBinoculars } from 'react-icons/fa';

export default function SkyObservation() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-40 md:h-50">
        <Image
          src="/images/sky555.jpg"
          alt="Sky Observation Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Sky Observation / Gazing
          </h1>
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full shadow">
            <div className="text-sm text-white">
              <Link href="/" className="hover:underline text-white">Home</Link>
              <span> / </span>
              <span>Sky Gazing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-3">
            <FaBinoculars className="text-blue-600" />
            Discover the Night Sky
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore the wonders of the universe through direct observation and interactive learning sessions.
            Learn about constellations, planets, and celestial movements in a fun, engaging way!
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {['sky1.jpg', 'sky2.jpg', 'sky3.jpg'].map((img, idx) => (
            <div key={idx} className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/images/${img}`}
                alt={`Sky Observation ${idx + 1}`}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              <span className="font-bold text-black">Sky Observation Activities</span>
            </h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              Organizing a Sky Observation Program for students, parents, and teachers to
              spark curiosity about astronomy and space science. Participants learn about celestial 
              bodies through direct observation and understand concepts like planets, stars, 
              constellations, and phases of the Moon.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/sky4.jpg"
              alt="Observation Session"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
