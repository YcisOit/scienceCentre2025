import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#073B3A] text-white pt-10 pb-4 px-4 sm:px-8 md:px-20 bg-[url('/images/footerbackground.jpeg')] bg-cover bg-center bg-no-repeat">

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 text-sm">

        {/* Logo & Description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">
            Rayat Science and Innovation Activity Centre, Satara
          </h3>
          <p className="text-gray-300 text-justify">
            Rayat Science and Innovation Activity Centre is one of the major tourist attractions and activity-based Science Centre of Satara region, offering interactive exhibits and innovative science experiences.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-teal-300 transition duration-300" />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-pink-400 transition duration-300" />
            </Link>
          </div>
        </div>

        {/* Useful Links - Centered on Medium Screens */}
        <div className="space-y-4 md:col-start-2 text-center">
          <h4 className="text-lg font-semibold text-white">Useful Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/"><span className="hover:underline">Home</span></Link></li>
            <li><Link href="/about"><span className="hover:underline">About Us</span></Link></li>
            <li><Link href="/science-park"><span className="hover:underline">Science Park</span></Link></li>
            <li><Link href="/science-show"><span className="hover:underline">Science Show</span></Link></li>
            <li><Link href="/galleries"><span className="hover:underline">Galleries</span></Link></li>
            <li><Link href="/enquiry"><span className="hover:underline">Enquiry</span></Link></li>
            <li><Link href="/contact"><span className="hover:underline">Contact Us</span></Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <p className="text-gray-300 leading-relaxed">
            <strong>Rayat</strong><br />
            Science and Innovation Activity Centre, Satara<br />
            Varye, Taluka- Satara, Maharashtra
          </p>
          <p className="font-semibold text-white text-lg">+91 8605145013</p>
          <p className="text-gray-300">rayatsciencecenter@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white pt-4 text-center text-white">
        <p className="text-sm sm:text-base font-medium">
          © {new Date().getFullYear()} Rayat Science and Innovation Activity Centre, Satara | Powered by <span className="font-semibold">YCIS OIT, Satara</span>
        </p>
      </div>

    </footer>
  );
}
