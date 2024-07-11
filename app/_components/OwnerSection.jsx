'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Building, DollarSign, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';


const ServiceCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg"
  >
    <Icon className="w-12 h-12 mb-4 text-tertiary" />
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

function OwnerSection() {
  const {isSignedIn} = useUser()
  const services = [
    {
      title: "Property Listing Management",
      description: "Easily manage and showcase your properties with our advanced listing tools.",
      icon: Building
    },
    {
      title: "Market Analysis",
      description: "Access in-depth market insights to price your properties competitively.",
      icon: TrendingUp
    },
    {
      title: "Client Matching",
      description: "Connect with potential buyers or tenants through our smart matching system.",
      icon: Users
    },
    {
      title: "Transaction Support",
      description: "Streamline your deals with our secure and efficient transaction process.",
      icon: DollarSign
    }
  ];

  return (
    <section className="p-10 px-10 py-16 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center text-white"
        >
          Empowering Agents & Landlords
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-xl text-center text-gray-300"
        >
          Maximize your property potential with our cutting-edge tools and services. 
          We're here to help you succeed in the real estate market.
        </motion.p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            href={isSignedIn ? "/agent-services" : "/sign-in"} 
            className="px-8 py-3 font-bold text-black transition duration-300 ease-in-out transform rounded-full bg-tertiary hover:bg-tertiary-dark hover:scale-105"
          >
            Post your Listing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default OwnerSection;