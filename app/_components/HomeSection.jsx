"use client"
import Link from 'next/link'
import React from 'react'
import { useUser } from '@clerk/nextjs';

function HomeSection() {
    const {isSignedIn} = useUser()
    return (
        <div>
            <section className="bg-black">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Find Your Dream Home</h2>

                        <p className="mt-4 text-gray-300">
                            Discover a wide range of properties for sale and rent. From cozy apartments to luxurious estates,
                            we have the perfect home waiting for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Residential Properties</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Browse through our extensive collection of houses, apartments, and condos.
                                Find the perfect place to call home in your desired neighborhood.
                            </p>
                        </p>

                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Commercial Spaces</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Explore our selection of office spaces, retail locations, and industrial properties.
                                Find the ideal space to grow your business.
                            </p>
                        </p>

                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Rental Properties</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Discover a variety of rental options, from short-term vacation homes to
                                long-term residential leases. Find flexible living solutions that suit your needs.
                            </p>
                        </p>

                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Property Valuation</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Get accurate and up-to-date property valuations. Our expert team uses
                                advanced tools and market data to provide you with reliable estimates.
                            </p>
                        </p>

                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Expert Agents</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Connect with our team of experienced real estate agents. They're ready to
                                guide you through every step of your property journey.
                            </p>
                        </p>

                        <p
                            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-tertiary/10 hover:shadow-secondary/15"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500 size-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Secure Transactions</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Rest easy with our secure transaction process. We ensure that all property
                                deals are handled with the utmost care and legal compliance.
                            </p>
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href={'/buy' }
                            className="inline-block px-8 py-4 text-lg font-semibold text-black transition bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            Start Your Property Search
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default HomeSection