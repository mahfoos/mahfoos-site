import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/brand-icons";

export const siteConfig = {
  name: "Mahfoos Ahamed",
  title: "Mahfoos Ahamed | Software Engineer & Cloud-Native Architect",
  role: "Software Engineer",
  headline: "Engineering scalable, cloud-native software from idea to production.",
  subheadline:
    "Full-Stack Engineer, Cloud Enthusiast, Lecturer, and AI Researcher passionate about designing scalable systems, modern web applications, mobile experiences, and cloud-native architectures.",
  description:
    "Mahfoos Ahamed is a Software Engineer specializing in Full-Stack Development, Cloud Computing, Kubernetes, DevOps, AI, and Software Architecture. Based in Colombo, Sri Lanka.",
  url: "https://mahfoosahamed.com",
  email: "umahfoosahamed@gmail.com",
  location: "Colombo, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/mahfoos-ahamed",
  github: "https://github.com/mahfoosahamed",
  medium: "https://mahfoozahamed.medium.com",
  resume:
    "https://drive.google.com/uc?export=download&id=1dWnB7G_J4w3fXRzS-yo_JGeeNZ7aMADF",
  resumeView:
    "https://drive.google.com/file/d/1dWnB7G_J4w3fXRzS-yo_JGeeNZ7aMADF/view",
  image: "/images/mahfoos.jpg",
  booking:
    "mailto:umahfoosahamed@gmail.com?subject=Booking%20a%201%3A1%20session&body=Hi%20Mahfoos%2C%0A%0AI%27d%20like%20to%20book%20a%20session%20about%3A%0A%0A(mentorship%20%2F%20consulting%20%2F%20code%20review%20%2F%20project%20help)%0A%0AThanks!",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
  { label: "Medium", href: siteConfig.medium, icon: MediumIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const heroHighlights = [
  "4+ Years Experience",
  "Full-Stack Engineer",
  "Cloud & DevOps Engineer",
  "Visiting Lecturer",
  "AI & Big Data Researcher",
];

export const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "500+", label: "Professional Connections" },
];

export const aboutParagraphs = [
  "Mahfoos Ahamed is a Software Engineer with deep expertise across the full stack, including Java, Spring Boot, NestJS, React, Next.js, and React Native, combined with hands-on cloud-native engineering on Kubernetes, Docker, AWS, GCP, and Azure.",
  "He designs and ships scalable systems end-to-end: from resilient backend services and modern web & mobile experiences to automated CI/CD pipelines and production-grade cloud infrastructure.",
  "Beyond building software, Mahfoos is a Visiting Lecturer and Research Supervisor, mentoring the next generation of engineers, and an active AI & Big Data researcher exploring machine learning, NLP, and large-scale analytics.",
];

export const aboutRoles = [
  "Software Engineer @ Jaseci Labs",
  "Research / Project Supervisor @ IIT",
  "Visiting Lecturer @ IIT",
];

export const passions = [
  "Software Architecture",
  "Cloud Computing",
  "Kubernetes",
  "AI & Machine Learning",
  "Big Data Analytics",
  "Mentoring Future Engineers",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "Jaseci Labs",
    role: "Software Engineer",
    period: "Nov 2024 to Present",
    current: true,
    achievements: [
      "Developed cross-platform mobile applications using React Native",
      "Built scalable, server-rendered applications with Next.js",
      "Authored and managed Kubernetes deployments for production workloads",
      "Provisioned and operated AWS cloud infrastructure",
      "Automated build, test, and release pipelines with CI/CD",
    ],
  },
  {
    company: "Informatics Institute of Technology (IIT)",
    role: "Research / Project Supervisor",
    period: "Jun 2025 to Present",
    current: true,
    achievements: [
      "Supervise final-year undergraduate research and capstone projects",
      "Guide students through software architecture and AI project delivery",
    ],
  },
  {
    company: "Informatics Institute of Technology (IIT)",
    role: "Visiting Lecturer",
    period: "Sep 2024 to Jun 2025",
    achievements: [
      "Delivered modules on Core Java, OOP, and Software Engineering",
      "Mentored multiple undergraduate batches through project supervision",
    ],
  },
  {
    company: "promiseQ · Contract",
    role: "Software Engineer",
    period: "Jun 2023 to Dec 2024",
    achievements: [
      "Improved API performance by 35% through targeted optimisation",
      "Reduced security vulnerabilities by 50%",
      "Improved overall development efficiency by 40%",
    ],
  },
  {
    company: "Tech Venturas",
    role: "Associate Software Engineer",
    period: "",
    achievements: [
      "Delivered full-stack features across web platforms",
    ],
  },
  {
    company: "Tech Venturas",
    role: "Intern, Full Stack Engineer",
    period: "",
    achievements: [
      "Built and maintained full-stack web application modules",
    ],
  },
];

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "NestJS", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Terraform"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Firebase"],
  },
  {
    category: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "NLP", "PyTorch", "TensorFlow", "Big Data Analytics"],
  },
];

