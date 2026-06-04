import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import LogoImage from "../assets/logo-b1.jpeg";
import LightLogoImage from "../assets/logo-2.jpeg";

interface FooterProps {
  isDark: boolean;
  scrollToSection: (
    section: "contact" | "design" | "testimonials" | string,
  ) => void;
}

function Footer({ isDark, scrollToSection }: FooterProps) {
  return (
    <footer className="bg-white/80 dark:bg-black/70 ">
      {/* Google Maps */}
      <div className="w-full h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13881.850688951063!2d76.99090608576029!3d28.669820949306363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f2a0e418e39%3A0x2317794b276256b2!2sNEELKANTH%20WOOD%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1740752510236!5m2!1sen!2sin"
          height={300}
          style={{ border: 0, minWidth: "300px", maxWidth: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
        "
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={isDark ? LogoImage : LightLogoImage}
                alt="logo"
                className="h-12 w-20"
              />
              <span className="ml-2 text-xl text-gray-700 dark:text-white font-bold">
                NWIHOMES
              </span>
            </div>
            <p className="text-gray-800  dark:text-white font-bold mb-4">
              Crafting exceptional furniture for modern living spaces since
              1995.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-800 hover:text-yellow-400 transition-colors"
                >
                  <Icon className="h-5 w-5 dark:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["catalog", "services", "about", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-900 dark:text-white hover:text-yellow-400 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {[
                "Shipping Policy",
                "Returns & Refunds",
                "FAQ",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {[
                {
                  Icon: MapPin,
                  text: "KHASRA NO- 584, Village Hiran Kudna, Mundka, New Delhi, 110041",
                },
                { Icon: Phone, text: "+91 9891560245/+91 9811211683" },
                { Icon: Mail, text: "neelkanthwoodind@gmail.com" },
              ].map(({ Icon, text }, idx) => (
                <li key={idx} className="flex items-center">
                  <Icon className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">{text}</span>
                </li>
              ))}
            </ul>
          </div> */}
            <div className="space-y-4 text-black dark:text-white">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" />
                <span className="dark:text-white">
                  <a href="tel:9891560245" className="hover:underline">
                    +91 9891560245
                  </a>
                  /
                  <a href="tel:9811211683" className="hover:underline">
                    +91 9811211683
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" />
                <span className="dark:text-white hover:underline">
                  <a href="mailto:neelkanthwoodind@gmail.com">
                    neelkanthwoodind@gmail.com
                  </a>
                </span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Clock className="text-yellow-400" />
                <span className="dark:text-white">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </div> */}
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" />
                <span className="dark:text-white">
                  <a href="https://maps.app.goo.gl/5sqTqr79m88u89Kg8">
                    KHASRA NO- 584, Village Hiran Kudna, Mundka, <br />
                    New Delhi, Delhi 110041
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-900 dark:text-white">
          <p>
            &copy; {new Date().getFullYear()} LuxeFurn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
