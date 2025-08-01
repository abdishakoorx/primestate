"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, PlusCircle, Users, ShoppingCart, Building, Phone, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/buy", label: "Buy", icon: ShoppingCart },
    { href: "/rent", label: "Rent", icon: Building },
    { href: "/agent-finder", label: "Agents", icon: Users },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/contact", label: "Contact Us", icon: Phone },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'/logo.webp'} alt="Logo" width={120} height={120} />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 space-x-1 text-sm font-medium transition-colors rounded-lg relative ${isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <SignedIn>
              <Link href="/add-new-listing">
                <Button variant="secondary" size="sm" className="flex items-center space-x-1">
                  <PlusCircle className="w-4 h-4" />
                  <span>List Property</span>
                </Button>
              </Link>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 border-t md:hidden border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2 space-x-2 text-sm font-medium transition-colors rounded-lg relative ${isActive
                      ? 'text-primary bg-primary/5 border-l-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <SignedIn>
                  <Link href="/add-new-listing">
                    <Button variant="secondary" size="sm" className="flex items-center space-x-1">
                      <PlusCircle className="w-4 h-4" />
                      <span>List Property</span>
                    </Button>
                  </Link>
                  <UserButton />
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;