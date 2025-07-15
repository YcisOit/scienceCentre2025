'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone ,Menu, X,} from 'lucide-react';
import Image from 'next/image';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { Youtube, Instagram, Facebook } from 'lucide-react';

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
        { name: "Projects", link: "/innovation/projects" },
        { name: "Resources", link: "/innovation/resources" },
        { name: "Success Stories", link: "/innovation/success-stories" },
      ],
    },
    
    {
      title: "Education Activities",
      submenus: [
        { name: "National Science day", link: "/education/nationalsciencday" },
        { name: "Teacher/Students Workshop", link: "/education/Teacher/studentsworkshop" },
        { name: "Science Demonstration lecture", link: "/education/sciencedemonstrationlecture" },
        { name: "Sky Gazing/Observation", link: "/education/Sky Gazing/observation" },
      ],
    },
    {
      title: "Other Activities",
      submenus: [
        { name: "Science Competition", link: "/education/sciencecompetition" },
        { name: "Sunday Science School Activity", link: "/education/sundayscienceschoolactivity" },
        { name: "Days Celebration", link: "/education/dayscelebration" },
        { name: "Summer Camp", link: "/education/summeramp" },
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
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header ref={headerRef} className="w-full font-poppins">
      {/* 🔝 Topbar with circular YouTube icon */}

<div className="bg-[#000435] text-[#ffffff] font-semibold py-1.5 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
  {/* 📢 News Label + Text */}
  <div className="flex items-center gap-2 text-sm sm:text-base leading-snug">
    {/* Optional Label */}
  
    <span className="truncate">
      🔬 Exciting Science Exhibition this month at RSIAC  • 📢 Workshop on Astronomy - Register Now! • 🛠️ Tinker Lab for Students is Now Live
    </span>
  </div>
 <div className="flex items-center gap-2 text-sm text-white">
  <Phone className="w-4 h-4 text-white" />
  <span className="truncate">Contact Us: +91 8605145013</span>
</div>


  {/* 🔗 Social Media Icons */}

<div className="flex items-center space-x-2 sm:justify-end pr-25">
  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600 hover:text-white"
  >
    <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
  </a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-white"
  >
    <FontAwesomeIcon icon={faInstagram} className="w-6 h-5" />
  </a>
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-white"
  >
    <FontAwesomeIcon icon={faFacebookF} className="w-6 h-5" />
  </a>
</div>

</div>

      {/* 🧠 Top Header */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-4 border-b">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Image
            src="/images/logo.png"
            alt="RSIAC Logo"
            width={110}
            height={70}
            className="object-contain"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Rayat Science and Innovation Activity Centre
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black mt-1 text-center">
              (National Council of Science Museums, Ministry of Culture, Govt. of India)
            </p>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu Toggle */}
      <div className="sm:hidden flex justify-end px-4 py-2 bg-[#000435] text-white">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 🌐 Navigation Bar */}
      <nav className="bg-[#000435] text-white text-sm sm:text-base font-medium relative z-50">
        <ul
          className={`flex-col sm:flex-row sm:flex ${
            mobileMenuOpen ? 'flex' : 'hidden'
          } sm:justify-center sm:space-x-4 py-2 px-2`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative px-2">
              {item.submenus ? (
                <>
                  <div
                    className="flex items-center justify-between cursor-pointer hover:underline"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                  {openDropdown === index && (
                    <div
                      className={`bg-white text-black shadow-lg rounded mt-2 min-w-[180px] z-50 ${
                        mobileMenuOpen ? 'relative' : 'absolute top-full left-0'
                      }`}
                    >
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
