export interface Profile {
  id: string;
  name: string;
  role: string;
  company?: string;
  imageUrl?: string;
  location?: string;
  bio: string;
  expertise: string[];
  achievements?: string[];

  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Dr. Amara Johnson",
    role: "Chief AI Officer",
    company: "TechVision AI",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Pioneering artificial intelligence research with a focus on ethical AI development and implementation in healthcare technology.",
    location: "San Francisco, CA",
    achievements: [
      "Led development of AI-powered diagnostic tools used in 500+ hospitals",
      "Published 50+ peer-reviewed papers on machine learning",
      "Forbes 30 Under 30 in Technology",
      "TED Speaker on AI Ethics",
    ],
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Healthcare Tech",
      "Ethics in AI",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: "2",
    name: "Sofia Rodriguez",
    role: "Founder & CEO",
    company: "CloudScale Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Building next-generation cloud infrastructure that powers sustainable and scalable digital transformation for enterprises worldwide.",
    location: "Seattle, WA",
    achievements: [
      "Raised $150M in Series C funding",
      "Grew company to 2000+ employees",
      "Named 'Cloud Innovator of the Year' by Tech Magazine",
      "MIT Technology Review's 35 Under 35",
    ],
    expertise: ["Cloud Computing", "DevOps", "Enterprise Software", "SaaS"],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "3",
    name: "Dr. Layla Hassan",
    role: "VP of Engineering",
    company: "Quantum Dynamics",
    imageUrl:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Leading quantum computing research and development, making quantum technology accessible to developers and researchers globally.",
    location: "Dubai, UAE",
    achievements: [
      "Led team that developed first commercial quantum API",
      "IEEE Fellow for contributions to quantum computing",
      "Author of bestselling book 'Quantum Computing Simplified'",
      "Keynote speaker at major tech conferences",
    ],
    expertise: [
      "Quantum Computing",
      "Distributed Systems",
      "Software Architecture",
      "API Design",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "4",
    name: "Grace O'Connor",
    role: "Head of Cybersecurity",
    company: "SecureNet Global",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2glMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Protecting critical infrastructure through innovative cybersecurity solutions and leading initiatives to increase diversity in information security.",
    location: "Dublin, Ireland",
    achievements: [
      "Prevented over 10,000 cyber attacks",
      "CISO of the Year Award winner",
      "Founded 'Women in Cybersecurity' mentorship program",
      "White House cybersecurity advisor",
    ],
    expertise: [
      "Cybersecurity",
      "Network Security",
      "Threat Intelligence",
      "Risk Management",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: "5",
    name: "Dr. Priya Patel",
    role: "Director of Research",
    company: "BioTech Innovations",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzU5MDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Revolutionizing biotech through computational biology and advancing personalized medicine with cutting-edge data science.",
    location: "Boston, MA",
    achievements: [
      "Developed breakthrough gene sequencing algorithms",
      "Published in Nature and Science journals",
      "National Science Foundation CAREER Award",
      "Founded nonprofit for STEM education",
    ],
    expertise: [
      "Computational Biology",
      "Data Science",
      "Genomics",
      "Bioinformatics",
    ],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "6",
    name: "Maya Thompson",
    role: "Chief Product Officer",
    company: "MobileFirst Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Creating award-winning mobile experiences that have been downloaded over 500 million times worldwide, focusing on emerging markets.",
    location: "New York, NY",
    achievements: [
      "500M+ app downloads",
      "Google Play 'App of the Year' winner",
      "Product Leader Fellowship at Stanford",
      "Advisor to multiple tech startups",
    ],
    expertise: [
      "Product Management",
      "Mobile Development",
      "UX Design",
      "Growth Strategy",
    ],
  },
];
