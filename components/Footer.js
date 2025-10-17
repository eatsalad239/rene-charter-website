import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rene's Adventures</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Experience unforgettable charter tours in the beautiful waters of Belize. 
              From deep sea fishing to custom adventures, we create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ocean-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ocean-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-ocean-400 transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#tours">
                  <a className="text-gray-300 hover:text-ocean-400 transition-colors">
                    Tour Offerings
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/customize">
                  <a className="text-gray-300 hover:text-ocean-400 transition-colors">
                    Customize Your Adventure
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-gray-300 hover:text-ocean-400 transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3 text-ocean-400" />
                <span className="text-gray-300">
                  San Pedro, Ambergris Caye<br />
                  Belize
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-ocean-400" />
                <a
                  href="tel:+5012261234"
                  className="text-gray-300 hover:text-ocean-400 transition-colors"
                >
                  +501-226-1234
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-ocean-400" />
                <a
                  href="mailto:info@renesadventures.com"
                  className="text-gray-300 hover:text-ocean-400 transition-colors"
                >
                  info@renesadventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers & Policies */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <strong>Note:</strong> Activities subject to weather, sea conditions, and seasonal availability. 
              Guests should bring sunscreen, towels, and personal items.
            </p>
            <p>
              <strong>Pricing:</strong> Not included: 12.5% tax, 6% service fee, gratuity.
            </p>
            <p>
              <strong>Cancellation Policy:</strong> No charge for rescheduling if you contact our office within 48 hours 
              of your tour. Full refund for cancellations with 48+ hours' notice or if weather prevents rebooking. 
              No refunds for cancellations made within 48 hours of the scheduled tour.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Rene's Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
