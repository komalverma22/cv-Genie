

import React from "react";
import Link from "next/link";
import {  Twitter, Linkedin, Github } from "lucide-react";

// Chnage this with your own data
const defaultNavigationLinks = [
  { href: "/", label: "Home" },
  { href: "/create-resume", label: "Create" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const defaultSocialLinks = [
  
  { href: "https://x.com/coffee_0708", icon: <Twitter size={24} />, hoverColor: "text-gray-600" },
  { href: "https://www.linkedin.com/in/komalverma007/", icon: <Linkedin size={24} />, hoverColor: "text-gray-600" },
  { href: "https://github.com/komalverma22", icon: <Github size={24} />, hoverColor: "text-gray-600" },
];

const FooterThird = ({
  brandName = "CVGenie",
  navigationLinks = defaultNavigationLinks,
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <footer className="bg-white/70 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              {brandName}
            </Link>
            
          </div>
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-md">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-600">
                {link.label}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center space-x-4 text-gray-700">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${social.hoverColor || 'text-gray-600'}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 mt-5">
        <div className="mt-5 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterThird;