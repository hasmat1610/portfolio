"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black" role="contentinfo">
      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; Copyright {new Date().getFullYear()} <a href="#" className="text-white hover:text-blue-500 transition-colors font-medium" aria-label="Homepage">Hasmat Patel</a>. All Rights Reserved. | Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;