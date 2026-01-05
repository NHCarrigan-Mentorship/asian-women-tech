export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  category: string;
  date: string;
  source: string;
  imageUrl: string;
  featured: boolean;
  relatedProfileId?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    headline:
      "AI Pioneer Dr. Mei Chen's Diagnostic Tool Reaches 1,000 Hospitals Worldwide",
    summary:
      "Revolutionary AI-powered healthcare platform achieves major milestone, improving diagnostic accuracy by 40% and saving healthcare systems billions annually.",
    category: "Healthcare AI",
    date: "January 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    source: "Healthcare Innovation Report",
    featured: true,
    relatedProfileId: "1",
  },
  {
    id: "2",
    headline:
      "Quantum Computing Breakthrough: API Platform Democratizes Access for 15,000+ Developers",
    summary:
      "Yuki Tanaka's team at Quantum Dynamics launches revolutionary developer tools, making quantum computing accessible to researchers globally.",
    category: "Quantum Computing",
    date: "December 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
    source: "Tech Innovation Today",
    featured: true,
    relatedProfileId: "3",
  },
  {
    id: "3",
    headline:
      "CloudScale Solutions Valued at $2B, Becomes Latest Unicorn Led by Asian Woman Founder",
    summary:
      "Priya Sharma's cloud infrastructure company completes $200M Series D, joining elite group of billion-dollar tech companies with female leadership.",
    category: "Enterprise Tech",
    date: "November 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    source: "Business Tech News",
    featured: false,
    relatedProfileId: "2",
  },
  {
    id: "4",
    headline: "Women in Cybersecurity Initiative Trains 10,000th Professional",
    summary:
      "Sarah Kim's mentorship program celebrates milestone achievement, addressing critical skills gap while promoting diversity in information security.",
    category: "Cybersecurity",
    date: "October 2025",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    source: "Cybersecurity Journal",
    featured: false,
    relatedProfileId: "4",
  },
  {
    id: "5",
    headline:
      "Mobile App Reaches 600 Million Downloads, Transforms Digital Access in Emerging Markets",
    summary:
      "Li Wei's MobileFirst Labs expands to 120 countries, bridging the digital divide with innovative solutions for underserved communities.",
    category: "Mobile Technology",
    date: "September 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    source: "Global Tech Magazine",
    featured: false,
    relatedProfileId: "6",
  },
  {
    id: "6",
    headline:
      "Computational Biology Algorithms Accelerate Drug Discovery by 10x",
    summary:
      "Dr. Anh Nguyen's breakthrough gene sequencing technology enables faster development of personalized medicine treatments.",
    category: "Biotech",
    date: "August 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    source: "BioTech Today",
    featured: false,
    relatedProfileId: "5",
  },
  {
    id: "7",
    headline:
      "Study: Companies with Asian Women in Leadership Show 35% Higher Innovation Rates",
    summary:
      "New research highlights correlation between diverse leadership teams and breakthrough innovations in technology sector.",
    category: "Industry Research",
    date: "January 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    source: "Tech Diversity Report",
    featured: false,
  },
  {
    id: "8",
    headline:
      "Tech Industry Pledges $500M to Increase Asian Women Representation in Leadership",
    summary:
      "Major tech companies announce joint initiative to address representation gap and support career advancement programs.",
    category: "Industry News",
    date: "December 2025",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    source: "Industry Insider",
    featured: false,
  },
];
