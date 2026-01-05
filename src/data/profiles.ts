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
