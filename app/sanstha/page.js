'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

export default function AboutSansthaPage() {
  const committeeMembers = [
    {
      name: "Hon’ble. Sharadrao Govindrao Pawar",
      title: "President",
      image: "/commitee/SP.jpg",
    },
    {
      name: "Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)",
      title: "Chairman",
      image: "/commitee/chairman1.jpg",
    },
    {
      name: "Hon’ble Dr. Anil Patil",
      title: "Organizer",
      image: "/commitee/Organizer.jpg",
    },
    {
      name: "Hon’ble Adv. Bhagirath Nivrutti Shinde",
      title: "Vice Chairman",
      image: "/commitee/VICE.jpeg",
    },
    {
      name: "Hon’ble Shri. Vikas Deshmukh, IAS(Retd)",
      title: "Secretary",
      image: "/commitee/SECRETY.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            About Sanstha
          </h1>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 mt-4 rounded-full shadow">
            <HomeIcon size={18} />
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>About Sanstha</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-12">
        {/* Image Section */}
        {/* <div className="relative w-full h-64 rounded-xl overflow-hidden border">
          <Image
            src="/images/slide4.jpg"
            alt="Rayat Science and Innovation Activity Centre"
            layout="fill"
            objectFit="cover"
          />
        </div> */}

       

        {/* About Sanstha */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">About Rayat Shikshan Sanstha</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Rayat Shikshan Sanstha is one of Asia’s leading educational
            institutions. Founded by Dr. Karmaveer Bhaurao Patil on October 4,
            1919, it champions equal education for all, regardless of caste,
            creed, or background. With 4.5 lakh students in 739 branches and supported by 16,000
            staff, the Sanstha continues to transform lives through quality
            education.
          </p>
          
           <p className="text-gray-700 leading-relaxed">
           Rayat Shikshan Sanstha is a premier educational institution, renowned nationally and globally. 
           Founded by Karmaveer Bhaurao Patil and supported by his wife, Sou. Laxmibai Patil, 
           the institution has been dedicated to the noble mission of education and social upliftment.
           Over the years, Rayat Shikshan Sanstha has expanded its reach, providing quality education to students from diverse backgrounds.
            With numerous schools, colleges,  and professional institutes under its umbrella, 
            it continues to empower the youth through knowledge and skill development.
          </p>
        </section>

        {/* Committee Section (Previously Committee.js) */}
        <section className="py-8 bg-gray-50 rounded-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-black mb-10">
              Leadership Team
            </h2>
            <div className="flex overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-gray-300 pb-4">
              {committeeMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-100 shadow-md mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