export type Project = {
  title: string;
  category: "AI & ML" | "Cloud & Backend" | "Mobile";
  description: string;
  tech: string[];
  impact?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MediTalk",
    category: "AI & ML",
    description:
      "AI-powered Doctor and Patient conversation summarization and severity prediction system that turns clinical dialogue into structured, actionable insight.",
    tech: ["PyTorch", "Flask", "React.js", "NLP"],
    impact: ["30% higher prediction accuracy", "50% faster responses"],
    featured: true,
  },
  {
    title: "Surukkam",
    category: "AI & ML",
    description:
      "AI-based text summarization platform that condenses long-form content into concise, high-signal summaries.",
    tech: ["Python", "NLP", "React"],
    featured: true,
  },
  {
    title: "Cloud Native HRM System",
    category: "Cloud & Backend",
    description:
      "A scalable, container-orchestrated Human Resource Management system built for cloud-native deployment and high availability.",
    tech: ["Spring Boot", "Docker", "PostgreSQL", "Kubernetes"],
    featured: true,
  },
  {
    title: "React Native Mobile Applications",
    category: "Mobile",
    description:
      "Cross-platform mobile applications delivering native-grade experiences backed by AWS cloud services.",
    tech: ["React Native", "TypeScript", "AWS"],
    featured: true,
  },
];

export const certifications = [
  {
    title: "WSO2 Certified API Manager Practitioner",
    issuer: "WSO2",
  },
  {
    title: "Emerging Young Technologist (CXO Award)",
    issuer: "CXO",
  },
  {
    title: "IIT Cutting Edge",
    issuer: "Informatics Institute of Technology",
  },
];

export const education = [
  {
    degree: "MSc Big Data Analytics",
    school: "Robert Gordon University",
    note: "",
  },
  {
    degree: "BEng (Hons) Software Engineering",
    school: "University of Westminster",
    note: "Second Upper Class",
  },
];

export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "1:1 Mentorship",
    description:
      "Personalised guidance for students and early-career engineers. Career direction, a clear skills roadmap, and honest, practical feedback.",
    points: ["Career & growth advice", "Skill roadmaps", "Honest code feedback"],
    icon: "mentorship",
    featured: true,
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture, cloud-native, Kubernetes, and DevOps advisory for teams and startups building systems that need to scale.",
    points: ["System & cloud architecture", "Kubernetes & DevOps", "Scalability reviews"],
    icon: "consulting",
  },
  {
    title: "Code & Architecture Reviews",
    description:
      "A senior pair of eyes on your codebase, system design, or infrastructure, with clear, actionable recommendations.",
    points: ["Codebase audit", "Design feedback", "Best-practice fixes"],
    icon: "review",
  },
  {
    title: "Project & Interview Prep",
    description:
      "Mock interviews, project supervision, and hands-on help getting your final-year or side project across the line.",
    points: ["Mock interviews", "Project supervision", "Hands-on guidance"],
    icon: "prep",
  },
];

export const community = [
  {
    title: "Visiting Lecturer",
    description: "Teaching Core Java, OOP, and Software Engineering to undergraduate batches.",
  },
  {
    title: "Research Supervisor",
    description: "Guiding final-year research and capstone projects to the finish line.",
  },
  {
    title: "Technical Mentor",
    description: "Mentoring early-career engineers on architecture and best practices.",
  },
  {
    title: "Speaker & Knowledge Sharing",
    description: "Leading sessions on cloud-native engineering, AI, and modern web.",
  },
];

export const communityStats = [
  { value: "500+", label: "Professional Connections" },
  { value: "Multiple", label: "Undergraduate Batches Mentored" },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "The Real-Time Sync Engine That's Changing How We Build Web Apps",
    excerpt:
      "Keeping the UI in sync with your database is genuinely hard. Here's the sync-engine approach reshaping how modern web apps are built.",
    tag: "Web Architecture",
    date: "Dec 2025",
    url: "https://mahfoozahamed.medium.com/the-real-time-sync-engine-thats-changing-how-we-build-web-apps-bf270b2fc5e2",
  },
  {
    title: "NVIDIA's IoT Revolution: Empowering the Edge with AI",
    excerpt:
      "How NVIDIA is pushing AI to the edge, and what it means for the next generation of intelligent IoT systems.",
    tag: "AI & Edge",
    date: "Oct 2024",
    url: "https://mahfoozahamed.medium.com/nvidias-iot-revolution-empowering-the-edge-with-ai-7b237ea13ff6",
  },
  {
    title: "Unlocking the Secrets of CI/CD Security",
    excerpt:
      "A practical look at securing your delivery pipelines, from secrets handling to hardening every stage of CI/CD.",
    tag: "DevOps & Security",
    date: "Sep 2024",
    url: "https://mahfoozahamed.medium.com/unlocking-the-secrets-of-ci-cd-security-49b1dda69b4b",
  },
  {
    title: "How to Deploy Microservices in Azure Kubernetes Service (AKS)",
    excerpt:
      "A step-by-step guide to running scalable, maintainable microservices on Azure Kubernetes Service.",
    tag: "Kubernetes",
    date: "Sep 2024",
    url: "https://mahfoozahamed.medium.com/how-to-deploy-microservices-in-azure-kubernetes-service-aks-075c53aa863d",
  },
  {
    title: "Understanding WebRTC Signaling Servers",
    excerpt:
      "Demystifying the signaling layer behind real-time video, voice, and data communication over the web.",
    tag: "Real-Time",
    date: "May 2024",
    url: "https://mahfoozahamed.medium.com/understanding-webrtc-signaling-servers-44dbfb4839cd",
  },
  {
    title: "Getting Started with Apache Kafka and Spring Boot",
    excerpt:
      "A beginner-friendly guide to streaming real-time data at scale with Apache Kafka and Spring Boot.",
    tag: "Backend",
    date: "Mar 2023",
    url: "https://mahfoozahamed.medium.com/getting-started-with-apache-kafka-and-spring-boot-a-beginners-guide-61d019cc41e7",
  },
];
