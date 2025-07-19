'use client';
import React from "react";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb, FaBullseye } from 'react-icons/fa';

export default function nitroliq() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-40 md:h-50">
        <Image
          src="/images/li.jpg"
          alt=" background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-4xl md:text-4xl font-bold drop-shadow-lg">
                 Liquid Nitrogen Show           </h1>
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full shadow">
            <div className="text-sm text-white">
              <Link href="/" className="hover:underline text-white"> Nitrogen Show  </Link>
              
            </div>
          </div>
        </div>
        
      </div>
<div className="bg-white text-gray-800">
      {/* Title */}
      <div className="text-center py-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="font-bold text-black"> About Liquid Nitrogen Show   
</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Science centre organizing an exciting and educational Nitrogen Show — a
live demonstration using Liquid Nitrogen to showcase the wonders of science
to students.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/1000221479.jpg" alt="Dino Park" width={400} height={250} className="object-cover w-full h-48" />
        </div>
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/1000221497.jpg" alt="Science Expo" width={400} height={250} className="object-cover w-full h-48" />
        </div>
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/1000221503.jpg" alt="Invention Exhibit" width={400} height={250} className="object-cover w-full h-48" />
        </div>
      </div>

      {/* Open Air Science Expo Section */}
      <div className="mt-20 bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-md">
  <video
    src="/video/7.mp4" // Replace with your actual video path
    controls
    className="object-cover w-full h-full"
    width={600}
    height={200}
  />
</div>

          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-sOpen Airemibold mb-4">
              <span className="font-bold text-black">Chilling Experiments,</span>  Thrilling Minds!
            </h3>
            <p className="text-gray-700 leading-relaxed">
             The objective is to demonstrate the fascinating properties of liquid nitrogen, ,
To excite students through safe, fun, and visual experiments.
Liquid Nitrogen Shows conducted by your Science Centre in Schools and
Colleges.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}