'use client';

import * as React from "react";
import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import { FeminineButton } from "@/components/ui/feminine-theme";
import Link from "next/link";

interface FooterProps {
  logo?: React.ReactNode;
  brandName?: string;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks?: Array<{
    href: string;
    label: string;
  }>;
  legalLinks?: Array<{
    href: string;
    label: string;
  }>;
  copyright?: {
    text: string;
    license?: string;
  };
}

export function FeminineFooter({
  logo = <Heart className="h-8 w-8 text-pink-400" fill="rgba(236, 72, 153, 0.3)" strokeWidth={1.5} />,
  brandName = "DreamNest",
  socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:hello@dreamnest.com",
      label: "Email",
    },
  ],
  mainLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ],
  legalLinks = [
    { href: "/imprint", label: "Imprint" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
  copyright = {
    text: `© ${new Date().getFullYear()} ${brandName}`,
    license: "All rights reserved",
  },
}: FooterProps) {
  return (
    <footer className="pb-8 pt-16 lg:pb-10 lg:pt-24 border-t border-pink-100/30 dark:border-pink-900/20 relative overflow-hidden" style={{ transform: 'translate3d(0, 0, 0)' }}>
      {/* Subtle decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-100/10 to-purple-100/5 dark:from-pink-900/10 dark:to-purple-900/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-pink-100/10 to-purple-100/5 dark:from-pink-900/10 dark:to-purple-900/5 rounded-full blur-xl -z-10"></div>
      
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-x-2 group"
            aria-label={brandName}
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
              {logo}
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">{brandName}</span>
          </Link>
          
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 dark:bg-gray-900/80 text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 shadow-sm hover:shadow transition-all duration-200 border border-pink-200/30 dark:border-pink-800/30"
                  style={{ 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    transform: 'translate3d(0, 0, 0)'
                  }}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 pt-8 border-t border-pink-100/20 dark:border-pink-900/20">
          <nav className="lg:col-span-8">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mainLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="lg:col-span-4">
            <div className="p-5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-pink-100/30 dark:border-pink-900/20 shadow-sm" style={{ 
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              transform: 'translate3d(0, 0, 0)'
            }}>
              <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">Stay Connected</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Subscribe to our newsletter for updates, insights, and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-pink-200/50 dark:border-pink-900/30 bg-white/80 dark:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-pink-400/30"
                  style={{ 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                />
                <FeminineButton variant="soft" className="text-sm py-1 px-3">Subscribe</FeminineButton>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-pink-100/20 dark:border-pink-900/20 flex flex-col md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
            {legalLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
