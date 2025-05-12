import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { aboutData } from '@/lib/data';

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-foreground/80 leading-relaxed">
          {aboutData.biography}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">Education</h3>
          <div>
            {aboutData.education.map((event, index) => (
              <TimelineItem key={index} event={event} type="education" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">Experience</h3>
          <div>
            {aboutData.experience.map((event, index) => (
              <TimelineItem key={index} event={event} type="experience" />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
