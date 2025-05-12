import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { profileData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary pt-20 md:pt-0">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I&apos;m <span className="text-primary">{profileData.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {profileData.title}
          </p>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto md:mx-0">
            {profileData.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="group shadow-lg hover:shadow-primary/50 transition-shadow">
              <a href={profileData.ctaButton.href} aria-label={profileData.ctaButton.ariaLabel}>
                {profileData.ctaButton.icon && <profileData.ctaButton.icon className="mr-2 h-5 w-5" />}
                {profileData.ctaButton.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            {profileData.cvUrl && (
               <Button variant="outline" size="lg" asChild className="shadow-md hover:shadow-accent/40 transition-shadow">
                <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={profileData.profilePictureUrl}
              alt={profileData.name}
              width={384}
              height={384}
              priority
              className="rounded-full object-cover border-4 border-primary shadow-2xl"
              data-ai-hint="profile picture"
            />
             <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
