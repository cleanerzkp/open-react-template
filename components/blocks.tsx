import { useState } from 'react';

export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Why Stake with Degen House?</h2>
            <p className="text-xl text-gray-400">Explore the unique benefits and features that make staking with us secure, profitable, and community-focused.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item - Security */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32"/>
                <path className="stroke-current text-purple-100" strokeLinecap="round" strokeWidth="2" d="M20 30v14h24V30l-12-8z" />
              </svg>
              <h4 className="h4 mb-2">Enhanced Security</h4>
              <p className="text-lg text-gray-400 text-center">Our advanced security measures ensure your assets are safe while maximizing your earning potential.</p>
            </div>

            {/* 2nd item - High Rewards */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <path className="stroke-current text-purple-100" d="M32 16v32M16 32h32" strokeWidth="2"/>
              </svg>
              <h4 className="h4 mb-2">High Rewards</h4>
              <p className="text-lg text-gray-400 text-center">Earn competitive staking rewards with favorable terms and conditions.</p>
            </div>

            {/* 3rd item - Community Driven */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(18 18)" stroke-linecap="round" stroke-width="2" fill="none">
                  <circle className="stroke-current text-purple-300" cx="14" cy="14" r="14"/>
                  <path className="stroke-current text-purple-100" d="M14 0v28M0 14h28"/>
                </g>
              </svg>
              <h4 className="h4 mb-2">Community Driven</h4>
              <p className="text-lg text-gray-400 text-center">Be part of a growing community where your voice matters and influences future developments.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
