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
  {
    id: "7",
    name: "Jennifer Chen",
    role: "VP of Data Engineering",
    company: "DataStream Analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Building scalable data infrastructure processing petabytes of data daily, empowering data-driven decision making across Fortune 500 companies.",
    location: "Austin, TX",
    achievements: [
      { text: "Built data platform processing 10PB+ data daily" },
      {
        text: "O'Reilly Data Engineering Excellence Award",
        link: "https://www.oreilly.com/data/awards",
      },
      {
        text: "Speaker at Strata Data Conference",
        link: "https://conferences.oreilly.com/strata",
      },
      { text: "Open source contributor to Apache Spark and Kafka" },
    ],
    expertise: [
      "Data Engineering",
      "Big Data",
      "Apache Spark",
      "Data Pipelines",
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    lastUpdated: "December 2025",
  },
  {
    id: "8",
    name: "Samantha Williams",
    role: "Director of VR/AR",
    company: "Immersive Technologies",
    imageUrl:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2glMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Pioneering immersive experiences in virtual and augmented reality, creating innovative solutions for education, healthcare, and entertainment.",
    location: "Los Angeles, CA",
    achievements: [
      { text: "Led development of award-winning VR medical training platform" },
      {
        text: "VR/AR Innovation Award at CES 2025",
        link: "https://www.ces.tech/innovation-awards",
      },
      {
        text: "Featured in WIRED Magazine's VR Pioneers",
        link: "https://www.wired.com/tag/virtual-reality",
      },
      { text: "Patent holder for 15+ VR/AR technologies" },
    ],
    expertise: [
      "Virtual Reality",
      "Augmented Reality",
      "3D Graphics",
      "Human-Computer Interaction",
    ],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "November 2025",
  },
  {
    id: "9",
    name: "Fatima Al-Rashid",
    role: "Chief Technology Officer",
    company: "FinTech Innovations",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcmFiJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Transforming financial services through blockchain and digital payments, making banking accessible to underserved communities globally.",
    location: "London, UK",
    achievements: [
      { text: "Launched blockchain-based payment system serving 50M+ users" },
      {
        text: "Financial Times Top 100 Tech Leaders",
        link: "https://www.ft.com/tech-leaders",
      },
      {
        text: "World Economic Forum Technology Pioneer",
        link: "https://www.weforum.org/communities/technology-pioneers",
      },
      { text: "Advisor to Bank of England on digital currency" },
    ],
    expertise: [
      "Blockchain",
      "Financial Technology",
      "Digital Payments",
      "Cryptocurrency",
    ],
    social: { linkedin: "#", website: "#" },
    lastUpdated: "January 2026",
  },
  {
    id: "10",
    name: "Dr. Rachel Kim",
    role: "Head of Robotics",
    company: "AutomaTech Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhc2lhbiUyMHdvbWFuJTIwZW5naW5lZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Advancing robotics and automation with a focus on collaborative robots that work safely alongside humans in manufacturing and logistics.",
    location: "Tokyo, Japan",
    achievements: [
      { text: "Developed collaborative robot arm used in 1000+ factories" },
      {
        text: "Robotics Industry Association Innovation Award",
        link: "https://www.robotics.org/awards",
      },
      {
        text: "IEEE Robotics and Automation Award",
        link: "https://www.ieee-ras.org/awards",
      },
      { text: "Mentored 100+ women in STEM fields" },
    ],
    expertise: ["Robotics", "Automation", "Computer Vision", "Control Systems"],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "December 2025",
  },
  {
    id: "11",
    name: "Isabella Martinez",
    role: "VP of Software Engineering",
    company: "WebScale Platform",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXRpbmElMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Leading large-scale distributed systems development, building platforms that serve billions of requests daily with 99.99% uptime.",
    location: "Miami, FL",
    achievements: [
      { text: "Built platform serving 5 billion requests daily" },
      { text: "Led engineering team of 200+ developers" },
      {
        text: "Speaker at QCon and GOTO conferences",
        link: "https://qconferences.com/speakers",
      },
      { text: "Created open-source microservices framework" },
    ],
    expertise: [
      "Distributed Systems",
      "Microservices",
      "Kubernetes",
      "Site Reliability Engineering",
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    lastUpdated: "October 2025",
  },
  {
    id: "12",
    name: "Dr. Yuki Tanaka",
    role: "Research Scientist",
    company: "Neural Networks Lab",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhc2lhbiUyMHdvbWFuJTIwc2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Researching deep learning and neural networks to solve complex problems in natural language processing and computer vision.",
    location: "Singapore",
    achievements: [
      {
        text: "Published 40+ papers in top ML conferences",
        link: "https://scholar.google.com/citations",
      },
      {
        text: "Best Paper Award at NeurIPS 2025",
        link: "https://neurips.cc/awards",
      },
      {
        text: "Google Research Scholar",
        link: "https://research.google/outreach/research-scholar-program",
      },
      { text: "Developed state-of-the-art NLP model" },
    ],
    expertise: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Neural Networks",
    ],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "November 2025",
  },
  {
    id: "13",
    name: "Aaliyah Johnson",
    role: "Director of DevOps",
    company: "CloudNative Inc",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxibGFjayUyMHdvbWFuJTIwdGVjaCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzU5MDE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Streamlining software delivery through modern DevOps practices, enabling companies to deploy code 100x faster with higher quality.",
    location: "Chicago, IL",
    achievements: [
      { text: "Reduced deployment time from weeks to minutes" },
      {
        text: "DevOps Enterprise Summit keynote speaker",
        link: "https://events.itrevolution.com/virtual",
      },
      { text: "Certified Kubernetes Administrator (CKA)" },
      { text: "Founded 'Women in DevOps' community" },
    ],
    expertise: ["DevOps", "CI/CD", "Docker", "Infrastructure as Code"],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "September 2025",
  },
  {
    id: "14",
    name: "Elena Popescu",
    role: "Chief Information Officer",
    company: "Global Retail Tech",
    imageUrl:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxlYXN0ZXJuJTIwZXVyb3BlYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzU5MDE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Driving digital transformation in retail, implementing AI-powered solutions that enhance customer experiences across 5,000+ stores.",
    location: "Bucharest, Romania",
    achievements: [
      { text: "$500M digital transformation initiative" },
      {
        text: "Retail CIO of the Year 2025",
        link: "https://www.retailtechnologyshow.com/awards",
      },
      { text: "Implemented AI chatbot serving 10M+ customers" },
      { text: "Board member at European Tech Leaders Association" },
    ],
    expertise: [
      "Digital Transformation",
      "Retail Technology",
      "IT Strategy",
      "Enterprise Architecture",
    ],
    social: { linkedin: "#", website: "#" },
    lastUpdated: "January 2026",
  },
  {
    id: "15",
    name: "Nadia Ibrahim",
    role: "Lead Game Developer",
    company: "Epic Gaming Studios",
    imageUrl:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtaWRkbGUlMjBlYXN0ZXJuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc1OTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Creating immersive gaming experiences that have captivated 100 million players worldwide, pushing the boundaries of interactive storytelling.",
    location: "Montreal, Canada",
    achievements: [
      { text: "Developed games with 100M+ players" },
      {
        text: "Game of the Year Award winner",
        link: "https://thegameawards.com",
      },
      {
        text: "BAFTA Games Award nominee",
        link: "https://www.bafta.org/games",
      },
      { text: "GDC speaker on game design" },
    ],
    expertise: ["Game Development", "Unity", "Unreal Engine", "Game Design"],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "December 2025",
  },
  {
    id: "16",
    name: "Dr. Olivia Bennett",
    role: "Head of IoT",
    company: "SmartCity Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3b21hbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Building connected cities through IoT infrastructure, improving urban living with smart sensors and data-driven insights for millions.",
    location: "Copenhagen, Denmark",
    achievements: [
      { text: "Deployed IoT network across 20+ cities" },
      {
        text: "Smart Cities Innovation Award",
        link: "https://smartcitiesworld.net/awards",
      },
      { text: "Reduced city energy consumption by 30%" },
      { text: "UN Habitat advisor on smart cities" },
    ],
    expertise: [
      "Internet of Things",
      "Smart Cities",
      "Sensor Networks",
      "Edge Computing",
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    lastUpdated: "October 2025",
  },
  {
    id: "17",
    name: "Aisha Okafor",
    role: "VP of Engineering",
    company: "EdTech Platforms",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxibGFjayUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Democratizing education through technology, building platforms that provide quality learning experiences to 50 million students globally.",
    location: "Lagos, Nigeria",
    achievements: [
      { text: "Platform serving 50M+ students globally" },
      {
        text: "EdTech Innovation Award 2025",
        link: "https://edtechdigest.com/awards",
      },
      { text: "Featured in Forbes Africa's Tech Leaders" },
      { text: "Partnership with UNESCO on digital literacy" },
    ],
    expertise: [
      "Educational Technology",
      "Learning Management Systems",
      "Mobile Apps",
      "Accessibility",
    ],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "November 2025",
  },
  {
    id: "18",
    name: "Carmen Silva",
    role: "Director of ML Operations",
    company: "AI Solutions Corp",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsYXRpbmElMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Operationalizing machine learning at scale, deploying and monitoring hundreds of ML models in production serving billions of predictions.",
    location: "São Paulo, Brazil",
    achievements: [
      { text: "Managing 500+ ML models in production" },
      { text: "MLOps Community Award winner" },
      { text: "Reduced model deployment time by 90%" },
      { text: "Speaker at MLOps World conference" },
    ],
    expertise: ["MLOps", "Model Deployment", "Machine Learning", "Monitoring"],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "September 2025",
  },
  {
    id: "19",
    name: "Dr. Sarah Lindström",
    role: "Chief Data Officer",
    company: "HealthTech Analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxzY2FuZGluYXZpYW4lMjB3b21hbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzU5MDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Leveraging healthcare data to improve patient outcomes, building analytics platforms that help providers make better clinical decisions.",
    location: "Stockholm, Sweden",
    achievements: [
      { text: "Analytics platform used by 2000+ hospitals" },
      { text: "Healthcare Data Innovation Award" },
      { text: "Improved patient outcomes by 25%" },
      { text: "Published research on health informatics" },
    ],
    expertise: [
      "Healthcare Analytics",
      "Data Science",
      "Health Informatics",
      "Predictive Modeling",
    ],
    social: { linkedin: "#", website: "#" },
    lastUpdated: "January 2026",
  },
  {
    id: "20",
    name: "Mei Wang",
    role: "Head of Platform Engineering",
    company: "E-Commerce Giant",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Building resilient platform infrastructure that powers one of the world's largest e-commerce sites, handling millions of transactions per day.",
    location: "Shanghai, China",
    achievements: [
      { text: "Platform handling 10M+ transactions daily" },
      { text: "Achieved 99.999% uptime for 3 years" },
      { text: "Led team through successful Black Friday scaling" },
      { text: "Architect of microservices platform" },
    ],
    expertise: [
      "Platform Engineering",
      "E-commerce",
      "System Design",
      "Performance Optimization",
    ],
    social: { linkedin: "#", twitter: "#" },
    lastUpdated: "December 2025",
  },
];
