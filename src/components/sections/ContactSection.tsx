import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import SocialIconLink from '@/components/SocialIconLink';
import { contactInfo } from '@/lib/data';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Contact Me" className="bg-secondary">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary">Let&apos;s Connect</h3>
          <p className="text-foreground/80 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out via the form or connect with me on social media.
          </p>
          <div className="space-y-3">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Mail className="h-5 w-5 text-primary" />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex space-x-3 pt-2">
              {contactInfo.socialLinks.map((link) => (
                <SocialIconLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
