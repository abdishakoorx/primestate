import { Home, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
              Your trusted partner in finding the perfect property. Whether you're buying, renting, or listing, we make real estate simple and accessible.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@primestate.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/buy" className="transition-colors hover:text-primary-foreground">Buy Properties</Link></li>
              <li><Link href="/rent" className="transition-colors hover:text-primary-foreground">Rent Properties</Link></li>
              <li><Link href="/agent-finder" className="transition-colors hover:text-primary-foreground">Find Agents</Link></li>
              <li><Link href="/add-new-listing" className="transition-colors hover:text-primary-foreground">List Property</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+254 722 80781</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center border-t border-primary-foreground/20 text-primary-foreground/60">
          <p>&copy; 2025 Primestate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;