import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-500"><Image src="/static/logo/logo.png" width="108" height="48" alt="logo" /></Link>
          </div>

          {/* Menu Button and WhatsApp icon on mobile */}
          <div className="flex md:hidden space-x-4 items-center">
            <a
              href="https://wa.me/your-number"
              className="text-green-500 hover:text-green-700 flex items-center"
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <HiMenuAlt3 className="h-6 w-6" />
            </button>
          </div>

          {/* Menu links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/flight" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Flight</Link>
            <Link href="/tour" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Tour</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/support" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Support</Link>
          </div>

          {/* WhatsApp and Login buttons on larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/your-number"
              className="text-green-500 hover:text-green-700 flex items-center"
            >
              <FaWhatsapp className="mr-1" /> WhatsApp
            </a>
            <Link href="/login" className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/flight" className="block text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Flight</Link>
            <Link href="/tour" className="block text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Tour</Link>
            <Link href="/about" className="block text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/support" className="block text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium">Support</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
