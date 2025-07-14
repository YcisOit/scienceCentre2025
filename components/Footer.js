import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#073B3A] text-white pt-12 pb-6 px-4 bg-[url('/images/footerbackground.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-sm">

          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-snug">
              Rayat Science and Innovation Activity Centre, Satara
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Rayat Science and Innovation Activity Centre is one of the major tourist attractions and activity-based Science Centres of the Satara region, offering interactive exhibits and innovative science experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-teal-300 transition" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-pink-400 transition" />
              </Link>
            </div>
          </div>

          {/* Useful Links - Fully Centered */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h4 className="text-lg font-semibold text-white">Useful Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/science-park" className="hover:underline">Science Park</Link></li>
              <li><Link href="/science-show" className="hover:underline">Science Show</Link></li>
              <li><Link href="/galleries" className="hover:underline">Galleries</Link></li>
              <li><Link href="/enquiry" className="hover:underline">Enquiry</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
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
            <p className="text-lg font-semibold text-white mt-2">+91 8605145013</p>
            <p className="text-gray-300">rayatsciencecenter@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white pt-4 text-center">
          <p className="text-sm sm:text-base font-medium">
            © {new Date().getFullYear()} Rayat Science and Innovation Activity Centre, Satara | Powered by <span className="font-semibold">YCIS OIT, Satara</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
