export interface Profile {
  id: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  bio: string;
  location: string;
  achievements: {
    text: string;
    link?: string;
  }[];
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  lastUpdated?: string;
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
      {
        text: "Led development of AI-powered diagnostic tools used in 500+ hospitals",
        link: "https://www.healthcareitnews.com/news/ai-diagnostic-tools-transform-healthcare",
      },
      {
        text: "Published 50+ peer-reviewed papers on machine learning",
        link: "https://scholar.google.com/citations",
      },
      {
        text: "Forbes 30 Under 30 in Technology",
        link: "https://www.forbes.com/30-under-30/technology",
      },
      {
        text: "TED Speaker on AI Ethics",
        link: "https://www.ted.com/talks",
      },
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
    lastUpdated: "December 2025",
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
      {
        text: "Raised $150M in Series C funding",
        link: "https://techcrunch.com/2025/08/15/cloudscale-raises-150m-series-c",
      },
      {
        text: "Grew company to 2000+ employees",
      },
      {
        text: "Named 'Cloud Innovator of the Year' by Tech Magazine",
        link: "https://www.techmagazine.com/cloud-innovator-awards-2025",
      },
      {
        text: "MIT Technology Review's 35 Under 35",
        link: "https://www.technologyreview.com/lists/innovators-under-35",
      },
    ],
    expertise: ["Cloud Computing", "DevOps", "Enterprise Software", "SaaS"],
    social: {
      linkedin: "#",
      website: "#",
    },
    lastUpdated: "January 2026",
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
      {
        text: "Led team that developed first commercial quantum API",
        link: "https://www.quantumdynamics.com/blog/introducing-quantum-api",
      },
      {
        text: "IEEE Fellow for contributions to quantum computing",
        link: "https://www.ieee.org/membership/fellows/index.html",
      },
      {
        text: "Author of bestselling book 'Quantum Computing Simplified'",
        link: "https://www.amazon.com/Quantum-Computing-Simplified",
      },
      {
        text: "Keynote speaker at major tech conferences",
      },
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
    lastUpdated: "November 2025",
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
      {
        text: "Prevented over 10,000 cyber attacks",
      },
      {
        text: "CISO of the Year Award winner",
        link: "https://www.cybersecurityawards.com/ciso-of-the-year-2025",
      },
      {
        text: "Founded 'Women in Cybersecurity' mentorship program",
        link: "https://www.womenincybersecurity.org/about",
      },
      {
        text: "White House cybersecurity advisor",
        link: "https://www.whitehouse.gov/briefing-room/statements-releases",
      },
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
    lastUpdated: "October 2025",
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
      {
        text: "Developed breakthrough gene sequencing algorithms",
        link: "https://www.nature.com/articles/gene-sequencing-breakthrough-2025",
      },
      {
        text: "Published in Nature and Science journals",
        link: "https://www.nature.com/search?q=priya+patel",
      },
      {
        text: "National Science Foundation CAREER Award",
        link: "https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503214",
      },
      {
        text: "Founded nonprofit for STEM education",
      },
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
    lastUpdated: "September 2025",
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
      {
        text: "500M+ app downloads",
      },
      {
        text: "Google Play 'App of the Year' winner",
        link: "https://play.google.com/store/apps/editorial-collection/promotion_topic_bestof2025",
      },
      {
        text: "Product Leader Fellowship at Stanford",
        link: "https://www.gsb.stanford.edu/programs/product-leadership",
      },
      {
        text: "Advisor to multiple tech startups",
      },
    ],
    expertise: [
      "Product Management",
      "Mobile Development",
      "UX Design",
      "Growth Strategy",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    lastUpdated: "January 2026",
  },
];
