import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center">

          {/* Logo and About */}
          <div>
            <Link href="/" aria-label="Validator Home">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32">
                <path d="M16 2.048c-7.73 0-14 6.27-14 14 0 7.73 6.27 14 14 14s14-6.27 14-14c0-7.73-6.27-14-14-14zm0 26c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-18c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            </Link>
            <p className="mt-2">Staking and validation services for the blockchain community.</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center mt-4 md:mt-0">
            <Link href="/about" className="text-gray-400 hover:text-white transition duration-150 ease-in-out ml-4">About Us</Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition duration-150 ease-in-out ml-4">Services</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition duration-150 ease-in-out ml-4">Contact</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center mt-4 md:mt-0">
            <a href="https://twitter.com/yourvalidator" className="text-purple-600 hover:text-white transition duration-150 ease-in-out" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.675 3.149 4.916 4.916 0 003.17 9.713a4.902 4.902 0 01-2.228-.616v.06a4.917 4.917 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.92 4.92 0 004.604 3.417 9.867 9.867 0 01-6.29 2.166 10.42 10.42 0 01-1.168-.067 13.901 13.901 0 007.557 2.209c9.054 0 14.01-7.5 14.01-14 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.557z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
