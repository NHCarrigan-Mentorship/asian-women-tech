export interface Profile {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  bio: string;
  achievements: string[];
  impact: {
    description: string;
    metrics?: string[];
  };

  socials?: {
    linkedin?: string;
    twitter?: string;
    wikipedia?: string;
  };
}

export const profiles: Profile[] = [
    {
        id: "1",
        name: "Sarah Kim",
        role: "Head of Cybersecurity",
        company: "SecureNet Global",
        location: "San Francisco, CA",
        image: "https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTkwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        bio: "Pioneering artificial intelligence research with a focus on ethical AI development and implementation in healthcare technology.",
        achievements: [
             "Led development of AI-powered diagnostic tools used in 500+ hospitals",
            "Published 50+ peer-reviewed papers on machine learning",
            "Forbes 30 Under 30 in Technology",
            "TED Speaker on AI Ethics"
        ],
        impact: {
            description: "Developed AI systems that have improved diagnostic accuracy by 40% and reduced healthcare costs by $2B annually",
            metrics: [
                "500+ hospitals using her AI tools",
                "2M+ patients benefited",
                "$2B in healthcare savings"
            ]
        },
        socials: {
            linkedin: "#",
            wikipedia: "#"
        }
    }
]