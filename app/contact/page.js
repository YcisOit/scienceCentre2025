'use client';
import { useState } from 'react';
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
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <section className="relative w-full h-40 md:h-50">
        <Image
          src="/images/7.jpg"
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

      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-6">Inquiry Form</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile Number" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Your message..." required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <button type="submit" className="bg-blue-950 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
                Submit Inquiry
              </button>
              {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
            </form>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-6">Reach Us</h2>
            <div className="space-y-6 text-gray-700 text-base">
              <div className="flex items-start space-x-4">
                <MapPin className="text-black mt-1" size={24} />
                <p>
                  <Link
                    href="https://maps.app.goo.gl/FHScbULGEUNrVQgV9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black underline"
                  >
                    Rayat Science and Innovation Activity Centre, Varye, Satara, Maharashtra
                  </Link>
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-black" size={22} />
                <p>+91 8605145013</p>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-black" size={22} />
                <p>rsiacvarye@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
