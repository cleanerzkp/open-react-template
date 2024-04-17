import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white fixed w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding with CROSSFI CHAIN logo */}
          <div className="shrink-0 mr-4">
            {/* Link to Home */}
            <Link href="/" className="block" aria-label="Home">
              {/* Default logo (likely for desktop) */}
              <img
                className="hidden md:block w-auto h-8"
                src="/images/SVG/Horizontal version – Main Color [CROSSFI CHAIN].svg"
                alt="CROSSFI CHAIN Logo"
              />
              {/* Icon for mobile */}
              <img
                className="block md:hidden w-8 h-8"
                src="/images/SVG/Icon version – Color [CROSSFI CHAIN].svg"
                alt="CROSSFI CHAIN Logo"
              />
            </Link>
          </div>

          {/* Simplified Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* Additional nav items if needed */}
              <li>
                <Link href="/about" className="font-medium text-gray-300 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-gray-300 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                </Link>
              </li>
              {/* Primary action */}
              <li>
                <Link href="/staking" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
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