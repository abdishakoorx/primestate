"use client"
import React from 'react'
import Link from 'next/link'

function HeroSection() {

    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/70 sm:bg-transparent sm:from-black/95 sm:to-black/70 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>
                <div
                    className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Discover Your
                            <strong className="block font-extrabold text-secondary"> Dream Property </strong>
                        </h1>
                        <p className="max-w-lg mt-4 text-white sm:text-xl/relaxed">
                            Explore a wide range of residential and commercial properties.
                            From cozy apartments to luxurious homes, find the perfect space that matches your lifestyle.
                        </p>
                        
                            <div className="flex flex-wrap gap-4 mt-8 text-center">

                                <Link
                                    href= {'/agent-finder'}
                                    className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring active:bg-secondary-light sm:w-auto"
                                >
                                    Search Properties
                                </Link>
                                <Link
                                     href={ '/agent-finder'}
                                    className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-secondary hover:text-secondary-dark focus:outline-none focus:ring active:text-secondary-light sm:w-auto"
                                >
                                    Contact an Agent
                                </Link>
                            </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default HeroSection