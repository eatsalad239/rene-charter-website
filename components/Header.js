import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/placeholder-logo.svg"
                alt="Rene's Adventures Logo"
                className="h-12 w-auto"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Home
              </a>
            </Link>
            <Link href="/#tours">
              <a className="text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Tours
              </a>
            </Link>
            <Link href="/customize">
              <a className="text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Customize Your Adventure
              </a>
            </Link>
            <Link href="/#contact">
              <a className="text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Contact
              </a>
            </Link>
            <button className="btn-primary">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-ocean-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/">
              <a className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Home
              </a>
            </Link>
            <Link href="/#tours">
              <a className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Tours
              </a>
            </Link>
            <Link href="/customize">
              <a className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Customize Your Adventure
              </a>
            </Link>
            <Link href="/#contact">
              <a className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Contact
              </a>
            </Link>
            <button className="btn-primary w-full">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
