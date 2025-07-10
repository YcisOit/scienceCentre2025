import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#073B3A] text-white pt-10 pb-4 px-4 sm:px-8 md:px-20 bg-[url('/images/footerbackground.jpeg')] bg-cover bg-center bg-no-repeat">

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-8 text-sm">

        {/* Logo + Description */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">
            Rayat Science and Innovation Activity Centre, Satara
          </h3>
          <p className="text-gray-300 text-justify">
            Rayat Science and Innovation Activity Centre is one of the major tourist attractions and activity-based Science Centre of Satara region...
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#"><FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-teal-300" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-pink-400" /></Link>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Useful Links</h4>
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

        {/* Important Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Important Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/events"><span className="hover:underline">Events</span></Link></li>
            <li><Link href="/package-tour"><span className="hover:underline">Package Tour</span></Link></li>
            <li><Link href="/tenders"><span className="hover:underline">Tenders/Notices</span></Link></li>
            <li><Link href="/future-attractions"><span className="hover:underline">Future Attractions</span></Link></li>
            <li><Link href="/membership"><span className="hover:underline">Membership</span></Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-gray-300 leading-relaxed">
            <strong>Rayat</strong><br />
            Science and Innovation Activity Centre, Satara<br />
            Varye, Taluka- Satara, Maharashtra<br />
          </p>
          <p className="mt-3 font-semibold text-white text-lg">+91 8605145013</p>
          <p className="text-gray-300">rayatsciencecenter@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center mt-10 border-t border-white pt-4 text-white text-center px-2">
        <p className="text-sm sm:text-base md:text-lg font-semibold">
          Rayat Science and Innovation Activity Centre, Satara | Powered by YCIS OIT, Satara
        </p>
      </div>

    </footer>
  );
}
