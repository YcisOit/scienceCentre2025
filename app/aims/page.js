'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Home as HomeIcon, Info as InfoIcon } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      

      {/* Breadcrumb */}
     <section className="relative w-full h-40 md:h-60">
             <Image

               src="/images/visionmission.jpg"
               alt="Fun Science Banner"
               layout="fill"
               objectFit="cover"
               className="brightness-75"
             />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
               <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                 	Aims & Objectives
               </h1>
               <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
                 <HomeIcon size={18} />
                 <Link href="/" className="hover:underline">Home</Link>
                 <span>/</span>
                 <span> Aims & Objectives</span>
               </div>
             </div>
           </section>

      {/* Aims & Objectives */}
      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
        <section className="border-2 border-black rounded-xl p-6 md:p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Aims & Objectives</h2>
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-4 leading-relaxed">
            <li>To be an agent for change, development, and advancement through inputs of science and technology.</li>
            <li>To function as the prime mover for stimulating horizontal interaction between the universities, research and development institutions, industries and other institutions for developing and upgrading science and technology applications.</li>
            <li>To propagate applications through studies, an adaptation of technology, formulating projects, field demonstration, imparting necessary training, consultancy, and publications.</li>
            <li>To provide necessary seed capital and other inputs to the identified projects.</li>
            <li>To act as a facilitator or catalyst for transfer of technology from laboratories and other research efforts to applications on a larger scale.</li>
            <li>To catalyze the application of innovations in line departments of the Government: for example, in the education sector to create a knowledge-based society, improving health services etc., for sustained economic progress.</li>
            <li>To create facilities in institutions for undertaking application-related research and development in areas or disciplines where such facilities are not available or are inadequate.</li>
            <li>The Commission may also provide limited support to relevant basic research. However, the main role of the Commission shall be to promote application-oriented research and development work and thereafter its utilization on a wider scale.</li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}