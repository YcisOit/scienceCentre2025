'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home as HomeIcon,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-48 md:h-60">
        <Image
          src="/images/contact.jpg"
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Inquiry Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">Inquiry Form</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="e.g. +91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">Reach Us</h2>
            <div className="space-y-6 text-gray-700 text-base">
              <div className="flex items-start space-x-4">
                <MapPin className="text-teal-700 mt-1" size={24} />
                <div>
                  <p className="font-medium">Rayat Science and Innovation Activity Centre</p>
                  <p>Varye, Taluka- Satara, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-teal-700" size={22} />
                <p>+91 8605145013</p>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-teal-700" size={22} />
                <p>rayatsciencecenter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
