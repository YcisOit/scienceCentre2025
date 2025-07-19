'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home as HomeIcon,
  GalleryHorizontalEnd,
  UserRound,
  Settings2,
  Battery,
  Camera,
  Waves,
  ActivitySquare
} from 'lucide-react';

export default function FunSciencePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-50">
        <Image
          src="/images/8.jpg"
          alt="Fun Science Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
           Sunday Science School - Fun Activity
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span> Sunday Science School</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">

          {/* Updated Science Park Info Section */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-justify">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">
              Sunday Science School - Fun Activity
            </h2>

            <p className="flex gap-3 items-start">
              <UserRound className="text-sky-600 mt-1" />
              <span>
                Sunday Science School Fun Activity organized by <strong>RSIAC, Satara</strong> offered a unique and engaging platform for students from <strong>5th to 9th Standard</strong> to participate in various fun-filled scientific activities.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Settings2 className="text-orange-600 mt-1" />
              <span>
                The objective of the activity was to foster communication, collaboration, and creativity among students while providing a joyful and interactive learning experience.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Battery className="text-green-600 mt-1" />
              <span>
                A range of activities were carefully designed to promote <strong>holistic learning</strong>, focusing on essential life skills and team-building capabilities.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Camera className="text-indigo-600 mt-1" />
              <span>
                Students had opportunities to express their <strong>creativity</strong> through fun science experiments and group projects that challenged their imagination.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Waves className="text-pink-600 mt-1" />
              <span>
                The event focused on boosting <strong>confidence</strong> and strengthening <strong>communication skills</strong> in an enjoyable and supportive setting.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <ActivitySquare className="text-purple-700 mt-1" />
              <span>
                Overall, the initiative successfully turned learning into an adventure, leaving students with unforgettable memories and a deeper curiosity for science.
              </span>
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-black mb-8 flex justify-center items-center gap-2">
              <GalleryHorizontalEnd className="text-teal-600" />
              Gallery Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['s1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '1.jpg'].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/funscience/${img}`}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
