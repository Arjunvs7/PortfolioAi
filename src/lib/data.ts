import type { ProfileData, SkillCategory, TimelineEvent, Project, ContactInfo, LinkItem } from '@/types';
import { Github, Linkedin, Twitter, Mail, Briefcase, Code, Cpu, Server, Palette, Globe, Download, Send, MessageSquare, Sparkles ,Database,Flame ,Worm } from 'lucide-react';

export const profileData: ProfileData = {
  name: "Arjun V S",
  title: "Full-Stack Developer & AI Enthusiast",
  profilePictureUrl: "https://res.cloudinary.com/dieqx8avj/image/upload/v1747069473/Profile.png",
  cvUrl: "https://github.com/Arjunvs7/Resume-Analyser/blob/main/Arjun%20V%20S's%20Resume.pdf",
  intro: "Passionate about creating elegant and efficient solutions that blend technology and user experience. Exploring the frontiers of AI.",
  ctaButton: { href: "#projects", label: "View My Work", icon: Briefcase, ariaLabel: "View my projects section" },
};

export const aboutData: { biography: string; education: TimelineEvent[]; experience: TimelineEvent[] } = {
  biography: "Hello! I'm Arjun, a dedicated full-stack developer with a keen interest in artificial intelligence and machine learning. My journey in tech began with a fascination for how software can solve real-world problems. I thrive in collaborative environments and continuously seek to learn and adapt to new technologies. When I'm not coding, you can find me exploring hiking trails or experimenting with new recipes.",
  education: [
    {
      title: "Master of Computer Applications",
      institution: "KTU University",
      dateRange: "2023 - 2025",
      description: "Graduated with honors",
      logoUrl: "https://picsum.photos/seed/stanford/40/40",
    },
    {
      title: "Bachelor of Computer Applications",
      institution: "MG University",
      dateRange: "2020 - 2023",
      description: "Graduated with honors. Build few projects.",
      logoUrl: "https://picsum.photos/seed/berkeley/40/40",
    },
  ],
  experience: [
    {
      title: "Poster Designer",
      institution: "Atomgoals.com",
      dateRange: "2025 - Present",
      description: "Leading the creation of high-impact visual designs for marketing and branding. Collaborating closely with cross-functional teams to translate ideas into compelling visual narratives",
      logoUrl: "https://picsum.photos/seed/techsolutions/40/40",
    },
    // {
    //   title: "Software Developer",
    //   institution: "Innovatech Ltd.",
    //   dateRange: "2020 - 2022",
    //   description: "Developed and maintained scalable web applications using React, Node.js, and Python. Contributed to the integration of machine learning models.",
    //   logoUrl: "https://picsum.photos/seed/innovatech/40/40",
    // },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Code },
      // { name: "Next.js", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5 & CSS3", icon: Palette },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python (Flask/Django)", icon: Worm },
      { name: "MongoDb", icon: Database },
      { name: "REST APIs", icon: Server },
      { name: "Firebase", icon: Flame },
    ],
  },
  // {
  //   name: "AI & Machine Learning",
  //   skills: [
  //     { name: "Genkit", icon: Cpu },
  //     { name: "TensorFlow/Keras", icon: Cpu },
  //     { name: "NLP", icon: Cpu },
  //     { name: "Computer Vision", icon: Cpu },
  //   ],
  // },
  {
    name: "Tools",
    skills: [
      // { name: "Docker", icon: Briefcase },
      { name: "Git & GitHub", icon: Github },
      { name: "VS code", icon: Briefcase },
      { name: "Postman", icon: Server },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Techrevive",
    description: "A web application that helps manage gadget repairs and e-waste collection through dedicated modules for admins, technicians, collectors, and customers.",
    techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite/MySQL"],
    imageUrl: "https://res.cloudinary.com/dieqx8avj/image/upload/v1747075781/Home.png",
    dataAiHint: "abstract code",
    liveUrl: "#",
    repoUrl: "https://github.com/Arjunvs7/TechRevive-Backup",
  },
  {
    id: "2",
    title: "Ayurcare E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, cart functionality, and secure payments.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "https://res.cloudinary.com/dieqx8avj/image/upload/v1747076804/home1.jpg",
    dataAiHint: "online shopping",
    liveUrl: "#",
    repoUrl: "https://github.com/Arjunvs7/Aycare",
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
  //   {
  //   id: "4",
  //   title: "Task Management App",
  //   description: "A collaborative task management tool to help teams organize and track their work effectively.",
  //   techStack: ["Vue.js", "Firebase", "Vuetify"],
  //   imageUrl: "https://picsum.photos/seed/project4/400/300",
  //   dataAiHint: "productivity tool",
  //   liveUrl: "#",
  //   repoUrl: "#",
  // },
];

export const contactInfo: ContactInfo = {
  email: "Arjunvs701@gmail.com",
  socialLinks: [
    { href: "https://github.com/Arjunvs7", label: "GitHub", icon: Github, ariaLabel: "Visit my GitHub profile" },
    { href: "https://www.linkedin.com/in/701arjunvs/", label: "LinkedIn", icon: Linkedin, ariaLabel: "Visit my LinkedIn profile" },
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
