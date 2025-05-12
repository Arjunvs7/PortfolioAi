import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className, title }) => {
  return (
    <section id={id} className={cn("py-16 md:py-24 w-full", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">{title.split(' ')[0]}</span>
            {title.split(' ').slice(1).join(' ')}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
