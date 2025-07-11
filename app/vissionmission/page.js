'use client';

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
          src="/images/VisionMission.jpg"
          alt="Vision & Mission background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Vision & Mission
          </h1>
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full shadow">
            <div className="text-sm text-white">
              <Link href="/" className="hover:underline text-white">Vision</Link>
              <span> / </span>
              <span>Mission</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Vision Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FaLightbulb className="text-black-700 text-3xl" />
            <h2 className="text-2xl font-bold text-black-800">Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
          Rayat Science & Innovation Activity Centre (RSIAC) envisions a future where science and technology serve as the foundation for societal progress, intellectual empowerment, and sustainable development. Our goal is to instill a deep-rooted scientific temper among students, educators, and the broader community, ensuring that scientific curiosity and innovation become integral aspects of education and daily life.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
          We aim to bridge the gap between theoretical knowledge and practical application by providing hands-on scientific experiences, fostering critical thinking, and nurturing a problem-solving mindset. By making science engaging, accessible, and interactive, we seek to cultivate a new generation of thinkers, innovators, and leaders who can leverage science and technology for societal advancement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            The centre aspires to become a hub of excellence in science education and research, facilitating collaboration between educational institutions, research organizations, and industries. Through strategic partnerships and knowledge-sharing initiatives, we envision a learning ecosystem that encourages discovery, experimentation, and application of scientific principles to address real-world challenges.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FaBullseye className="text-black-700 text-3xl" />
            <h2 className="text-2xl font-bold text-black-800">Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
          	To Promote Scientific Inquiry and Innovation:
              Encourage students to explore science through hands-on experiments, interactive activities, and project-based learning, thereby strengthening their analytical and problem-solving skills.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
           	To Bridge the Gap Between Theory and Practice:
               Provide an experiential learning environment where students can engage with scientific concepts beyond textbooks, allowing them to develop a deeper understanding of real-world applications.

          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
        	To Support Government Initiatives for Science and Technology Development:
           Align with national and state policies to integrate science education into the broader development agenda, ensuring that scientific advancements contribute to sustainable economic growth and improved quality of life.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}