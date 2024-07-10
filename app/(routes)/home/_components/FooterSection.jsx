import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FooterSection() {
  return (
    <footer className="text-gray-300 bg-gray-700">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-8">
            <Image src="/logo1.svg" alt="Logo"  width={50} height={50} />
            <p className="text-sm">
              Elevating real estate experiences with innovative solutions and unparalleled service.
            </p>
            <div className="flex space-x-6">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="text-gray-400 transition-colors hover:text-white">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Properties', 'Agents', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {['Property Valuation', 'Investment Advice', 'Mortgage Services', 'Legal Assistance', 'Market Analysis'].map((item) => (
                <li key={item}>
                  <Link href="#" className="transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm">Stay updated with our latest properties and real estate news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-white bg-gray-800 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-r-md hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Real Estate Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="mr-4 text-sm transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-sm text-center">
            Making your real estate dreams a reality since 2005
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;