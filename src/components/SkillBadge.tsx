import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { Skill } from '@/types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <Badge variant="secondary" className="px-3 py-1.5 text-sm flex items-center gap-2 bg-card hover:bg-primary/10 transition-colors">
      {skill.icon && <skill.icon className="h-4 w-4 text-primary" />}
      <span>{skill.name}</span>
    </Badge>
  );
};

export default SkillBadge;
