import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/lib/data';

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
