import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillBadge from '@/components/SkillBadge';
import { skillsData } from '@/lib/data';

const SkillsSection: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="My Skills" className="bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <Card key={category.name} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
