import type { ProfileData, SkillCategory, TimelineEvent, Project, ContactInfo, LinkItem } from '@/types';
import { Github, Linkedin, Twitter, Mail, Briefcase, Code, Cpu, Server, Palette, Globe, Download, Send, MessageSquare, Sparkles } from 'lucide-react';

export const profileData: ProfileData = {
  name: "Alex Johnson",
  title: "Full-Stack Developer & AI Enthusiast",
  profilePictureUrl: "https://picsum.photos/seed/profile/300/300",
  cvUrl: "/placeholder-cv.pdf",
  intro: "Passionate about creating elegant and efficient solutions that blend technology and user experience. Exploring the frontiers of AI.",
  ctaButton: { href: "#projects", label: "View My Work", icon: Briefcase, ariaLabel: "View my projects section" },
};

export const aboutData: { biography: string; education: TimelineEvent[]; experience: TimelineEvent[] } = {
  biography: "Hello! I'm Alex, a dedicated full-stack developer with a keen interest in artificial intelligence and machine learning. My journey in tech began with a fascination for how software can solve real-world problems. I thrive in collaborative environments and continuously seek to learn and adapt to new technologies. When I'm not coding, you can find me exploring hiking trails or experimenting with new recipes.",
  education: [
    {
      title: "M.Sc. in Computer Science",
      institution: "Stanford University",
      dateRange: "2018 - 2020",
      description: "Focused on AI and Human-Computer Interaction. Thesis on 'Natural Language Processing for Enhanced User Interfaces'.",
      logoUrl: "https://picsum.photos/seed/stanford/40/40",
    },
    {
      title: "B.Sc. in Software Engineering",
      institution: "University of California, Berkeley",
      dateRange: "2014 - 2018",
      description: "Graduated with honors. Active member of the coding club and contributor to open-source projects.",
      logoUrl: "https://picsum.photos/seed/berkeley/40/40",
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      institution: "Tech Solutions Inc.",
      dateRange: "2022 - Present",
      description: "Leading development of a new AI-powered analytics platform. Mentoring junior developers and driving agile practices.",
      logoUrl: "https://picsum.photos/seed/techsolutions/40/40",
    },
    {
      title: "Software Developer",
      institution: "Innovatech Ltd.",
      dateRange: "2020 - 2022",
      description: "Developed and maintained scalable web applications using React, Node.js, and Python. Contributed to the integration of machine learning models.",
      logoUrl: "https://picsum.photos/seed/innovatech/40/40",
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5 & CSS3", icon: Palette },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python (Flask/Django)", icon: Server },
      { name: "GraphQL", icon: Server },
      { name: "REST APIs", icon: Server },
      { name: "Firebase", icon: Server },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Genkit", icon: Cpu },
      { name: "TensorFlow/Keras", icon: Cpu },
      { name: "NLP", icon: Cpu },
      { name: "Computer Vision", icon: Cpu },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Briefcase },
      { name: "Git & GitHub", icon: Github },
      { name: "CI/CD", icon: Briefcase },
      { name: "AWS", icon: Server },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "AI Content Generator",
    description: "A web application that uses Genkit to generate creative content prompts and drafts based on user input.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit", "Firebase"],
    imageUrl: "https://picsum.photos/seed/project1/400/300",
    dataAiHint: "abstract code",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, cart functionality, and secure payments.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "https://picsum.photos/seed/project2/400/300",
    dataAiHint: "online shopping",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing earlier projects and skills. Built with vanilla JavaScript and custom CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://picsum.photos/seed/project3/400/300",
    dataAiHint: "web design",
    repoUrl: "#",
  },
    {
    id: "4",
    title: "Task Management App",
    description: "A collaborative task management tool to help teams organize and track their work effectively.",
    techStack: ["Vue.js", "Firebase", "Vuetify"],
    imageUrl: "https://picsum.photos/seed/project4/400/300",
    dataAiHint: "productivity tool",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const contactInfo: ContactInfo = {
  email: "alex.johnson@example.com",
  socialLinks: [
    { href: "https://github.com", label: "GitHub", icon: Github, ariaLabel: "Visit my GitHub profile" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin, ariaLabel: "Visit my LinkedIn profile" },
    { href: "https://twitter.com", label: "Twitter", icon: Twitter, ariaLabel: "Visit my Twitter profile" },
  ],
};

export const sectionNavLinks: LinkItem[] = [
  { href: "#home", label: "Home", ariaLabel: "Scroll to Home section" },
  { href: "#about", label: "About", ariaLabel: "Scroll to About Me section" },
  { href: "#skills", label: "Skills", ariaLabel: "Scroll to Skills section" },
  { href: "#projects", label: "Projects", ariaLabel: "Scroll to Projects section" },
  { href: "#contact", label: "Contact", ariaLabel: "Scroll to Contact section" },
];
