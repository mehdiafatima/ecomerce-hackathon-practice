'use client'; // Add this at the very top to make the component a Client Component
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Header = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="border-b shadow-sm">
      {/* Main Navigation */}
      <div className="mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Exclusive</div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
 

     <nav className="hidden md:flex space-x-8 text-sm font-medium">
      <Link href="/" legacyBehavior>
        <a className="hover:text-gray-500">Home</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="hover:text-gray-500">Contact</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="hover:text-gray-500">About</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a className="hover:text-gray-500">Sign Up</a>
      </Link>
    </nav>

        {/* Search Bar for Desktop */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent flex-1 px-2 focus:outline-none"
          />
        </div>

        {/* Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <nav className="flex flex-col space-y-4 px-4 py-4">
        <Link href="/" legacyBehavior>
        <a className="hover:text-gray-500">Home</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="hover:text-gray-500">Contact</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="hover:text-gray-500">About</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a className="hover:text-gray-500">Sign Up</a>
      </Link>

          {/* Icons inside Mobile Menu */}
          <div className="flex items-center space-x-4 mt-4">
            <FaHeart className="cursor-pointer text-gray-600" />
            <FaShoppingCart className="cursor-pointer text-gray-600" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;






