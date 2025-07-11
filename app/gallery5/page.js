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
            Science Park
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Science Park</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">

          {/* Science Park Info Section */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-justify">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">
              About the Science Park
            </h2>

            <p className="flex gap-3 items-start">
              <UserRound className="text-sky-600 mt-1" />
              <span>
                A Science Park in a science centre is exposition without wall in open air. Science Park is an innovative concept of teaching science in an informal ambiance.
                The basic idea of Science Park lies on the tendency of the children to play more than read. The small Science Park in SIAC campus facilitates the children
                to mingle with science while playing.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Settings2 className="text-orange-600 mt-1" />
              <span>
                10 simple sturdy exhibits installed here encourage students to touch, experiment and play by way of interactivity and immersion to discover the reason and scientific
                facts about some natural phenomena.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Battery className="text-green-600 mt-1" />
              <span>
                A few concepts about <strong>energy</strong>, <strong>gravity</strong>, how lever works...
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Camera className="text-indigo-600 mt-1" />
              <span>
                ...the <strong>principle of a camera</strong>...
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <Waves className="text-pink-600 mt-1" />
              <span>
                ...<strong>propagation of sound waves</strong> and <strong>vibration in objects</strong> etc.
              </span>
            </p>

            <p className="flex gap-3 items-start">
              <ActivitySquare className="text-purple-700 mt-1" />
              <span>
                All these are explained in a playful manner in the science park, turning fun into a foundation of scientific discovery.
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
              {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((img, idx) => (
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
