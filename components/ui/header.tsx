import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding with CROSSFI CHAIN logo */}
          <div className="shrink-0 mr-4">
            {/* Assuming 'Icon version – Color [CROSSFI CHAIN].svg' is the logo you want to use */}
            <Link href="/" className="block" aria-label="Home">
              <img src="/path/to/your/Icon_version_Color_[CROSSFI_CHAIN].svg" alt="CROSSFI CHAIN Logo" className="w-8 h-8" />
            </Link>
          </div>

          {/* Simplified Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/https://test.xfiscan.com/validators/mxvaloper16dp3vfc3t5yxd4ha0qkmmzfv9kj0e46m2axnjy" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Stake Now
                </Link>
              </li>
              <li>
                <Link href="/how" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
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
