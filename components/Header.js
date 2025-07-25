'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const menuItems = [
  { title: "Home", link: "/" },
  {
    title: "About Us",
    submenus: [
      { name: "About Sanstha", link: "/sanstha" },
      { name: "About RSIAC", link: "/about" },
      { name: "Vision & Mission", link: "/vissionmission" },
      { name: " Adminstrative Committee", link: "/committee" },
      { name: " Reports & Presentation", link: "/reports" },
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
      { name: "Days Celebration", link: "/Daycelebration" },
      { name: "Summer Camp", link: "/SummerCamp" },
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

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <>

      {/* Topbar */}
      <div className="bg-gradient-to-r from-[#003c66] via-[#012230] to-[#012e53] text-white font-semibold py-1.5 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
          <a href="https://www.youtube.com/@rayatsciencecentresatara4951" target="_blank" className="text-red-600 hover:text-white">
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
            <Image src="/images/logo.png" alt="Left Logo" width={100} height={60} className="object-contain" priority />
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
            <Image src="/images/anna.logo.png" alt="Right Logo" width={100} height={60} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#003c66] via-[#012230] to-[#012e53] text-white py-1 px-4 relative">
        {/* Mobile toggle */}
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-lg font-semibold"></h1>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav list */}
        <ul className={`flex flex-col md:flex-row md:justify-center md:gap-4 gap-2 mt-3 md:mt-0 ${mobileMenuOpen ? 'block' : 'hidden'} md:flex`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => !mobileMenuOpen && setOpenDropdown(index)}
              onMouseLeave={() => !mobileMenuOpen && setOpenDropdown(null)}
            >
              {item.submenus ? (
                <>
                  <div
                    className="flex items-center cursor-pointer px-2 py-1 hover:underline"
                    onClick={() => mobileMenuOpen && toggleDropdown(index)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </div>

                  {/* Dropdown */}
                  {openDropdown === index && (
                    <ul className="md:absolute md:top-full left-0 bg-white text-black shadow-md py-1 w-60 z-10 md:block">
                      {item.submenus.map((submenu, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={submenu.link}
                            className="block px-4 py-2 hover:bg-gray-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className="block px-2 py-1 hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
