export interface Profile {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  location: string;
  achievements: string[];
  expertise: string[];
  impact: {
    description: string;
    metrics?: string[];
  };

  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Dr. Mei Chen",
    role: "Chief AI Officer",
    company: "TechVision AI",
    image:
      "https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    impact: {
      description:
        "Developed AI systems that have improved diagnostic accuracy by 40% and reduced healthcare costs by $2B annually",
      metrics: [
        "500+ hospitals using her AI tools",
        "2M+ patients benefited",
        "$2B in healthcare savings",
      ],
    },
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Founder & CEO",
    company: "CloudScale Solutions",
    image:
      "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzd29tYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Building next-generation cloud infrastructure that powers sustainable and scalable digital transformation for enterprises worldwide.",
    location: "Seattle, WA",
    achievements: [
      "Raised $150M in Series C funding",
      "Grew company to 2000+ employees",
      "Named 'Cloud Innovator of the Year' by Tech Magazine",
      "MIT Technology Review's 35 Under 35",
    ],
    expertise: ["Cloud Computing", "DevOps", "Enterprise Software", "SaaS"],
    impact: {
      description:
        "CloudScale Solutions serves Fortune 500 companies, reducing their infrastructure costs by 60% while improving performance",
      metrics: [
        "200+ enterprise clients",
        "99.99% uptime guarantee",
        "60% cost reduction for clients",
      ],
    },
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    role: "VP of Engineering",
    company: "Quantum Dynamics",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwc29mdHdhcmUlMjBlbmdpbmVlcnxlbnwxfHx8fDE3Njc1OTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Leading quantum computing research and development, making quantum technology accessible to developers and researchers globally.",
    location: "Tokyo, Japan",
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
    impact: {
      description:
        "Democratized quantum computing access through developer-friendly tools used by 10,000+ researchers worldwide",
      metrics: [
        "10,000+ developers using quantum API",
        "50+ research institutions partnered",
        "100+ quantum algorithms published",
      ],
    },
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "4",
    name: "Sarah Kim",
    role: "Head of Cybersecurity",
    company: "SecureNet Global",
    image:
      "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdGVjaCUyMHByb2Zlc3Npb25hbCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3Njc1OTAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Protecting critical infrastructure through innovative cybersecurity solutions and leading initiatives to increase diversity in information security.",
    location: "Austin, TX",
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
    impact: {
      description:
        "Developed security frameworks protecting billions of dollars in assets and trained 5,000+ women in cybersecurity",
      metrics: [
        "$5B+ in assets protected",
        "10,000+ attacks prevented",
        "5,000+ women trained in cybersecurity",
      ],
    },
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: "5",
    name: "Dr. Anh Nguyen",
    role: "Director of Research",
    company: "BioTech Innovations",
    image:
      "https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwc2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    impact: {
      description:
        "Created algorithms that accelerated genetic research by 10x, enabling faster drug discovery and personalized treatments",
      metrics: [
        "300+ research papers cite her work",
        "10x faster genetic analysis",
        "20+ FDA-approved treatments enabled",
      ],
    },
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "6",
    name: "Maya Zhang",
    role: "Chief Product Officer",
    company: "MobileFirst Labs",
    image:
      "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzd29tYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Creating award-winning mobile experiences that have been downloaded over 500 million times worldwide, focusing on emerging markets.",
    location: "Singapore",
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
    impact: {
      description:
        "Built mobile platforms that bridge the digital divide in emerging markets, providing access to millions of underserved users",
      metrics: [
        "500M+ downloads",
        "50M+ monthly active users",
        "Available in 100+ countries",
      ],
    },
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
