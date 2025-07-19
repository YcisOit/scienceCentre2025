'use client';
import React from "react";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb, FaBullseye } from 'react-icons/fa';

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-40 md:h-56">
        <Image
          src="/images/w1.jpg"
          alt="Vision & Mission background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-4xl md:text-4xl font-bold drop-shadow-lg">
                       Teacher/Students Workshop
          </h1>
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full shadow">
            <div className="text-sm text-white">
              <Link href="/" className="hover:underline text-white"> Workshop</Link>
              
            </div>
          </div>
        </div>
        
      </div>
<div className="bg-white text-gray-800">
      {/* Title */}
      <div className="text-center py-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="font-bold text-black"> About Teacher/Students Workshop  
</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Workshop objective is to develop scientific thinking and inquiry-based 
            learning. To enhance observation & analytical skills. To introduce cause-effect 
            relationships through experiments.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/30.jpg" alt="Dino Park" width={400} height={250} className="object-cover w-full h-48" />
        </div>
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/40.jpg" alt="Science Expo" width={400} height={250} className="object-cover w-full h-48" />
        </div>
        <div className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/images/31.jpg" alt="Invention Exhibit" width={400} height={250} className="object-cover w-full h-48" />
        </div>
      </div>

      {/* Open Air Science Expo Section */}
      <div className="mt-20 bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/images/w1.jpg" alt="Open Air Expo" width={600} height={400} className="object-cover w-full h-full" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-sOpen Airemibold mb-4">
              <span className="font-bold text-black">Robotic Programming</span> Workshop  
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Robotic Programming Workshop is designed to introduce students to the fundamentals of robotics and coding. Participants learn how to program robots using simple logic and sensor-based commands. The workshop encourages hands-on experimentation, creativity, and problem-solving skills. It aims to spark interest in STEM fields by combining fun with technology.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}