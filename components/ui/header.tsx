import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24"> {/* Adjust the height as needed */}

          {/* Site branding with CROSSFI CHAIN logo */}
          <div className="shrink-0">
            {/* Link to Home */}
            <Link href="/" className="block" aria-label="Home">
              {/* Default logo for desktop */}
              <img
                className="hidden md:block w-auto h-40" // Adjust the height to suit your design
                src="/images/SVG/Horizontal version – Main Color [CROSSFI CHAIN].svg"
                alt="CROSSFI CHAIN Logo"
              />
              {/* Icon for mobile */}
              <img
                className="block md:hidden w-12 h-12" // Adjust the width and height to suit your design
                src="/images/SVG/Icon version – Color [CROSSFI CHAIN].svg"
                alt="CROSSFI CHAIN Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/about" className="text-lg font-medium text-gray-300 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-medium text-gray-300 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-lg font-medium text-gray-300 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="https://test.xfiscan.com/validators/mxvaloper16dp3vfc3t5yxd4ha0qkmmzfv9kj0e46m2axnjy" target="_blank" className="btn text-lg text-white bg-purple-600 hover:bg-purple-700 ml-3 px-5 py-3 rounded-md transition duration-150 ease-in-out">
                  Stake Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
}