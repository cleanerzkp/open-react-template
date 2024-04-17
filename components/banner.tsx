'use client'
import { useState } from 'react';

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-blue-700 text-white text-sm p-3 md:rounded-lg shadow-lg flex justify-between items-center">
            <div>
            <strong className="hidden sm:inline text-lg">Degen House</strong>
            <span className="hidden sm:inline text-lg"> Secure network and gain <span className="text-2xl">💰</span> with us</span>                     <a
                className="ml-2 font-bold text-lg hover:text-blue-300 underline transition-colors duration-300"
                href="https://test.xfiscan.com/validators/mxvaloper16dp3vfc3t5yxd4ha0qkmmzfv9kj0e46m2axnjy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Staking Platform
              </a>
            </div>
            <button
              className="text-white hover:text-gray-200"
              onClick={() => setBannerOpen(false)}
              aria-label="Close"
            >
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}