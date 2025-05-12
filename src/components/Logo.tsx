import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="#home" className="text-2xl md:text-3xl font-bold group transition-colors duration-300">
      <span className="text-primary group-hover:text-foreground">Portfolio</span>
      <span className="text-foreground group-hover:text-primary">Zen</span>
    </Link>
  );
};

export default Logo;
