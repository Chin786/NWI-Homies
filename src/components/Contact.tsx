import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const phoneNumber = "+911234567890";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
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
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-400 dark:text-gray-400"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-400 dark:text-gray-400"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-yellow-400 dark:text-gray-400"
              >
                <Linkedin />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500 dark:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition dark:hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
