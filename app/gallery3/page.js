'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home as HomeIcon,
  Lightbulb,
  BookOpen,
  Atom,
  GalleryHorizontalEnd,
  Sparkles,
  Award
} from 'lucide-react';

export default function FunSciencePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-40 md:h-60">
        <Image
          src="/images/9.jpg"
          alt="Fun Science Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Fun Science Gallery
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Fun Science Gallery</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6 md:p-10">

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 flex justify-center items-center gap-2">
            <Sparkles className="text-yellow-500" />
            Science Made Fun & Interactive
          </h2>

          {/* Description */}
          <div className="text-lg leading-relaxed text-gray-700 text-justify space-y-5">
            <p className="flex gap-2 items-start">
              <Lightbulb className="text-orange-500 mt-1" />
              <span>
                The concept of the Fun Science Exhibition is based on the mantra: <strong>"I hear, I forget; I see, I remember; I do, I understand."</strong>
                This interactive gallery is specially designed to engage curious minds through hands-on experiences.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <BookOpen className="text-green-600 mt-1" />
              <span>
                The exhibits encourage visitors—especially students—to experiment, observe, and understand scientific principles through play.
                By touching and interacting with the displays, students develop a deeper understanding of science in their everyday lives.
              </span>
            </p>
            <p className="flex gap-2 items-start">
              <Atom className="text-indigo-600 mt-1" />
              <span>
                The gallery covers diverse topics such as <em>light and colour, optical illusions, mechanics, electricity, and magnetism</em>,
                presented in a lucid and enjoyable manner. It transforms traditional textbook learning into an immersive, memorable experience.
              </span>
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-8 flex justify-center items-center gap-2">
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

          {/* Nobel Prize Exhibition Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-blue-700 mb-6 flex justify-center items-center gap-2">
              <Award className="text-blue-600" />
              Nobel Prize Exhibition Hall
            </h3>
            <p className="text-gray-700 text-justify text-lg">
              The Nobel Prize is considered the world's most prestigious award, given annually to those who have conferred the greatest benefit on mankind. Since 1901, prizes in Physics, Chemistry, Medicine, Literature, and Peace have been awarded, with Economic Sciences added in 1968. This exhibition outlines the significance, history, and science Nobel Prizes of 2018 & 2019, and highlights Indian Nobel laureates.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-800 space-y-1">
              <li><strong>Indian Nobel Laureates:</strong> Rabindranath Tagore (1913), C.V. Raman (1930), H.G. Khorana (1968), Mother Teresa (1979), S. Chandrasekhar (1983), Amartya Sen (1998), Venkatraman Ramakrishnan (2009), Kailash Satyarthi (2014), Abhijit Banerjee (2019)</li>
              <li><strong>2018 (Sciences):</strong> Physics – Arthur Ashkin, Gérard Mourou, Donna Strickland; Chemistry – Frances Arnold, George Smith, Gregory Winter; Medicine – James Allison, Tasuku Honjo</li>
              <li><strong>2019 (Sciences):</strong> Physics – James Peebles, Michel Mayor, Didier Queloz; Chemistry – John Goodenough, Stanley Whittingham, Akira Yoshino; Medicine – William Kaelin Jr, Peter Ratcliffe, Gregg Semenza</li>
            </ul>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
