'use client';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      submenus: [
        { name: "About RSIAC", link: "/about" },
        { name: "Vision & Mission", link: "/about/vision-mission" },
        { name: "Team", link: "/about/team" },
      ],
    },
    {
      title: "Innovation Activity Laboratory",
      submenus: [
        { name: "Projects", link: "/innovation/projects" },
        { name: "Resources", link: "/innovation/resources" },
        { name: "Success Stories", link: "/innovation/success-stories" },
      ],
    },
    {
      title: "Gallery",
      submenus: [
        { name: "Photo Gallery", link: "/gallery/photo" },
        { name: "Video Gallery", link: "/gallery/video" },
        { name: "Virtual Tour", link: "/gallery/virtual-tour" },
      ],
    },
    {
      title: "Education Activities",
      submenus: [
        { name: "Workshops", link: "/education/workshops" },
        { name: "Seminars", link: "/education/seminars" },
        { name: "Outreach Programs", link: "/education/outreach" },
      ],
    },
    {
      title: "Other Facilities",
      submenus: [
        { name: "Library", link: "/facilities/library" },
        { name: "Labs", link: "/facilities/labs" },
        { name: "Auditorium", link: "/facilities/auditorium" },
      ],
    },
    {
      title: "Notice",
      submenus: [
        { name: "Latest Notice", link: "/notice/latest" },
        { name: "Tender", link: "/notice/tender" },
        { name: "Recruitment", link: "/notice/recruitment" },
      ],
    },
    {
      title: "Contact Us",
      submenus: [
        { name: "Location", link: "/contact/location" },
        { name: "Email", link: "/contact/email" },
        { name: "Helpline", link: "/contact/helpline" },
      ],
    },
  ];

  return (
    <header className="w-full font-poppins">
      {/* Top Header */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-4 border-b">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
          Rayat Science and Innovation Activity Centre
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black text-center mt-1">
          (National Council of Science Museums, Ministry of Culture, Govt. of India)
        </p>
      </div>

      {/* Navigation Bar */}
   <nav className="bg-[#000435] text-white text-sm sm:text-base font-medium">

        <ul className="flex flex-wrap justify-center space-x-4 py-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group px-2">
              {/* If item has submenus */}
              {item.submenus ? (
                <>
                  <div className="flex items-center cursor-pointer hover:underline">
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                  <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded mt-2 min-w-[180px] z-50">
                    {item.submenus.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                      >
                        <Link href={submenu.link}>{submenu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // If no submenu, it's a direct link (like Home)
                <Link href={item.link} className="hover:underline">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
