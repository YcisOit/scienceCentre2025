'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "About Us",
      submenus: [
        { name: "About RSIAC", link: "/about" },
        { name: "Vision & Mission", link: "/vissionmission" },
        { name: "Committee", link: "/committee" },
      ],
    },
    {
      title: "Gallery",
      submenus: [
        { name: "Rolling Ball Sculpture", link: "/gallery1" },
        { name: "Fun Science Gallery", link: "/gallery2" },
        { name: "Exhibition Hall", link: "/gallery3" },
        { name: "Innovation Centre", link: "/gallery4" },
        { name: "Science Park", link: "/gallery5" },
      ],
    },
    {
      title: "Innovation Activity Laboratory",
      submenus: [
        { name: "Projects", link: "#" },
        { name: "Resources", link: "#" },
        { name: "Success Stories", link: "#" },
      ],
    },
    {
      title: "Education Activities",
      submenus: [
        { name: "National Science day", link: "/scienceday" },
         { name: "Sunday Science School Activity", link: "/sundayactivity" },
        { name: "Days Celebration", link: "#" },
        { name: "Summer Camp", link: "#" },
        { name: "Science Demonstration lecture", link: "/demonstration" },
      
      ],
    },
    {
      title: "Other Activities",
      submenus: [
        { name: "Science Competition", link: "/com" },
        { name: "Teacher/Students Workshop", link: "/workshop" },
        { name: "Sky Gazing/Observation", link: "/skygazing" },
        { name: "Liquid Nitrogen Show", link: "/nitrogenshow" },
      ],
    },
    { title: "Photo Gallery", link: "/photogallery" },
    {
      title: "Notice",
      submenus: [
        { name: "Latest Notice", link: "#" },
        { name: "Tender", link: "#" },
        { name: "Recruitment", link: "#" },
      ],
    },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header ref={headerRef} className="w-full font-poppins">
      {/* Topbar */}
      <div className="bg-gradient-to-r from-[#003c66] via-[#012230] to-[#012e53] text-[#ffffff] font-semibold py-1.5 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="truncate">
            🔬 Exciting Science Exhibition this month at RSIAC • 📢 Workshop on Astronomy - Register Now! • 🛠️ Tinker Lab for Students is Now Live
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <Phone className="w-4 h-4 text-white" />
          <span>Contact Us: +91 8605145013</span>
        </div>
        <div className="flex items-center space-x-2">
          <a href="https://www.youtube.com/" target="_blank" className="text-red-600 hover:text-white">
            <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="text-pink-500 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="text-blue-600 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Logo and Header Text */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-4 border-b">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div>
            <Image src="/images/anna.logo.png" alt="Left Logo" width={100} height={60} className="object-contain" priority />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Rayat Science and Innovation Activity Centre
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black-700 mt-1 text-center">
              (National Council of Science Museums, Ministry of Culture, Govt. of India)
            </p>
          </div>
          <div>
            <Image src="/images/logo.png" alt="Right Logo" width={100} height={60} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex justify-end px-4 py-2 bg-gradient-to-r from-[#003c66] via-[#012230] to-[#012e53] text-white">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navbar with hover dropdown on desktop */}
      <nav className="bg-gradient-to-r from-[#003c66] via-[#012230] to-[#012e53] text-white text-sm sm:text-base font-medium relative z-50">
  <ul className={`flex-col sm:flex-row sm:flex ${mobileMenuOpen ? 'flex' : 'hidden'} sm:justify-center sm:space-x-4 py-2 px-2`}>
    {menuItems.map((item, index) => (
      <li
        key={index}
        className="relative px-2 group"
        onMouseEnter={() => window.innerWidth >= 640 && setOpenDropdown(index)}
        onMouseLeave={() => window.innerWidth >= 640 && setOpenDropdown(null)}
      >
        {item.submenus ? (
          <>
            <div
              className="flex items-center justify-between cursor-pointer hover:underline"
              onClick={() => {
                if (window.innerWidth < 640) {
                  toggleDropdown(index);
                }
              }}
            >
              <span>{item.title}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>

            {/* Desktop Hover Dropdown */}
            <div className={`hidden sm:absolute sm:top-full sm:left-0 sm:bg-white sm:text-black sm:shadow-lg sm:rounded sm:mt-2 sm:min-w-[180px] sm:z-50 ${openDropdown === index ? 'sm:flex' : ''}`}>
              <ul className="flex flex-col">
                {item.submenus.map((submenu, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={submenu.link}
                      className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {submenu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Click Dropdown */}
            {openDropdown === index && window.innerWidth < 640 && (
              <div className="sm:hidden bg-white text-black shadow-lg rounded mt-2 min-w-[180px] z-50">
                <ul className="flex flex-col">
                  {item.submenus.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={submenu.link}
                        className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.link}
            className="block hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
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