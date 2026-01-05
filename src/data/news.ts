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
