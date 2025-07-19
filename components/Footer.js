import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-[url('/images/bg.jpeg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="bg-black/70 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 text-sm">

          {/* Logo + Intro */}
          <div className="md:col-span-4 space-y-5">
            <Image src="/images/logo.png" alt="Logo" width={100} height={60} className="object-contain" />
            <h3 className="text-xl font-semibold leading-snug">
               Rayat Science and Innovation Activity Centre, Satara         
                  </h3>
            <p className="text-gray-300 text-[15px]">
              The Science and Innovation Activity Centre is one of the major tourist attractions and
              activity-based science centres of the Satara region, offering interactive exhibits and innovative science experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#"><FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-teal-300" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-pink-400" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faYoutube} className="text-white text-xl hover:text-red-500" /></Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-[15px] text-gray-300">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Science Park", "/science-park"],
                ["Science Show", "/science-show"],
                ["Galleries", "/galleries"],
                ["Enquiry", "/enquiry"],
                ["Contact Us", "/contact"],
                ["Refund Policy", "/refund-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white">
                    <span className="text-white mr-2">»</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2 text-[15px] text-gray-300">
              {[
                "Events", "Package Tour", "Tenders/Notices", "Future Attractions",
                "Membership", "PCMC", "NCSM", "Privacy Policy", "Terms & Conditions"
              ].map((label) => (
                <li key={label}>
                  <Link href="#" className="hover:text-white">
                    <span className="text-white mr-2">»</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-gray-300 space-y-3 text-[15px]">
              <p className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1" />
                <span>Varye, Taluka - Satara, Maharashtra</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
                +91 8605145013
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                sciencecentre@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white pt-4 text-center">
          <p className="text-sm sm:text-base font-medium">
            © {new Date().getFullYear()} Rayat Science and Innovation Activity Centre, Satara | Powered by{" "}
            <span className="font-semibold">YCIS OIT, Satara</span>
          </p>
        </div>
      </div>
    </footer>
  );
}