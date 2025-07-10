'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Home as HomeIcon } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-40 md:h-50">
        <Image
          src="/images/3696093.jpg"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full shadow">
            <HomeIcon size={18} className="text-white" />
            <div className="text-sm text-white">
              <Link href="/" className="hover:underline text-white">Home</Link>
              <span className="text-white"> / </span>
              <span className="text-white">About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Content Section with Single Border */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="border rounded-xl p-6 space-y-6">
          {/* Image */}
          <div className="w-full h-64 relative rounded-xl overflow-hidden border">
            <Image
              src="/images/slide4.jpg"
              alt="Rayat Science and Innovation Activity Centre"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* About the Centre */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">About the Centre</h2>
            <p className="text-gray-700 leading-relaxed">
              Rayat Science and Innovation Activity Center, inaugurated on February 14, 2020 in the grace presence of renowned scientist Hon'ble Dr. Anil Kakodkar and the President of Rayat Shikshan Sanstha, Hon'ble Sharadraoji Pawar, is a unique, non-formal science learning centre in Satara. It aims to inculcate scientific temper among students and popularize science in the rural parts of Satara district. The centre has been started with robust support from the Rajiv Gandhi Science and Technology Commission (RGSTC) and the Nehru Science Centre (NSCM) for encouraging and motivating students to undertake innovative activities in science.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              The centre is spread over approximately 550 square meters, consisting of an innovation activity hall, fun science hall, temporary exhibition space, exhibitions on Nobel Prizes 2019 & Mental Health, rolling ball sculpture, and an open-door science park.
            </p>
          </div>

          {/* About Rayat Shikshan Sanstha */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">About Rayat Shikshan Sanstha</h2>
            <p className="text-gray-700 leading-relaxed">
              The Rayat Shikshan Sanstha is one of the leading educational institutions in Asia. Its contribution to education is invaluable, emphasizing education for the down-trodden, poor, and ignorant, who form the major bulk of society. The founder, late Dr. Karamaveer Bhaurao Patil, realized that education is a powerful means of societal transformation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              With this vision, on October 4, 1919, Shri Karamveer Bhaurao Patil founded the Rayat Shikshan Sanstha to provide equal education irrespective of caste, creed, religion, and social status. Now in its centenary year, the Sanstha has 4.5 lakh students across 739 branches in Maharashtra, managed by about 16,000 dedicated staff and faculty members.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
