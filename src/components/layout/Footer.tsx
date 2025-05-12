import React from 'react';
import Logo from '@/components/Logo';
import { contactInfo } from '@/lib/data';
import SocialIconLink from '@/components/SocialIconLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          {contactInfo.socialLinks.map((link) => (
            <SocialIconLink key={link.label} {...link} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} PortfolioZen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
