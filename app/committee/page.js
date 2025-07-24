'use client';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const committeeMembers = [
  { name: "Mr. Vikas Vishwasrao Deshmukh, IAS (Retd.)", role: "President", image: "member1.jpg" },
  {  name: "Dr. Shivalinga Gangadhar Mankudle", role: "Vice President", image: "member2.webp" },
  {  name: "Mr. Badu Narayan Pawar", role: "Vice President", image: "member3.webp" },
  {  name: "Mr. Sanjiv jaykumar Patil", role: "Member", image: "member4.webp" },
  {  name: "Mr. Navnath Ramchandra Jagdale", role: "Member", image: "member5.webp" },
  {  name: "Mr. Shrikant Kunden", role: "Member", image: "member6.jpg" },
  {  name: "Dr. Bharat Jadhav", role: "Member", image: "13.jpg" },
  {  name: "Mr. Anand Shantaram Aalekari", role: "Member", image: "member10.jpeg" },
  {  name: "Mr. Anil Govind Potdar", role: "member", image: "member9.jpeg" },
  {  name: "Mr. Vishal  Lad", role: "Member", image: "member11.jpg" },
  {  name: "Dr. Sudhir Kumbhar", role: "CO-Ordineter", image: "member8.jpg" },
  {  name: "Dr. Sarang S. Bhola", role: "Member Secretary", image: "member12.jpg" },
];

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-48 md:h-60">
        <Image
          src="/commitee/background.webp"
          alt="Committee Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Committee Members
          </h1>
          <div className="mt-3 flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full shadow-md text-white text-sm">
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Committee</span>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
            Rayat Science and Innovation Activity Centre – Committee
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-xl transition-all border p-5 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image
                    src={`/commitee/${member.image}`} // ✅ updated path
                    alt={member.name}
                    width={110}
                    height={110}
                    className="rounded-full object-cover border"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Role:</span> {member.role}
                </p>
                {/* <p className="text-xs text-gray-400">Sr. No: {member.no}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
