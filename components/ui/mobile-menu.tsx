'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
  
    document.addEventListener('mousedown', clickHandler);
    return () => document.removeEventListener('mousedown', clickHandler);
  }, [mobileNavOpen]);

  // Close the mobile menu if the Esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!mobileNavOpen || event.keyCode !== 27) return;
      setMobileNavOpen(false);
    };
  
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full bg-gray-800 shadow-lg overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{ maxHeight: mobileNavOpen ? '100vh' : 0, opacity: mobileNavOpen ? 1 : 0 }}
      >
        <ul className="px-4 py-2">
          <li>
            <Link href="/about" className="block font-medium text-white hover:text-purple-600 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/services" className="block font-medium text-white hover:text-purple-600 py-2" onClick={() => setMobileNavOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/dashboard" className="block font-medium text-white hover:text-purple-600 py-2" onClick={() => setMobileNavOpen(false)}>Dashboard</Link>
          </li>
          <li>
            <Link href="/contact" className="block font-medium text-white hover:text-purple-600 py-2" onClick={() => setMobileNavOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link href="/signin" className="block font-medium text-white hover:text-purple-600 py-2" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="block font-medium text-center text-white bg-purple-600 hover:bg-purple-700 py-2 rounded-sm transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}