import React from 'react';
import Image from 'next/image';
import type { TimelineEvent } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  event: TimelineEvent;
  type: 'education' | 'experience';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, type }) => {
  const Icon = type === 'education' ? GraduationCap : Briefcase;

  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {event.logoUrl ? (
              <Image 
                src={event.logoUrl} 
                alt={`${event.institution} logo`} 
                width={40} 
                height={40} 
                className="rounded-full object-contain bg-muted p-1"
                data-ai-hint="company logo" 
              />
            ) : (
              <Icon className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
            )}
            <div>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <CardDescription className="text-base">{event.institution}</CardDescription>
            </div>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap mt-1">{event.dateRange}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{event.description}</p>
      </CardContent>
    </Card>
  );
};

export default TimelineItem;
