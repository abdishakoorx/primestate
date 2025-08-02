import { Home, Mail, Phone, MapPin, Users, MessageCircle, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "/",
      icon: Facebook,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "/",
      icon: Twitter,
      color: "hover:text-blue-300"
    },
    {
      name: "LinkedIn",
      href: "/",
      icon: Linkedin,
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      href: "/",
      icon: Instagram,
      color: "hover:text-pink-400"
    },
    {
      name: "YouTube",
      href: "/",
      icon: Youtube,
      color: "hover:text-red-400"
    },
    {
      name: "GitHub",
      href: "https://github.com/abdishakoorx",
      icon: Github,
      color: "hover:text-gray-300"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <Image src="/logo-light.webp" alt="Logo" width={120} height={120} />
            </div>
            <p className="max-w-md mb-6 text-primary-foreground/80">
              Your trusted partner in finding the perfect property.
            </p>

            {/* Contact Info */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>abdishakoor145@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+254 722 280 781</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/20 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Properties</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/buy" className="transition-colors hover:text-primary-foreground">Buy Properties</Link></li>
              <li><Link href="/rent" className="transition-colors hover:text-primary-foreground">Rent Properties</Link></li>
              <li><Link href="/agent-finder" className="transition-colors hover:text-primary-foreground">Find Agents</Link></li>
              <li><Link href="/add-new-listing" className="transition-colors hover:text-primary-foreground">List Property</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="flex items-center space-x-2 transition-colors hover:text-primary-foreground">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-2 transition-colors hover:text-primary-foreground">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li><Link href="/" className="transition-colors hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link href="/" className="transition-colors hover:text-primary-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-center text-primary-foreground/60">
              &copy; 2025 Primestate. All rights reserved. Built with ❤️ by{" "}
              <a
                href="https://abdishakoorx.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-foreground"
              >
                Abdishakoor Hassan
              </a>
            </p>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="transition-colors text-primary-foreground/60 hover:text-primary-foreground">
                Sitemap
              </Link>
              <Link href="/" className="transition-colors text-primary-foreground/60 hover:text-primary-foreground">
                Accessibility
              </Link>
              <Link href="/" className="transition-colors text-primary-foreground/60 hover:text-primary-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;