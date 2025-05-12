
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { sectionNavLinks, profileData } from '@/lib/data';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-card/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between max-w-7xl">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {sectionNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.ariaLabel}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          {profileData.cvUrl && (
             <Button variant="outline" size="sm" asChild>
              <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          )}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-card shadow-xl absolute top-20 left-0 right-0 pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {sectionNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-base font-medium text-foreground/90 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            {profileData.cvUrl && (
              <Button variant="outline" size="sm" asChild className="mt-4">
                <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
