import React from 'react';
import type { LinkItem } from '@/types';
import { Button } from '@/components/ui/button';

const SocialIconLink: React.FC<LinkItem> = ({ href, label, icon: Icon, ariaLabel }) => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel || `Visit ${label} profile`}>
        {Icon && <Icon className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />}
      </a>
    </Button>
  );
};

export default SocialIconLink;
